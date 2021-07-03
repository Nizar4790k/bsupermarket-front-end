
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductList from './components/Products/ProductList';
import ShoppingList from './components/ShopingList/ShoppingList';
import { useState } from 'react';





function App() {

const  [fullName,setFullName] = useState("");



const onSignOut= ()=>{
  setFullName("");
}

const onLoadFullName = (fullName)=>{
  setFullName(fullName);
}
  return (
    <Router>
   
      <Switch>
      <Route path="/Login" component={()=><Login onLoadFullName={onLoadFullName}/>}></Route>
        <Route path='/Register' exact component={Register}></Route>
        <Route path ='/ProductList' component={()=><ProductList onSignOut={onSignOut} fullName={fullName}></ProductList>}></Route>
        <Route path ='/ShopingList'  component={()=><ShoppingList onSignOut={onSignOut} fullName={fullName}></ShoppingList>}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
