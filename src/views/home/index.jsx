import Header from "../navBar";
import Mobile from "../../assets/img/mobile-content.png";
import "../../styles/textStyle.css";
import "./style.scss";
import Curriculo from '../../assets/Currículo.pdf'
import { Typewriter } from 'react-simple-typewriter'
import ArrowDown from "../../component/arrowDown";

const Home = () => {

  return (
    <div className="mainContainerHome">
      <Header />
      <ArrowDown />
      <div id="home" className="continerInfo">
        <div className="containerHomeContent">
          <div className="containerTitle">
            <div className="firstChildText text">DESENVOLVEDOR FULL-STACK</div>
            <div className="secondChildText text">
              UI <div className="animated">
                <Typewriter
                  words={['DESIGN & RESPONSIVIDADE']}
                  loop={1}
                  cursorStyle='_'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>
            <div className="secondChildText text">IMPULSIONANDO O SUCESSO.</div>
          </div>
          <div className="lastChildText text">
            SEMPRE COM FOCO NO DESENVOLVIMENTO ÁGIL COM BOAS PRÁTICAS EM BUSCA DE UMA BOA EXPERIÊNCIA PARA O USUÁRIO.
          </div>
          <div className="container-links">
            <a
              href="https://api.whatsapp.com/send?phone=5527997964980&text=Meu%20Whatsapp"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: "600" }}
              className="
              cursor-pointer text-[#fff] mt-3 text-[1.2rem] gap-2 w-[140px] p-3 flex justify-center bg-[#38075E] rounded-lg"
            >
              Contato
            </a>
            <a
              href={Curriculo}
              target="_self"
              rel="noreferrer"
              download
              style={{ fontWeight: "600" }}
              className="cursor-pointer text-[#fff] mt-3 text-[1.2rem] gap-2 w-[140px] p-3 flex justify-center bg-[#38075E] rounded-lg"
            >
              Meu CV
            </a>
          </div>
        </div>
        <div className="containerImg">
          <img src={Mobile} className="imageMobile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
