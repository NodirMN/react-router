import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Bosh sahifa</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/person">Xodimlar</Link>
            </li>
            
        </ul>
        </div>
    </div>
</nav>
        
    )
}
export default Header