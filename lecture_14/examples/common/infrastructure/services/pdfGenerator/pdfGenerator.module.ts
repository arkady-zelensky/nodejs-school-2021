import { Module } from '@nestjs/common';
import { PuppeteerPDFGenerator } from './PuppeteerPDFGenerator';

@Module({
  providers: [PuppeteerPDFGenerator],
  exports: [PuppeteerPDFGenerator],
})
export class PDFGeneratorModule {}
