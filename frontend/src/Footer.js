function Footer() {
    return ( 
        <div class="homesection">
        <div class=" homesection">
        <div className="container">
            <div className="row mt-5 mb-3">
                <h4 className="mb-4"><span style={{color:"#219653"}}>KrishiConnect &nbsp;&nbsp;&nbsp;सही खेती, सही बाज़ार, सही मूल्य</span></h4>
                <hr/>
            </div>
            <div className="row mb-5">
                <div className="col-3">
                    <h5><span style={{color:"#219653"}}>Our Services</span></h5>
                    
                        Contract Farming<br/>
                        Crop Monitoring<br/>
                        Payment Guarantee
                    
                </div>
                <div className="col-3">
                    <h5><span style={{color:"#219653"}}>Resources</span></h5>
                    Blog<br/>
                    FAQs<br/>
                    Help Center<br/>
                    Farmer Guides
                </div>
                <div className="col-3">
                    <h5><span style={{color:"#219653"}}>Support</span></h5>
                    Contact Us<br/>
                    Live Chat<br/>
                    Feedback
                </div>
                <div className="col-3">
                    <h5><span style={{color:"#219653"}}>Follow Us</span></h5>
                    {/* <div className="border"> */}
                    <img src="/media/github-sign.png" alt="github" style={{width:"15%"}}/>&nbsp;&nbsp;&nbsp;
                    {/* </div> */}
                    <img src="/media/linkedin.png" alt="linkedin" style={{width:"15%"}}/><br/>
                    <img src="/media/twitter.png" alt="twitter" style={{width:"15%"}} className="mt-3"/>&nbsp;&nbsp;&nbsp;
                    <img src="/media/instagram.png" alt="instagram" style={{width:"15%"}} className="mt-3"/>

                </div>
            </div>
        </div>
        </div>
        </div>
     );
}

export default Footer;