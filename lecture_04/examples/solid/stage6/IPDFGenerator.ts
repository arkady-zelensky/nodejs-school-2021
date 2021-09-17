import { AbstractPDFTemplate } from "./AbstractPDFTemplate";

export interface IPDFGenerator {
  generatePDF<TPayload>(
    template: AbstractPDFTemplate<TPayload>
  ): Promise<Buffer>;
}
