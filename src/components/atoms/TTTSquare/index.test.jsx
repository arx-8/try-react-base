import { render } from "@testing-library/react"
import React from "react"

import { TTTSquare } from "./"

describe("snapshot testing", () => {
  test("no value", () => {
    // ## Arrange ##
    // ## Act ##
    const { container } = render(<TTTSquare />)

    // ## Assert ##
    expect(container).toMatchSnapshot()
  })

  test("O", () => {
    // ## Arrange ##
    // ## Act ##
    const { container } = render(<TTTSquare value="O" />)

    // ## Assert ##
    expect(container).toMatchSnapshot()
  })

  test("disabled", () => {
    // ## Arrange ##
    // ## Act ##
    const { container } = render(<TTTSquare disabled value="X" />)

    // ## Assert ##
    expect(container).toMatchSnapshot()
  })
})
