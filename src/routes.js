import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PaintingExhibition from './pages/PaintingExhibition'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/paintings">
        <PaintingExhibition/>
      </Route>
    </Switch>
  )
} 
