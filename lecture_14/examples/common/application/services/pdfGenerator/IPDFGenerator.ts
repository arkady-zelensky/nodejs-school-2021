import { Readable } from 'stream';
import { AbstractPDFTemplate } from './AbstractPDFTemplate';

export interface IPDFGenerator {
  generatePDF<TPDFTemplatePayload extends AbstractPDFTemplate<any>>(
    pdfTemplate: TPDFTemplatePayload,
  ): Promise<Readable>;
}
