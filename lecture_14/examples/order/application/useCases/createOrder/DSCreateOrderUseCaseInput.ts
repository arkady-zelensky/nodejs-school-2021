export class DSCreateOrderUseCaseInput {
  orders: Array<{
    orderConfirmedBy?: string;
    orderConfirmedByTitle?: string;
  }>;
}
