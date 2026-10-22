import React from 'react'
function Hero(){
    return(
        <div class="homesection">
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6'>
                    <h1>KrishiConnect -<br/>Your Gateway to <br/>Fair and <br/>Transparent <br/>Farming</h1>
                    <h5>कृषि कनेक्ट - किसानों और खरीदारों के बीच एक सीधा संपर्क</h5>
                    <button className="btn btn-success mt-4">Get Started</button>
                </div>
                <div className='col-6'>
                    <img src="/media/agriculture-hero.jpg" alt="agricultureImage" style={{width:"100%"}}></img>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;