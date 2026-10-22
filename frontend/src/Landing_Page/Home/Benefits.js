function Benefits(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center mt-5">Our Benefits</h1>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-7 text-center border p-4 rounded shadow hover-card background">
                <img src="/media/dollar.png" alt="dollar" style={{width:"10%"}}></img>
                <h3 className="text-center mt-3">Cost-Effective</h3>
                <p className="text-center mt-2">Save money on agricultural transactions by leveraging transparent and efficient contracts.</p>
                </div>
                
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-7 text-center border p-4 rounded shadow hover-card background" >
                <img src="/media/innovation.png" alt="innovation" style={{width:"10%"}}></img>
                <h3 className="text-center mt-3">Faster Transactions</h3>
                <p className="text-center mt-2">Streamline your agricultural deals with swift and efficient contract processing.</p>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-7 text-center border p-4 rounded shadow hover-card background" >
                <img src="/media/data-encryption.png" alt="data" style={{width:"10%"}}></img>
                <h3 className="text-center mt-3">Secure Agreements</h3>
                <p className="text-center mt-2">Ensure the safety and integrity of your farming contracts with blockchain technology.</p>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-7 text-center border p-4 rounded shadow hover-card background" >
                <img src="/media/global-network.png" alt="global" style={{width:"10%"}}></img>
                <h3 className="text-center mt-3">Wide Reach</h3>
                <p className="text-center mt-2">Connect with farmers and buyers across the country for seamless agricultural transactions.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Benefits;