import { Switch, Route } from 'react-router-dom';
import PaintingExhibition from './pages/PaintingExhibition'


export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/paintings">
        <PaintingExhibition/>
      </Route>
    </Switch>
  )
} 