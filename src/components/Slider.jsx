import { useState } from "react"
import { INTRODUCTION, PRODUCTS, RATING, SERVICES } from "./sliders.js"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PropTypes from 'prop-types';
import './Slider.css'

export function ImageSlider({name}){
        
    const getSliderItems = () => {
        switch (name) {
            case 'introduction':
                return INTRODUCTION;
            case 'services':
                return SERVICES;
            case 'rating':             
                return RATING;
            case 'products':
                return PRODUCTS;
            default:
                return [];
        }
        
    };

    const [imageIndex, setImageIndex] = useState(0)

    const showNextImage =() => {
        setImageIndex(index => {
            if(index === getSliderItems().length -1) {
                return 0
            }
            return index + 1
        })
    }

    const showPrevImage = () =>{
        setImageIndex(index => {
            if(index === 0) {
                return getSliderItems().length -1
            }
            return index -1
        })
    }

    return (
        <div className="slider-container">
            <img
                className="slider-img"
                src={getSliderItems()[imageIndex]}
            />
            <button 
                onClick={showPrevImage}
                className="slider-btn" style={{left:0}}>
                <ChevronLeft/>
            </button>
            <button
                onClick={showNextImage}
                className="slider-btn" style={{right:0}}>
                <ChevronRight/>
            </button>
        </div>
    )
}

ImageSlider.propTypes = {
    name: PropTypes.string.isRequired,
};