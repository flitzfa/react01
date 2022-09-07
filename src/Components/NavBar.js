import logo from '../logo.svg'

const NavBar = () => {
    return (
    <div className='NavBar-container'>
        <a href='/'>
        <img src={logo} className="NavBar-logo" alt="logo"/>
        </a>
        <div className='NavBar-navLinks'>
            <ul>
                <li>
                    <a href='#'>Inicio</a>
                </li>
                <li>
                    <a href='#'>Catálogo</a>
                </li>
                <li>
                    <a href='#'>Nosotros</a>
                </li>
            </ul>
        </div>
        <button className='NavBar-login'>Iniciar sesión</button>
    </div>
    );
};

export default NavBar;