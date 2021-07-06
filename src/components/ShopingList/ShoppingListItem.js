

const ShoppingListItem = ({ product,userId,fetchProductsCart}) => {

  const { img, name, description, hall, price, discount, bougth } = product;
  


 
  const setBougth = async (event)=>{
    
    await fetch(process.env.REACT_APP_PROXY+ `/cart/product`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id: product._id,
        userId: userId,
        bougth:event.target.checked
      })
    })

   fetchProductsCart();
    
    
  }

  const removeFromCart =  async (userId, product) => {

    

     await fetch(process.env.REACT_APP_PROXY + '/cart/product', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product: product,
        userId: userId
      })
    });
    
    fetchProductsCart();

    



  }

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img
                    src={img}
                    alt="product"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>{name}</h5>


                <p className="mb-4 mb-md-0 mt-4">
                  {description}
                </p>

                <h6 className="mb-3 mt-4">
            <strong>Pasillo</strong><b className="ml-1 text-danger">{hall}</b>
           </h6>


              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">${(price * (1 - discount)).toFixed(2)}</h4>
                  <span className="text-danger ml-3"><s>${price.toFixed(2)}</s></span>
                </div>

                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-outline-danger btn-sm mb-4" type="button" onClick={()=>removeFromCart(userId,product)}>Borrar de la lista</button>
                  <div className="form-check">
                  
                    
                      <input class="form-check-input"  type="checkbox" checked={bougth} onClick={setBougth}  id="flexCheckDefault"></input>
                    

                     
                    
                  
                
                    <label class="form-check-label" for="flexCheckDefault">
                      Marcar como comprado
                    </label>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingListItem;