function Mission() {
    return ( 
        <div className="container colors">
            <div className="row mt-4">
                <h1 className="text-center" style={{color:"#219653"}}>Our Mission</h1>
                <div className="col-6 mt-5">
                    
                   <p style={{ fontSize: "1.2rem" }} className="text-muted"> At KrishiConnect, we are committed to creating a digital<br/> marketplace that empowers farmers with fair, transparent <br/> contracts and connects them with reliable buyers.<br/> Our platform ensures secure transactions, crop monitoring, and guaranteed  payments, providing farmers with stability and opportunities.<br/>
                   We aim to bridge the gap between traditional farming practices and modern technology by introducing innovative tools that simplify the agricultural supply chain.<br/> 
                   </p>
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                    <img src="/media/our-mission.jpeg" alt="our Missioon" style={{width:"90%"}} className="mt-4"></img>
                </div>
            </div>
        </div>
     );
}

export default Mission;