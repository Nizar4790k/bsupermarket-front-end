
import ShoppingListItem from "./ShoppingListItem";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
const ShoppingList = ({ onSignOut, user,onLoadUser }) => {

  const [products, setProducts] = useState([])
  

  const fetchProductsCart = async () => {
    const response = await fetch(process.env.REACT_APP_PROXY + `/cart/${user.id}`)
    const result = await response.json();
    
    setProducts(result.products);
    

  }

  const deleteAllProducts = async (event)=>{

    const response = await fetch(process.env.REACT_APP_PROXY+ `/cart`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
      })
    })

   await fetchProductsCart();

  }
  

  useEffect(() => {

    
    fetchProductsCart();


  }, [])


  return (
    <div>
      <NavBar onSignOut={onSignOut} fullName={user.fullName} selectedTab={"ShoppingList"}></NavBar>
      <div className="text-center container py-5">

        <h4 className="mt-4 mb-5"><strong>Lista de compra</strong></h4>

        <button className="btn btn-danger" onClick={deleteAllProducts}>Vaciar lista de compras</button>



        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">

            {
              products.map((product, i) => {
                
                return <ShoppingListItem product={product} userId={user.id} key={i} fetchProductsCart={fetchProductsCart}></ShoppingListItem>
              })
            }



          </div>
        </section>
      </div>
    </div>

  );
}

export default ShoppingList;