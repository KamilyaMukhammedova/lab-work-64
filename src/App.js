import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Form from "./containers/Form/Form";
import Posts from "./containers/Posts/Posts";
import PostInfo from "./containers/PostInfo/PostInfo";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Posts}/>
        <Route path="/posts/add" exact component={Form}/>
        <Route path="/posts/:id" component={PostInfo}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
