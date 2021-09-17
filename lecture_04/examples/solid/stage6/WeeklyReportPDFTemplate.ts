import { AbstractPDFTemplate } from "./AbstractPDFTemplate";

interface WeeklyReportPDFTemplatePayload {
  dateFrom: Date;
  dateTo: Date;
  totalNumber: number;
}

export class WeeklyReportPDFTemplate extends AbstractPDFTemplate<WeeklyReportPDFTemplatePayload> {
  protected readonly _landscape = false;

  constructor(params: WeeklyReportPDFTemplatePayload) {
    super(params);
  }

  public getHTML(): string {
    return `
      <div>Date from: ${this._params.dateFrom}</div>
      <div>Date to: ${this._params.dateTo}</div>
      <div>Total number: ${this._params.totalNumber}</div>
    `;
  }
}
