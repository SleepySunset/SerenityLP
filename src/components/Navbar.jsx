import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header-nav">
      <div className ="brand-container">
        <img
          src="logo.png"
          alt="Logo de Serenity Estética"
          className="header-logo"
        />
      <h1 className="header-title">Serenity Estética</h1>
      </div>
      
      <ul className="nav-menu">
        <Link className="nav-link " to="/">
          Inicio
        </Link>

        <Link className="nav-link" to="/sobrenosotros">
          Sobre Nosotros
        </Link>

        <Link className="nav-link" to="/servicios">
          Servicios
        </Link>

        <Link className="nav-link" to="/productos">
          Productos
        </Link>

        <Link className="nav-link" to="/contacto">
          Contacto
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
