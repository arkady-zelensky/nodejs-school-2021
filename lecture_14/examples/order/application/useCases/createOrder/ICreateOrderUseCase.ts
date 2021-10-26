import { DSCreateOrderUseCaseInput } from './DSCreateOrderUseCaseInput';
import { DSCreateOrderUseCaseOutput } from './DSCreateOrderUseCaseOutput';

export interface ICreateOrderUseCase {
  execute(
    inputData: DSCreateOrderUseCaseInput,
  ): Promise<DSCreateOrderUseCaseOutput>;
}
