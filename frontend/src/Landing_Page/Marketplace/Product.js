function Product() {
    return ( 
        <div className="container margin">
        <div className="row border rounded " style={{height: "65px", backgroundColor:"white"}}>
                <div className="col text-center">
                  <span className="fs-4" style={{color:"#219653"}}>0</span>
                    <p>Total Products</p>
                    </div>
                <div className="col text-center">
                  <span className="fs-4" style={{color:"#219653"}}>0</span>
                    <p>Available Products</p>
                    </div>
                    
                <div className="col text-center">
                    <span className="fs-4" style={{color:"#219653"}}>0</span>

                    <p>Active Locations</p>
                    </div>
                </div>
        </div>
     );
}

export default Product;