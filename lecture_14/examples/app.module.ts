import { AppController } from "./app.controller";
import { OrderModule } from "./order/order.module";
import { PDFGeneratorModule } from "./common/infrastructure/services/pdfGenerator/pdfGenerator.module";

@Module({
  imports: [OrderModule, PDFGeneratorModule],
  controllers: [AppController],
  providers: [],
})
export class ApplicationModule {
  static host: string;
  static port: number;

  constructor(private readonly logger: Logger) {
    this.logger.setContext(ApplicationModule.name);
  }
}
