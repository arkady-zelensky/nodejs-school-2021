import { Injectable } from "@nestjs/common";
import { Readable } from "stream";
import { AbstractPDFTemplate } from "../../../application/services/pdfGenerator/AbstractPDFTemplate";
import { IPDFGenerator } from "../../../application/services/pdfGenerator/IPDFGenerator";
import { Browser, launch, PDFFormat, PDFOptions } from "puppeteer";
import { DSPDFTemplateOptions } from "../../../application/services/pdfGenerator/dataStructures/DSPDFTemplateOptions";
import { PDFPageFormat } from "../../../application/services/pdfGenerator/enums/PDFPageFormat";
import { PDFPageOrientation } from "../../../application/services/pdfGenerator/enums/PDFPageOrientation";

@Injectable()
export class PuppeteerPDFGenerator implements IPDFGenerator {
  private _browserInstance: Browser | null = null;

  private async getBrowserInstance(): Promise<Browser> {
    if (this._browserInstance === null) {
      this._browserInstance = await launch({
        headless: true,
      });
    }

    return this._browserInstance;
  }

  public async generatePDF<
    TPDFTemplatePayload extends {},
    TPDFTemplate extends AbstractPDFTemplate<TPDFTemplatePayload>
  >(pdfTemplatePayload: TPDFTemplate): Promise<Readable> {
    const browser = await this.getBrowserInstance();

    const page = await browser.newPage();

    try {
      const html = pdfTemplatePayload.getHTML();

      await page.setContent(html, {
        waitUntil: "domcontentloaded",
      });

      const options: DSPDFTemplateOptions = pdfTemplatePayload.getOptions();

      const puppeterPDFOptions: PDFOptions =
        this.mapPDFTemplateOptions(options);

      const pdfBuffer: Buffer = await page.pdf(puppeterPDFOptions);

      const pdfStream: Readable = new Readable({
        read() {
          this.push(pdfBuffer);
          this.push(null);
        },
      });

      return pdfStream;
    } finally {
      await page.close();
    }
  }

  private mapPDFTemplateOptions(
    templateOptions: DSPDFTemplateOptions
  ): PDFOptions {
    let format: PDFFormat;

    switch (templateOptions.format) {
      case PDFPageFormat.A4:
        format = "A4";
        break;
    }

    return {
      format,
      margin: {
        bottom: templateOptions.pagePadding.bottom,
        left: templateOptions.pagePadding.left,
        right: templateOptions.pagePadding.right,
        top: templateOptions.pagePadding.top,
      },
      landscape: templateOptions.orientation === PDFPageOrientation.LANDSCAPE,
    };
  }
}
