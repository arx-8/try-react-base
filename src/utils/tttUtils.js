/**
 * 勝利の index の組合せ
 */
const winIndexes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

/**
 * @param {("O" | "X" | undefined)[]} values
 * @returns {"O" | "X" | undefined} 勝者のマーク
 */
export const calculateWinner = (values) => {
  for (const indexes of winIndexes) {
    // この 3 つの index に同じマークが入力されていれば、そのマークが勝者である
    const [i0, i1, i2] = indexes
    const v = values[i0]
    if (v != null && v === values[i1] && v === values[i2]) {
      return v
    }
  }

  return undefined
}
