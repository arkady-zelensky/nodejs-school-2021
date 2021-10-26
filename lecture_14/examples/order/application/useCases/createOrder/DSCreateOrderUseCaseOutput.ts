export class DSCreateOrderUseCaseOutput {
  orders: Array<{
    id: number;
    orderConfirmedBy: string | null;
    orderConfirmedByTitle: string | null;
  }>;
}
