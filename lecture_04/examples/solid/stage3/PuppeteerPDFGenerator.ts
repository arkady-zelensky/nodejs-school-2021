import { launch } from "puppeteer";

export class PuppeteerPDFGenerator {
  public async generatePDF(html: string, landscape: boolean): Promise<Buffer> {
    const browser = await launch();

    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer: Buffer = await page.pdf({ landscape });

    return pdfBuffer;
  }
}
