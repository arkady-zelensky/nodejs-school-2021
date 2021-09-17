export class WeeklyReportPDFTemplate {
  private readonly _landscape = false;

  private readonly _params: {
    dateFrom: Date;
    dateTo: Date;
    totalNumber: number;
  };

  constructor(dateFrom: Date, dateTo: Date, totalNumber: number) {
    this._params = {
      dateFrom,
      dateTo,
      totalNumber,
    };
  }

  public getHTML(): string {
    return `
    <div>Date from: ${this._params.dateFrom}</div>
    <div>Date to: ${this._params.dateTo}</div>
    <div>Total number: ${this._params.totalNumber}</div>
  `;
  }

  public isLandscape(): boolean {
    return this._landscape;
  }
}
