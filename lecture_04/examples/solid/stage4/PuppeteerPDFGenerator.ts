import { launch } from "puppeteer";
import { DailyReportPDFTemplate } from "./DailyReportPDFTemplate";
import { WeeklyReportPDFTemplate } from "./WeeklyReportPDFTemplate";

export class PuppeteerPDFGenerator {
  public async generatePDF(
    template: DailyReportPDFTemplate | WeeklyReportPDFTemplate
  ): Promise<Buffer> {
    const browser = await launch();

    const page = await browser.newPage();

    const html = template.getHTML();

    await page.setContent(html);

    const pdfBuffer: Buffer = await page.pdf({
      landscape: template.isLandscape(),
    });

    return pdfBuffer;
  }
}
