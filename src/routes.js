import { Switch, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/signup' component={SignUpPage}/>
            <Route exact path='/login' component={LoginPage}/>
        </Switch>
    )
}
