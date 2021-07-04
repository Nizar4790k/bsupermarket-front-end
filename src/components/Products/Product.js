import { useState } from "react";

const Product =({product,userId})=>{
    const {img,name,description,hall,price,discount} = product;

    const [isInCar,setInCar] = useState(false);

  
    const onAddingToCart = ()=>{
      
      if(!isInCar){
        addToCart(userId,product);
        setInCar(true)
      }
    }

    const addToCart = async (userId,product)=>{

      const response =  await fetch(process.env.REACT_APP_PROXY+'/cart', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            product:product,
            userId:userId
        })
    })

    const result = await response.json();

    console.log(result);

    return result;
      
    }

    const onRemovingFromCart = (event)=>{
      if(isInCar){
        setInCar(false);
      }
    }

  
    return (
        <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img
              src={img}
             className="w-100"
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5 className="status">
                    {/*
                    <span className="badge bg-primary ms-2">New</span>
                    <span className="badge bg-success ms-2">Eco</span> */}
                    {discount>0 ? <span className="badge bg-danger ms-2">-{discount*100}%</span>:<span></span>}
                    
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                 className="mask"
                  style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            
              <h5 className="card-title mb-3">{name}</h5> 
            
              <p>{description}</p>
            
              <h6 className="mb-3">
                <strong>Pasillo</strong><b className="ml-1 text-danger">{hall}</b>
              </h6>

                  
                
            <h6 className="mb-3">
              {discount>0 ?<s>${price.toFixed(2)}</s>:false}
              <strong className="ml-3 text-danger">${(price*(1-discount)).toFixed(2)}</strong>
            </h6>
           
           {
             isInCar ? 
             <button className="btn btn-danger" onClick={onRemovingFromCart}>Remove from List</button>:
             <button className="btn btn-success" onClick={onAddingToCart}>Add to the List</button>
           }

           

          </div>
        </div>
      </div>
      );
}

export default Product;