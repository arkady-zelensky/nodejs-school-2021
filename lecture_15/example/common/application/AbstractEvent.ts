export abstract class AbstractEvent<TPayload> {
  private readonly _payload: Readonly<TPayload>;

  public constructor(payload: TPayload) {
    this._payload = Object.freeze(payload);
  }

  public get payload(): Readonly<TPayload> {
    return this._payload;
  }
}
