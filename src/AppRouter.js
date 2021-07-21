import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function AppRouter()
{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ () => <div>DoggyData1</div> } />
        <Route path="/greeting" component={ () => <div>DoggyData2</div> } />
        <Route path="/logging-info-1" component={ () => <div>DoggyData3</div> } />
        <Route path="/logging-info-2" component={ () => <div>DoggyData4</div> } />
        <Route path="/profile" component={ () => <div>DoggyData5</div> } />
      </Switch>
    </Router>
  );
}