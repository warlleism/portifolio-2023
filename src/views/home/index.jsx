import Header from "../navBar";
import Background from "../../assets/img/background.png";
import Mobile from "../../assets/img/mobile-content.png";
import "../../styles/textStyle.css";
import "./style.scss";

const Home = () => {
  
  return (
    <div
      className="mainContainerHome"
      style={{
        backgroundImage: `url(${Background}) ,linear-gradient(
            315deg,
            hsl(274deg 86% 20%) 19%,
            hsl(273deg 78% 18%) 31%,
            hsl(272deg 71% 15%) 34%,
            hsl(272deg 64% 13%) 37%,
            hsl(276deg 63% 10%) 42%,
            hsl(282deg 72% 6%) 47%,
            hsl(277deg 100% 3%) 53%,
            hsl(276deg 100% 2%) 60%,
            hsl(275deg 100% 2%) 67%,
            hsl(274deg 100% 2%) 74%,
            hsl(273deg 100% 2%) 83%,
            hsl(272deg 100% 2%) 91%,
            hsl(0deg 0% 0%) 100%
        )`,
      }}
    >
      <Header />
      <div id="home" className="continerInfo">
        <div className="containerHomeContent">
          <div className="containerTitle">
            <div className="firstChildText text">EXPERIÊNCIA EM FRONT-END</div>
            <div className="secondChildText text">
              E UI <div className="text-[#38075E]">DESIGN PARA EMPRESAS</div>
            </div>
            <div className="secondChildText text">IMPULSIONANDO O SUCESSO.</div>
          </div>
          <div style={{ fontWeight: "500" }} className="lastChildText text">
            SEMPRE COM FOCO NO DESENVOLVIMENTO ÁGIL COM BOAS PRÁTICAS EM BUSCA
            DE UMA BOA EXPERIÊNCIA PARA O USUÁRIO.
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5527995804151&text=Meu%20Whatsapp"
            target="_blank"
            rel="noreferrer"
            style={{ fontWeight: "600" }}
            className="cursor-pointer text-[#fff] mt-3 text-[1.2rem] gap-2 w-[140px] p-4 flex justify-center bg-[#38075E] rounded-lg"
          >
            Contato
          </a>
        </div>
        <div className="containerImg">
          <img src={Mobile} className="imageMobile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
