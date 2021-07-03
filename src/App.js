
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductList from './components/Products/ProductList';
import ShoppingList from './components/ShopingList/ShoppingList';


const user = {username:"Nizar4790k"}

function onSignOut(){

}

function onLoadFullName(){
  
}


function App() {
  return (
    <Router>
   
      <Switch>
      <Route path="/Login" component={()=><Login onLoadFullName={onLoadFullName}/>}></Route>
        <Route path='/Register' exact component={Register}></Route>
        <Route path ='/ProductList' component={()=><ProductList onSignOut={onSignOut} fullName={user.username}></ProductList>}></Route>
        <Route path ='/ShopingList'  component={()=><ShoppingList onSignOut={onSignOut} fullName={user.username}></ShoppingList>}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
