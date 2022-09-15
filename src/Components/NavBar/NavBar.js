import "./NavBar.style.css";
import logo from "../../logo.svg";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <div className="NavBar-container">
          <a href="/">
            <img src={logo} className="NavBar-logo" alt="logo" />
          </a>
          <div className="NavBar-navLinks">
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/">Productos</a>
              </li>
              <li>
                <a href="/">Nosotros</a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      );
}

export default NavBar;