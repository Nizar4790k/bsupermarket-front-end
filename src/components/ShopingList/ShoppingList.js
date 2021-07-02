
import ShoppingListItem from "./ShoppingListItem";
const ShoppingList = ()=>{


    return (
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

    );
}

export default ShoppingList;