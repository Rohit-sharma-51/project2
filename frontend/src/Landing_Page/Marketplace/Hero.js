function Hero(){
    return(
        <div className="container margin colors">
            <div className="row ">
                <div className="col">
                <h1 className="text-center" style={{color:"#219653"}}>Marketplace</h1>
                <p className="text-center fs-5 text-muted mb-5">Discover fresh produce directly from farmers</p>
                </div>
            </div>


           
            <div className="row border rounded w-100 p-3 " style={{height: "65px", backgroundColor:"lightgray"}}>            
                <div className="col mb-5">
                    <input type="text" placeholder="Search products..." className="form-control rounded"></input>
                </div>
                <div className="col mb-5">
                    <select  className="form-select w-100">
                        <option selected>All categories</option>
                        <option>Grains</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Pulses</option>
                        <option>Spices</option>
                        <option>Dairy</option>
                    </select>
                </div>
                <div className="col mb-5">
                    <select  className="form-select w-100">
                        <option selected>All locations</option>
                        <option>Maharashtra</option>
                        <option>Punjab</option>
                        <option>Haryana</option>
                        <option>Uttar Pradesh</option>
                        <option>Madhya Pradesh</option>
                        <option>Karnataka</option>
                    </select>
                </div>
                <div className="col mb-5">
                    <input placeholder="Clear Filters" style={{backgroundColor:"lightdark"}}  className="form-select w-100"></input>
                </div>

            </div>
            
        </div>
    );
}

export default Hero;