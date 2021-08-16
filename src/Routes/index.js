import { Route, Switch } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import Test from "../pages/TestPage"

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/signup' component={SignUpPage}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/test' component={Test}/>
        </Switch>
    )
}

export default Routes