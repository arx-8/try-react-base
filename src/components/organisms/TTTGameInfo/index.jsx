/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const TTTGameInfo = ({ currentPlayerName, winnerPlayerName }) => {
  return (
    <div css={root}>
      <div>
        Current player: <span css={playerName}>{currentPlayerName}</span>
      </div>
      {winnerPlayerName && (
        <div css={winner}>Winner is {winnerPlayerName} !!</div>
      )}
    </div>
  )
}

const root = css``

const playerName = css`
  font-weight: bold;
`

const winner = css`
  color: red;
  font-size: xxx-large;

  animation: fluffy1 1s ease infinite;
  @keyframes fluffy1 {
    0% {
      transform: translateX(0);
    }
    5% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-15px);
    }
    25% {
      transform: translateX(0);
    }
    30% {
      transform: translateX(-15px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }
`
