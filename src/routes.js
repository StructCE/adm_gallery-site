import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PaintingExhibition from './pages/PaintingExhibition'
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ArtistPage from "./pages/ArtistPage";

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
      <Route exact path="/paintings">
        <PaintingExhibition/>
      </Route>
      <Route path="/artist/:id">
        <ArtistPage />
      </Route>
    </Switch>
  )
} 
