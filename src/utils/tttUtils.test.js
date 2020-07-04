import { calculateWinner } from "./tttUtils"

const o = "O"
const x = "X"
const _ = undefined

describe("calculateWinner", () => {
  test("no winner (空)", () => {
    // ## Arrange ##
    const values = [
      /* eslint-disable prettier/prettier */
      _, _, _,
      _, _, _,
      _, _, _,
      /* eslint-enable prettier/prettier */
    ]

    // ## Act ##
    const result = calculateWinner(values)

    // ## Assert ##
    expect(result).toStrictEqual(undefined)
  })

  test("no winner (途中)", () => {
    // ## Arrange ##
    const values = [
      /* eslint-disable prettier/prettier */
      _, _, o,
      _, x, _,
      o, o, _,
      /* eslint-enable prettier/prettier */
    ]

    // ## Act ##
    const result = calculateWinner(values)

    // ## Assert ##
    expect(result).toStrictEqual(undefined)
  })

  test("no winner (ゲームオーバー))", () => {
    // ## Arrange ##
    const values = [
      /* eslint-disable prettier/prettier */
      o, x, o,
      x, x, o,
      o, o, x,
      /* eslint-enable prettier/prettier */
    ]

    // ## Act ##
    const result = calculateWinner(values)

    // ## Assert ##
    expect(result).toStrictEqual(undefined)
  })

  test("winner is O", () => {
    // ## Arrange ##
    const values = [
      /* eslint-disable prettier/prettier */
      _, _, o,
      x, o, x,
      o, x, o,
      /* eslint-enable prettier/prettier */
    ]

    // ## Act ##
    const result = calculateWinner(values)

    // ## Assert ##
    expect(result).toStrictEqual("O")
  })

  test("winner is X", () => {
    // ## Arrange ##
    const values = [
      /* eslint-disable prettier/prettier */
      o, _, o,
      _, o, _,
      x, x, x,
      /* eslint-enable prettier/prettier */
    ]

    // ## Act ##
    const result = calculateWinner(values)

    // ## Assert ##
    expect(result).toStrictEqual("X")
  })
})
