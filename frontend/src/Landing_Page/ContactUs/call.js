function Call() {
    return (  
        <div className="container colors">
            <div className="row">
                <div className="col p-5 m-2 rounded hover-card text-center " style={{ height: "250px" }}>
                   <span style={{color:"#219653"}}><i class="fa-solid fa-phone fa-2x" ></i> </span>              
                    <h3 className="mt-3">Call Us</h3>
                    <p>For immediate assistance, call us:</p>
                    9079999623 &nbsp; <button class="call-btn">Call Us</button>
                </div>
    
                    <div className="col p-5 m-2 rounded hover-card text-center " style={{ height: "250px" }}>
                   <span style={{color:"#219653"}}><i class="fa-regular fa-envelope fa-2x"></i> </span>              
                    <h3 className="mt-3">Email Us</h3>
                    <p>Reach out to us via email for support or queries:</p>
                    <a href="/" alt="email" style={{textDecoration:"none",color:"#219653"}} className="fs-5">support@krishiconnect.com</a>        
                </div>
                
                <div className="col p-5 m-2 rounded hover-card text-center " style={{ height: "250px" }}>
                   <span style={{color:"#219653"}}><i class="fa-solid fa-location-dot fa-2x"></i> </span>              
                    <h3 className="mt-3">Visit Us</h3>
                    <p>Office Address:</p>
                    <a href="/" alt="email" style={{textDecoration:"none",color:"#219653"}} className="fs-5 text-center">Gautam Buddha<br/> University</a>        
                </div>
            </div>
        </div>
    );
}

export default Call;