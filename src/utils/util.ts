export function randomChoice<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function truncate(text: string, MAX_COUNT = 178): string {
  return text.length > MAX_COUNT ? `${text.slice(0, MAX_COUNT)}...` : text
}
