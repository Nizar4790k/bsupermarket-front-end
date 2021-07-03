import './ProductList.css'
import Product from './Product';
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
const ProductList = ({onSignOut,fullName})=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{

        const fetchProducts = async ()=>{

            const response = await fetch(process.env.REACT_APP_PROXY+'/products');
            const result = await response.json();
            setProducts(result);

        }

        fetchProducts();

    },[])
    


    return (

        <div>
     <NavBar onSignOut={onSignOut} fullName={fullName} selectedTab={"ProductList"}></NavBar>

        <section style={{backgroundColor: "#eee"}}>
        
  <div className="text-center container py-5">
  
    <h4 className="mt-4 mb-5"><strong>Productos</strong></h4>

 
    

    <form className="form">
    <div className="form-row">
    <div className="col-6">
    <input className="form-control  mb-2 mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
    </div>
    <div className="col-3">
    <select className="form-control mb-2 mr-sm-2" defaultValue="name">
        <option   value="name">Nombre</option>
        <option value="description">Descripcion</option>

    </select>
    </div>
    
    
    </div>
    
    
    </form>
   
    



<br></br>
<br></br>
        {<div className="row">
           {products.map((product,i)=>{
                 
               return <Product product={product} key={i}></Product>
           })}

           </div>
        }
    

    
  </div>
</section>




</div>

);


}

export default ProductList;