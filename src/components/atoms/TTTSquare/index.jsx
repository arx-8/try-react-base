/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const TTTSquare = ({ disabled, value, onClick }) => {
  return (
    <button css={root} disabled={disabled} onClick={onClick}>
      {value}
    </button>
  )
}

const root = css`
  background: #fff;
  float: left;
  font-size: 24px;
  font-weight: bold;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;

  &:focus {
    outline: none;
  }
`
