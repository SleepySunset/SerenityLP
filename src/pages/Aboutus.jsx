import Card from "../components/Card";
import Carrousel from "../components/Carrousel";

const Aboutus = () => {
  return (
    <main>
      <div>
        <h2>¿Quiénes somos?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          consequuntur reiciendis ratione magni distinctio minima dolorum
          tempora iure beatae aperiam, quaerat recusandae voluptate ad tempore,
          maiores laboriosam non rerum possimus.r
        </p>
        <img></img>
      </div>
      <div>
        <h2>Nuestras profesionales</h2>
        <div>
          <Card
            classId="employee1-card"
            img="/employee1.jpg"
            title="Laura García"
            desc="Cosmetóloga graduada del Instituto Nacional de Cosmetología y Estética Atenea con más de 5 años de experiencia.
            Especialista en tratamientos no invasivos para el cuidado de la piel y artista de uñas."
            alt="Laura García"
          />
          <Card
            classId="employee2-card"
            img="/employee2.jpg"
            title="Eliana García"
            desc="Brow artist con más de dos años de experiencia. Especialista en diseño y depilación de cejas con múltiples técnicas,
            micropigmentación y lifting de cejas y pestañas."
            alt="Eliana García"
          />
        </div>
      </div>
      <div>
        <h2>Lo que nuestros usuarios y usarias piensan de nosotras</h2>
        <div>
          <Carrousel></Carrousel>
        </div>
        
      </div>
    </main>
  );
};

export default Aboutus;
