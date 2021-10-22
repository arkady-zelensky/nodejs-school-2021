export function shuffle <T>(arr: T[]): T[] {
  return arr.sort(() => 0.5 - Math.random());
}

export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
