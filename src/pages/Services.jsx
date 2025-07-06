import { services } from '../utils/services';
import Card from "../components/Card";

const Services = () => {
  return (
    <div className='services'>
      {services.map(({ img, title, desc, sessionPrice }, index) => (
        <Card key={index} img={img} title={title} desc={desc} sessionPrice={sessionPrice} alt={title} />
      ))}
    </div>
  );
};

export default Services;