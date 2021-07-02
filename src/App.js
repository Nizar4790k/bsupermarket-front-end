
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductList from './components/Products/ProductList';
import ShoppingList from './components/ShopingList/ShoppingList';


const user = {username:"Nizar4790k"}

function onSignOut(){

}


function App() {
  return (
    <Router>
    <NavBar username={user.username} onSignOut={onSignOut}></NavBar>
      <Switch>
        <Route path='/Login'  exact component={Login}></Route>
        <Route path='/Register' exact component={Register}></Route>
        <Route path ='/ProductList' exact component={ProductList}></Route>
        <Route path ='/ShopingList' exact component={ShoppingList}></Route>
        
 
      </Switch>
    </Router>
  );
}

export default App;
