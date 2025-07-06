import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { rating } from "../utils/aboutus";

const Carrousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
    >
      {rating.map(({ name, comment, img, alt }, index) => (
        <SwiperSlide key={index} className="rating-card">
          <div className="card-content">
            <img src={img} alt={alt} className="card-image" />
            <h3 className="card-title">{name}</h3>
            <p className="card-comment">{comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
