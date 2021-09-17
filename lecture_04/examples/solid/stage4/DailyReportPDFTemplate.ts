export class DailyReportPDFTemplate {
  private readonly _landscape = true;

  private readonly _params: {
    date: Date;
    totalNumber: number;
  };

  constructor(date: Date, totalNumber: number) {
    this._params = {
      date,
      totalNumber,
    };
  }

  public getHTML(): string {
    return `
    <div>Date: ${this._params.date}</div>
    <div>Total number: ${this._params.totalNumber}</div>
  `;
  }

  public isLandscape(): boolean {
    return this._landscape;
  }
}
