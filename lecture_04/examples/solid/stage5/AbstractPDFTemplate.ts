export abstract class AbstractPDFTemplate<TParams extends {}> {
  protected abstract readonly _landscape: boolean;

  protected readonly _params: TParams;

  constructor(params: TParams) {
    this._params = params;
  }

  public abstract getHTML(): string;

  public isLandscape(): boolean {
    return this._landscape;
  }
}
