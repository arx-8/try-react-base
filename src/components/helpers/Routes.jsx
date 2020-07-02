import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { NotFound } from "src/components/pages/NotFound"
import { Root } from "src/components/pages/Root"
import { routePath } from "src/constants/routePath"

export const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route component={Root} exact path={routePath.root} />

        {/* No route */}
        <Route component={NotFound} path={routePath.root} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}
