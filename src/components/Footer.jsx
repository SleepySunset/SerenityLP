import './Footer.css'

export function Footer(){
    return(
        <footer>
            <h3>Contáctanos</h3>
            <nav>
                <ul className="contact-list">
                    <li className="contact-item">
                        <a href="https://www.instagram.com/serenity_estetica1/">
                            <img 
                                src="../src/assets/instagram.jpg"
                                alt="Logo Instagram"
                                className='logo-footer'
                            />
                            Instagram
                        </a>
                        
                        
                    </li>
                    <li className="contact-item">
                        <a href="https://api.whatsapp.com/message/VR5KJGAXEIHAG1">
                            <img 
                            src="../src/assets/whatsapp.jpg" 
                            alt="Logo WhatsApp"
                            className='logo-footer'
                            />                            
                            Whatsapp
                        </a>
                    </li>
                    <li className="contact-item">
                        <a href="https://maps.app.goo.gl/rD8DxrsuFYjxtmLP7">
                            <img 
                                src="../src/assets/location.jpg"
                                alt="Logo de ubicación"
                                className='logo-footer'
                            />                            
                            Cl. 42 #60A-05
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}