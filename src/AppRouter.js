import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  NewDogPage,
  GreetingPage,
  LoggingInfoPage,
  FoodAndBehaviorPage
} from './pages';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ NewDogPage } />
        <Route path="/greeting" component={ GreetingPage } />
        <Route path="/logging-info-1" component={ LoggingInfoPage } />
        <Route path="/logging-info-2" component={ FoodAndBehaviorPage } />
        <Route path="/profile" component={ () => <div>DoggyData5</div> } />
      </Switch>
    </Router>
  );
}