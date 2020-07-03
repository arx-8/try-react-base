import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Counter } from "src/components/pages/Counter"
import { NotFound } from "src/components/pages/NotFound"
import { Root } from "src/components/pages/Root"
import { TicTacToe } from "src/components/pages/TicTacToe"
import { Todo } from "src/components/pages/Todo"
import { routePath } from "src/constants/routePath"

export const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route component={Root} exact path={routePath.root} />
        <Route component={Counter} exact path={routePath.counter} />
        <Route component={TicTacToe} exact path={routePath.ticTacToe} />
        <Route component={Todo} exact path={routePath.todo} />

        {/* No route */}
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}
