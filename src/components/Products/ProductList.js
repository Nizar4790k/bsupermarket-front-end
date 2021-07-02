import './ProductList.css'
import Product from './Product';
const ProductList = ()=>{

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


        <section style={{backgroundColor: "#eee"}}>
        
  <div className="text-center container py-5">
  
    <h4 className="mt-4 mb-5"><strong>Productos</strong></h4>

    <div className="d-flex justify-content-around">
    

    
    <input className="form-control col-xs-2" type="text" placeholder="Search" aria-label="Search"></input>
    <select className="form-control">

        <option selected>Seleccionar..</option>
        <option value="name">Nombre</option>
        <option value="description">Descripcion</option>

    </select>
    <button className="btn btn-info">Filtrar</button>
   
    </div>



<br></br>
<br></br>
        {<div className="row">
           {products.map((product,i)=>{
                  
               return <Product></Product>
           })}

           </div>
        }
    

    
  </div>
</section>




</div>

);


}

export default ProductList;