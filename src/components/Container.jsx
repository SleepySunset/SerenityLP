import './Container.css'
import { introduction, services, rating, products } from './container'
import { useState } from "react"
import { ImageSlider } from './Slider.jsx'



export function Container(){
    const sections = [introduction, services, rating, products]

    /* const [isToggled, setIsToggled] = useState(false)
    
    const text = isToggled ? 'Ver menos' : 'Ver más' 
    
    const handleButton = () => {
        setIsToggled(!isToggled)
    }
    */


    const [toggleStates, setToggleStates] = useState(
        sections.reduce((acc, index) => {
            acc[index] = false;
            return acc;
        }, {})
    );

    const handleButton = (index) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [index]: !prevStates[index],
        }));
    };

    
    
    return(
        <div className="container">
        {sections.map((section, index) => (
            <div key={index} className="container-section">
                <div className='container-desc'>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                    <button 
                        className={section.btnclass}
                        /* onClick={handleButton}>
                        {text}
                    </button>
                    {isToggled && <Gallery  name={section.name}/>} */
                    onClick={() => handleButton(index)}>
                            {toggleStates[index] ? 'Ver menos' : 'Ver más'}
                        </button>
                        
                </div>
                <img 
                    className={section.imgclass}
                    src={section.imgsrc} 
                    alt={section.alt}
                    
                />
                <div className='container-slider'>
                    {toggleStates[index] && <ImageSlider name={section.name}/>}
                </div>
            </div>
        ))}

        
        </div>
    )


}
