import { Switch, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Test from "./pages/TestPage"

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/test">
        <Test />
      </Route>
    </Switch>
  )
}
