import './ProductList.css'
import Product from './Product';
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
const ProductList = ({ onSignOut, user}) => {
    
    const [products, setProducts] = useState([]);
    const [inputText,setInputText]= useState("");
    const [criteria,setCriteria] = useState("name");

   
   
    const onInputChange = (event) => {
        setInputText(event.target.value)
        fetchProducts(event.target.value,criteria);
    }

    const onSelectedValue = (event)=>{
        setCriteria(event.target.value);
        fetchProducts(inputText,event.target.value);
    }

    const fetchProducts = async (inputText,criteria) => {

           
            const response = await fetch(process.env.REACT_APP_PROXY + `/products?inputText=${inputText}&criteria=${criteria}`);
            const result = await response.json();
            setProducts(result)
        
       
    }

   

    

    useEffect(() => {
        fetchProducts(inputText,criteria);

    }, [])



    return (

        <div>
            <NavBar onSignOut={onSignOut} fullName={user.fullName} selectedTab={"ProductList"}></NavBar>

            <section style={{ backgroundColor: "#eee" }}>

                <div className="text-center container py-5">

                    <h4 className="mt-4 mb-5"><strong>Productos</strong></h4>




                    <form className="form">
                        <div className="form-row">
                            <div className="col-6">
                                <input className="form-control  mb-2 mr-sm-2" type="text" placeholder="Search" aria-label="Buscar producto" onChange={onInputChange}></input>
                            </div>
                            <div className="col-3">
                                <select className="form-control mb-2 mr-sm-2" defaultValue="name" onChange={onSelectedValue}>
                                    <option value="name">Nombre</option>
                                    <option value="description">Descripcion</option>

                                </select>
                            </div>


                        </div>


                    </form>





                    <br></br>
                    <br></br>
                    {<div className="row">
                        {products.map((product, i) => {
                            
                            return <Product product={product} key={i}  userId={user.id}></Product>
                        })}

                    </div>
                    }



                </div>
            </section>




        </div>

    );


}

export default ProductList;