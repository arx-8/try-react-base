/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "react-router-dom"
import { pt2 } from "src/components/styles/utils"
import { routePath } from "src/constants/routePath"

export const Root = () => {
  return (
    <div>
      <div css={pt2}>
        <Link to={routePath.counter}>Counter App</Link>
      </div>
      <div css={pt2}>
        <Link to={routePath.ticTacToe}>TicTacToe App</Link>
      </div>
      <div css={pt2}>
        <Link to={routePath.todo}>Todo App</Link>
      </div>
    </div>
  )
}
