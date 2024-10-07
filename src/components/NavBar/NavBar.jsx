import CartWidget from "./CartWidget"
import "./navbar.scss"
import logoNav from "../../assets/logo-largo.svg"


const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="brand">
                <img src= {logoNav} alt="" />
            </div>
            <ul>
                <li>Productos</li>
                <li>Nostros</li>
                <li>Contacto</li>
            </ul>

            < CartWidget />
   
        </nav>


    )
}

export default NavBar