import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NewDogPage } from './pages';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ NewDogPage } />
        <Route path="/greeting" component={ () => <div>DoggyData2</div> } />
        <Route path="/logging-info-1" component={ () => <div>DoggyData3</div> } />
        <Route path="/logging-info-2" component={ () => <div>DoggyData4</div> } />
        <Route path="/profile" component={ () => <div>DoggyData5</div> } />
      </Switch>
    </Router>
  );
}