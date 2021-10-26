import { PDFPageFormat } from '../enums/PDFPageFormat';
import { PDFPageOrientation } from '../enums/PDFPageOrientation';

export interface DSPDFTemplateOptions {
  orientation: PDFPageOrientation;
  pagePadding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  format: PDFPageFormat;
}
