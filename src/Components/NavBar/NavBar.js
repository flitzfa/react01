import "./NavBar.css";
import logo from "../../logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar-container">
          <Link to={"/"}>
            <img src={logo} className="NavBar-logo" alt="logo" />
            </Link>
          <div className="NavBar-navLinks">
            <ul>
              <li>
              <NavLink
              to={"category/heladera"}
              style={({ isActive }) => (isActive ? { color: "rgb(0, 255, 85)" } : {})}
            >
              Heladeras
            </NavLink>
              </li>
              <li>
              <NavLink
              to={"category/licuadora"}
              style={({ isActive }) => (isActive ? { color: "rgb(0, 255, 85)" } : {})}
            >
              Licuadoras
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"category/lavarropas"}
              style={({ isActive }) => (isActive ? { color: "rgb(0, 255, 85)" } : {})}
            >
              Lavaropas
            </NavLink>
          </li>
          <li>
              <NavLink
              to={"/contact"}
              style={({ isActive }) => (isActive ? { color: "rgb(0, 255, 85)" } : {})}
            >
              Contacto
            </NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      );
}

export default NavBar;