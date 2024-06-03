import './Header.css'

export function Header () {
    return(
    <header>
        <img 
            src='../src/assets/logo.png'
            alt='Logo de Serenity Estética'
            className='logo'
        />
        <h1 className="title">Serenity Estética</h1>
        <nav>
            <ul className="menu-nav">
                <li className='nav-opt' id="home-nav">
                    <a href='#'>Inicio</a>
                </li>
                <li className='nav-opt' id="about-nav">
                    <a href='#'>Sobre Nosotros</a>
                </li>
                <li className='nav-opt' id="services-nav">
                    <a href='#'>Servicios</a>
                </li>
                <li className='nav-opt' id="products-nav">
                    <a href='#'>Productos</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}