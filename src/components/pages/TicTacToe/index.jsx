/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import { TTTBoard } from "src/components/organisms/TTTBoard"
import { TTTGameInfo } from "src/components/organisms/TTTGameInfo"
import { pt, pt2 } from "src/components/styles/utils"
import { calculateWinner } from "src/utils/tttUtils"

/**
 * @type {("O" | "X" | undefined)[]}
 */
const initialInputValues = [
  /* eslint-disable */
  undefined, undefined, undefined,
  undefined, undefined, undefined,
  undefined, undefined, undefined,
  /* eslint-enable */
]

/**
 * 三木並べアプリ
 */
export const TicTacToe = () => {
  const [inputValues, setInputValues] = useState(initialInputValues)
  const [currentPlayerName, setCurrentPlayerName] = useState("O")

  const onClickSquare = (index) => {
    const next = [...inputValues]
    next[index] = currentPlayerName
    setInputValues(next)
    setCurrentPlayerName(currentPlayerName === "O" ? "X" : "O")
  }

  const onReset = () => {
    setInputValues(initialInputValues)
    setCurrentPlayerName("O")
  }

  const winner = calculateWinner(inputValues)

  return (
    <div css={root}>
      <h1>TicTacToe App</h1>
      <div css={pt2}>
        <div css={pt}>
          <TTTBoard
            inputValues={inputValues}
            isGameOver={winner != null}
            onClickSquare={onClickSquare}
          />
          <div css={pt}>
            <button onClick={onReset}>Reset</button>
          </div>
        </div>
        <div css={pt}>
          <TTTGameInfo
            currentPlayerName={currentPlayerName}
            winnerPlayerName={winner}
          />
        </div>
      </div>
    </div>
  )
}

const root = css`
  padding: 16px;
`
