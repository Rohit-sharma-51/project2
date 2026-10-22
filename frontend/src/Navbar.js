import { useNavigate } from "react-router-dom";


function Navbar(){
    const navigate = useNavigate();
    return(
        <div class=" homesection">
        <div className="mb-5">
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container ">

                    {/* LEFT LOGO */}
                    <a className="navbar-brand" href="/">
                        <img src="media/currency.png" alt="logo" style={{width:"40px"}} /> &nbsp;
                     <span className="fs-3" style={{color:"#219653"}}> KrishiConnect</span> 
                    </a>

                    {/* CENTER MENU */}
                    <div className="collapse navbar-collapse justify-content-center">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{color:"black"}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/marketPlace" style={{color:"black"}}>Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/aboutUs" style={{color:"black"}}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/contactUs" style={{color:"black"}}>Contact Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link"  href="/dashboard" style={{color:"black"}}>Dashboard(B)</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link"  href="/dashboard/farmer"  style={{color:"black"}}>Dashboard(F)</a>
                            </li>
                        </ul>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="d-flex align-items-center gap-3">
                        {/* <span>Login</span> */}
                        <button onClick={() => navigate("/login")} className="btn btn-outline-success">Login</button>

                        <button onClick={() => navigate("/create-account")} 
                          className="btn btn-success"> Get Started</button>
                          </div>
                </div>
            </nav>
        </div>
        </div>
    );
}

export default Navbar;