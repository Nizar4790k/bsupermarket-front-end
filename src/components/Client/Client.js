import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ProductList from "../Products/ProductList";
import ShoppingList from "../ShopingList/ShoppingList";

const Client = () => {

    const history = useHistory();
    history.push("Client/ProductList");

    return (
        <Router>
            <NavBar username={user.username} onSignOut={onSignOut}></NavBar>
            <Switch>
             
            </Switch>
        </Router>
    )
}

export default Client;