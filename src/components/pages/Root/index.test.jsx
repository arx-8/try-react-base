import { render } from "@testing-library/react"
import React from "react"
import { Routes } from "src/components/helpers/Routes"

import { Root } from "./"

describe("snapshot testing", () => {
  test("render", () => {
    // ## Arrange ##
    // ## Act ##
    const { container } = render(
      <Routes>
        <Root />
      </Routes>
    )

    // ## Assert ##
    expect(container).toMatchSnapshot()
  })
})
