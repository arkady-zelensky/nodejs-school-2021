import { launch } from "puppeteer";

export class PuppeteerPDFGenerator {
  public async generatePDF(html: string): Promise<Buffer> {
    const browser = await launch();

    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer: Buffer = await page.pdf();

    return pdfBuffer;
  }
}
