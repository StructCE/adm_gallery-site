import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PaintingExhibition from './pages/PaintingExhibition'
import ViewPainting from './pages/ViewPainting';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/paintings">
        <PaintingExhibition/>
      </Route>
      <Route exact path="/paintings/:id">
        <ViewPainting />
      </Route>
    </Switch>
  )
} 
