import ItsImg from "../../assets/img/its.png";
import Foto from "../../assets/img/foto.png";
import "../../styles/textStyle.css";
import "./style.scss";

const About = () => {
  return (
    <div id="about" className="mainContainerAbout">
      <div className="about-container borderAnimation">
        <div className="about-content">
          <div className="text-container">
            <div className="text-name text">WARLLEI</div>
            <div className="text-lastname text colorAnimation">MARTINS</div>
            <div className="text-job antonia text" style={{ fontWeight: 300 }}>
              DESENVOLVEDOR FRONT-END
            </div>
            <div className="text-description antonia" style={{ fontWeight: 200 }}>
              Desenvolvedor front-end júnior com 3 anos de experiência.
              Apaixonado por criar interfaces atraentes e funcionais. Sempre
              aprendendo e acompanhando tendências. Pronto para contribuir em
              projetos inovadores
            </div>
            <img src={ItsImg} alt="" className="imageAnimation" />
          </div>
        </div>
        <div className="image-container">
          <img src={Foto} className="containerImage borderAnimation" />
        </div>
      </div>
    </div>
  );
};

export default About;
