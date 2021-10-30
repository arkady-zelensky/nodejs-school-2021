import { logger } from '../../shared/util/logger';
import { hrtimeToMs } from '../utils/measureInvocationTime';
import { UUIDGenerator } from '../utils/UUIDGenerator';
import { AbstractEvent } from './AbstractEvent';
import { IDBContext } from './IDBContext';

export abstract class AbstractEventHandler<TEvent extends AbstractEvent<any>> {
  protected abstract _dbContext: IDBContext;

  private _onRollbackHandlers: Array<(...args: any) => Promise<any> | any>;

  public constructor() {
    this._onRollbackHandlers = [];
  }

  public async handle(event: TEvent): Promise<void> {
    const jobId = UUIDGenerator.generate();

    logger.child({
      context: `${this.constructor.name} -> ${jobId}`,
    });

    logger.info('running_event_handler', {
      name: event.constructor.name,
    });
    logger.info('event_payload', { payload: event.payload });

    logger.info('starting_db_transaction');
    await this._dbContext.startTransaction();
    logger.info('db_transaction_started');

    try {
      logger.info('invoking_event_handler');

      const start = process.hrtime();

      await this.implementation(event);

      const end = process.hrtime(start);

      logger.info('event_handler_invoked', {
        duration: hrtimeToMs(end),
      });

      logger.info('committing_db_transaction');
      await this._dbContext.commitTransaction();
      logger.info('db_transaction_committed');
    } catch (error) {
      logger.info('event_handler_error', { error });

      logger.info('transaction_rollback');
      await this._dbContext.rollbackTransaction();
      logger.info('transaction_rolled_back');

      if (this._onRollbackHandlers.length > 0) {
        logger.info('running_rollback_handlers');

        await Promise.all(
          this._onRollbackHandlers.map(async (action) => {
            try {
              await action(error);
            } catch (rollbackError) {
              logger.info('event_rollback_handler_error', { rollbackError });
            }
          }),
        );

        logger.info('successfully_rolled_back');
      }
    }
  }

  protected addRollbackHandler(handler: (...args: any) => Promise<any> | any) {
    this._onRollbackHandlers.push(handler);
  }

  protected abstract implementation(event: TEvent): Promise<void>;
}
