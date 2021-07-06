
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductList from './components/Products/ProductList';
import ShoppingList from './components/ShopingList/ShoppingList';
import { useState } from 'react';





function App() {

const  [user,setUser] = useState({});



const onSignOut= ()=>{
  setUser({});
  localStorage.clear();
}

const onLoadUser = (user)=>{
  localStorage.setItem('user',user);
  setUser(user);
  
}
  return (
    <Router>
   
      <Switch>
      <Route path="/Login" component={()=><Login onLoadUser={onLoadUser}/>}></Route>
        <Route path='/Register' exact component={Register}></Route>
        <Route path ='/ProductList' component={()=><ProductList onSignOut={onSignOut} user={user}></ProductList>}></Route>
        <Route path ='/ShopingList'  component={()=><ShoppingList onSignOut={onSignOut} onLoadUser={onLoadUser} user={user}></ShoppingList>}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
