import { useNavigate } from "react-router-dom";

function Myproduct() {
    const navigate=useNavigate();
    return ( 

        <div style={{backgroundColor:"white"}}> 
            <div className="container">
                <div className="row">
                    <div className="col" style={{height:"500px"}}>

                        {/* Same row */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            
                            <h4 className="m-0">My Products</h4>

                            <div className="d-flex align-items-center rounded-2">

                                <button className="rounded-2" style={{backgroundColor:"#22c55e"}} 
                                onClick={()=>navigate("/addproduct")}>
                                    Add Product</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myproduct;