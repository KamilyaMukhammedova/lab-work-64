import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Form from "./containers/Form/Form";
import Posts from "./containers/Posts/Posts";
import PostInfo from "./containers/PostInfo/PostInfo";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Posts}/>
        <Route path="/posts/add" component={Form}/>
        <Route path="/posts/:id/edit" component={Form}/>
        <Route path="/posts/:id" component={PostInfo}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contacts" exact component={Contacts}/>
        <Route render={() => <h1 className="text-danger p-5">Page is not found !</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
