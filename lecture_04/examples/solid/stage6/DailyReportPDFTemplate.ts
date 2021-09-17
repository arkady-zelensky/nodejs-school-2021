import { AbstractPDFTemplate } from "./AbstractPDFTemplate";

interface DailyReportPDFTemplatePayload {
  date: Date;
  totalNumber: number;
}

export class DailyReportPDFTemplate extends AbstractPDFTemplate<DailyReportPDFTemplatePayload> {
  protected readonly _landscape = true;

  constructor(params: DailyReportPDFTemplatePayload) {
    super(params);
  }

  public getHTML(): string {
    return `
      <div>Date: ${this._params.date}</div>
      <div>Total number: ${this._params.totalNumber}</div>
    `;
  }
}
