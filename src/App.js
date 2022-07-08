import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Form from "./containers/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/posts/add" exact component={Form}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
