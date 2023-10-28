export function shuffle(t: Array<any>) {
  let n
  let last = t.length
  while (last > 0) {
    n = rand(last)
    swap(t, n, --last)
  }
  return t
}
const rand = (n: number) => 0 | (Math.random() * n)

function swap(t: Array<any>, i: number, j: number) {
  const q = t[i]
  t[i] = t[j]
  t[j] = q
  return t
}
