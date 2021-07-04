
import ShoppingListItem from "./ShoppingListItem";
import NavBar from "../NavBar/NavBar";
const ShoppingList = ({onSignOut, user})=>{


    return (
      <div>
      <NavBar onSignOut={onSignOut} fullName={user.fullName} selectedTab={"ShoppingList"}></NavBar>
      <div className="text-center container py-5">

<h4 className="mt-4 mb-5"><strong>Lista de compra</strong></h4>

<div className="d-flex justify-content-end">
    

    
    

    <button className="btn btn-danger">Vaciar lista de compras</button>
   
    </div>

    <section style= {{backgroundColor: "#eee"}}>
  <div className="container py-5">
    
      <ShoppingListItem ></ShoppingListItem>
      <ShoppingListItem ></ShoppingListItem>
    
  </div>
</section>
     </div>  
     </div>

    );
}

export default ShoppingList;