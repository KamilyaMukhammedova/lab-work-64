import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Form from "./containers/Form/Form";
import Posts from "./containers/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Posts}/>
        <Route path="/posts/add" exact component={Form}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
