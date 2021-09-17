import { launch } from "puppeteer";
import { dailyReportTemplate } from "./dailyReportPDFTemplate";
import { weeklyReportPDFTemplate } from "./weeklyReportPDFTemplate";

export class PuppeteerPDFGenerator {
  public async generateDailyReport(date: Date, totalNumber: number) {
    const html = dailyReportTemplate(date, totalNumber);

    return this.generatePDF(html);
  }

  public async generateWeeklyReport(
    dateFrom: Date,
    dateTo: Date,
    totalNumber: number
  ) {
    const html = weeklyReportPDFTemplate(dateFrom, dateTo, totalNumber);

    return this.generatePDF(html);
  }

  private async generatePDF(html: string): Promise<Buffer> {
    const browser = await launch();

    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer: Buffer = await page.pdf();

    return pdfBuffer;
  }
}
