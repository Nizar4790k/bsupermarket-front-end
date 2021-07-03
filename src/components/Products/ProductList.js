import './ProductList.css'
import Product from './Product';
import NavBar from '../NavBar/NavBar';
const ProductList = ({onSignOut,fullName})=>{

    const products = [
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
    {name:"Manzana",price:200},
];


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
        <option  selected value="name">Nombre</option>
        <option value="description">Descripcion</option>

    </select>
    </div>
    
    
    </div>
    
    
    </form>
   
    



<br></br>
<br></br>
        {<div className="row">
           {products.map((product,i)=>{
                 
               return <Product key={i}></Product>
           })}

           </div>
        }
    

    
  </div>
</section>




</div>

);


}

export default ProductList;