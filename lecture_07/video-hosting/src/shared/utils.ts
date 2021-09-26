export function shuffle <T>(arr: T[]): T[] {
  return arr.sort(() => 0.5 - Math.random());
}
