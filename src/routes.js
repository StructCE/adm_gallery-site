import { Switch, Route } from 'react-router-dom';
import ArtistPage from "./pages/ArtistPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/artist/:id">
        <ArtistPage />
      </Route>
    </Switch>
  )
} 