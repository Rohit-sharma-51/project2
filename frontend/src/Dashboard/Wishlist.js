function Wishlist() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col" style={{backgroundColor:"white",height:"400px"}}>
                    <div className="d-flex align-items-center mt-3">
                     <h2 className="mt-3 d-flex align-items-center">
                        <i className="fa-solid fa-heart me-2" style={{ color: "red" }}></i>
                        My Wishlist
                         <span className="badge bg-danger-subtle text-danger ms-3 px-1.5 py-1 rounded-pill">
                            0 items
                        </span>
                        </h2>
                        </div>

                <div className="card mt-5 text-center border-1" style={{ backgroundColor: "white",height:"170px"}}>
                    <i class="fa-solid fa-heart fa-4x mt-3" style={{ color: "gray" }}></i>
                    <h5 className="text-muted mt-3">Your wishlist is empty</h5>
                    <p className="text-muted ">Start adding products you're interested in!</p>
                </div>
            </div>
            </div> 
        </div>
     );
}

export default Wishlist;