/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import { ml, pt, pt2 } from "src/components/styles/utils"

/**
 * カウンターアプリ
 */
export const Counter = () => {
  const [count, setCount] = useState(0)
  const [extraCount, setExtraCount] = useState(0)

  const onAdd = (n) => {
    setCount(count + Number(n))
  }

  return (
    <div css={root}>
      <h1>Counter App</h1>
      <div css={pt2}>
        <div>{count}</div>
        <div css={pt}>
          <button css={btn} onClick={() => onAdd(1)}>
            Add 1
          </button>
          <button css={[ml, btn]} onClick={() => onAdd(100)}>
            Add 100
          </button>
          <button css={[ml, btn]} onClick={() => onAdd(-1)}>
            Minus 1
          </button>
          <button css={[ml, btn]} onClick={() => onAdd(-100)}>
            Minus 100
          </button>
        </div>
        <div css={pt}>
          <input
            onChange={(e) => setExtraCount(e.target.value)}
            type="number"
            value={extraCount}
          />
          <button css={[ml, extraBtn]} onClick={() => onAdd(extraCount)}>
            Extra Add
          </button>
        </div>
      </div>
    </div>
  )
}

const root = css`
  padding: 8px;
`

const btn = css`
  background-color: aliceblue;
  border-color: aliceblue;
`

const extraBtn = css`
  background-color: gold;
  border-color: yellow;
`
