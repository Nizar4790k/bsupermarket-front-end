const Product =()=>{
    return (
        <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg"
             className="w-100"
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5 className="status">
                    <span className="badge bg-primary ms-2">New</span>
                    <span className="badge bg-success ms-2">Eco</span>
                    <span className="badge bg-danger ms-2">-10%</span>
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
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
      );
}

export default Product;