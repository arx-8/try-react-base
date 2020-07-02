/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import logo from "src/logo.svg"

export const App = () => {
  return (
    <div css={root}>
      <header css={headerCss}>
        <img alt="logo" css={logoCss} src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          css={link}
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const root = css`
  text-align: center;
`

const headerCss = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const logoCss = css`
  height: 40vmin;
  pointer-events: none;
`

const link = css`
  color: #61dafb;
`
