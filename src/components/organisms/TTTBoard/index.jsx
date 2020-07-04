/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { TTTSquare } from "src/components/atoms/TTTSquare"

export const TTTBoard = ({ inputValues, isGameOver, onClickSquare }) => {
  return (
    <div>
      <div css={container}>
        {inputValues.map((v, index) => (
          <TTTSquare
            disabled={isGameOver || v != null}
            // 他にキーがない・固定枠でパフォーマンス劣化もないため
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => onClickSquare(index)}
            value={v}
          />
        ))}
      </div>
    </div>
  )
}

const container = css`
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-template-rows: 40px 40px 40px;
`
