import { launch } from "puppeteer";
import { dailyReportTemplate } from "./dailyReportPDFTemplate";

export class PuppeteerPDFGenerator {
  public async generateDailyReport(date: Date, totalNumber: number) {
    const browser = await launch();

    const page = await browser.newPage();

    const html = dailyReportTemplate(date, totalNumber);

    await page.setContent(html);

    const pdfBuffer: Buffer = await page.pdf();

    return pdfBuffer;
  }
}
