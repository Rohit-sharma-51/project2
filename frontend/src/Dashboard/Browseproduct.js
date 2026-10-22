function Browseproduct() {
    return ( 
        <div style={{backgroundColor:"white"}}> 
            <div className="container">
                <div className="row">
                    <div className="col" style={{height:"500px"}}>

                        {/* Same row */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            
                            <h4 className="m-0">Browse Products</h4>

                            <div className="d-flex align-items-center">
                                <input 
                                    type="text"
                                    placeholder="Search products..." 
                                    className="form-control"
                                    style={{width:"200px"}}
                                />
                                <i 
                                    className="fa-solid fa-magnifying-glass ms-2" 
                                    style={{color:"blue"}}
                                ></i>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Browseproduct;