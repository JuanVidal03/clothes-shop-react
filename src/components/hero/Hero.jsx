// import styles
import "./hero.css";
// import component
import WhiteButton from "../buttons/WhiteButton.jsx";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>sin nombre</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laborum ratione cum facilis accusamus sapiente fugiat odit facere commodi ad amet voluptates eaque necessitatibus neque ducimus eum assumenda est inventore esse magni totam.</h6>
        <div className="hero-btn-container">
          <WhiteButton url="/products" text="Ver todos los Productos"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;