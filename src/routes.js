import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PaintingExhibition from './pages/PaintingExhibition'
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ArtistPage from "./pages/ArtistPage";
import ArtistsExhibition from "./pages/ArtistsExhibition"
import ProfilePage from "./pages/ProfilePage"
import ViewPainting from './pages/ViewPainting';
import Test from "./pages/TestPage"
import { PrivateRoute } from "./privateRoute.js"

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute exact path="/profile" component={ProfilePage}/>
      <Route exact path="/paintings">
        <PaintingExhibition/>
      </Route>
      <Route exact path="/artist/:id">
        <ArtistPage />
      </Route>
      <Route exact path="/artists">
        <ArtistsExhibition />
      </Route>
      <Route exact path="/paintings/:id">
        <ViewPainting />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
    </Switch>
  )
} 
