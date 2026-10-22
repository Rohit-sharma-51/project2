function Marketplace(){
    return(
        <div className="container mt-5 ">
            <div className="row ">
                <div className="col-6">
                    <h5 style={{color:"#219653"}}>Marketplace Connect</h5>
                    <h1>Efficient Farm-to-Table</h1>
                    <h1>Solutions</h1>
                    <p>Marketplace Connect helps farmers and buyers connect directly,<br/> making the supply chain more efficient and transparent. Instead of<br/> traditional market delays, our platform ensures quicker transactions and <br/>better market access.</p>
                    <p className="text-muted">Our solution bridges the gap between farmers and buyers for a seamless experience.</p>
                </div>
                <div className="col-6">
                    <img src="/media/marketplace.png" alt="marketplace" style={{width:"110%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Marketplace;