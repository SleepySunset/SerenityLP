import { home } from "../utils/home.js";
import Card from "../components/Card.jsx";

const Home = () => {
  return (
    <main>
      <div className="home">
        {home.map(({ title, desc, img, alt }, index) => (
          <Card
            classId="home-card"
            key={index}
            img={img}
            title={title}
            desc={desc}
            alt={alt}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
