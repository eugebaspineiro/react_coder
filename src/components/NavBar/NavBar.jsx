import CartWidget from "./CartWidget"
import "./navbar.scss"
import logoNav from "../../assets/logo-largo.svg"
import { Link } from "react-router-dom"


const NavBar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/category/sillones">Sillones</Link>
                </li>
                <li>
                    <Link to="/category/mesas">Mesas</Link>
                </li>
                <li>
                    <Link to="/category/lamparas">Lamparas</Link>
                </li>
            </ul>

            <Link to="/" className="brand">
                <img src= {logoNav} alt="" />
            </Link>

            < CartWidget />
   
        </nav>


    )
}

export default NavBar