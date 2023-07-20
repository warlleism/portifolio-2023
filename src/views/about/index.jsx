import ItsImg from "../../assets/img/its.png";
import Foto from "../../assets/img/foto.png";
import "../../styles/textStyle.css";

const About = () => {
  return (
    <div id="about" className="h-screen w-[100%] bg-green flex justify-center items-center">
      <div className=" flex bg-[#0A0A0D] border-[1px] rounded border-solid w-[80%] h-[80%] borderAnimation">
        <div className="flex items-center justify-center w-[50%] h-[100%] ">
          <div className="w-[600px] h-[500px] flex flex-col items-center justify-center relative">
            <div className="text-[9rem] text text-[#fff] mb-[-80px]">
              WARLLEI
            </div>
            <div className="text-[9rem] text text-[#38075E] ml-[100px] mb-[-40px] colorAnimation">
              MARTINS
            </div>
            <div
              style={{ fontWeight: "300" }}
              className="flex text-[1.9rem] antonia text-[#fff] w-[400px] "
            >
              DESENVOLVEDOR FRONT-END
            </div>
            <div
              style={{ fontWeight: "200" }}
              className="flex text-[1.2rem] antonia text-[#fff] w-[400px] mt-4 "
            >
              Desenvolvedor front-end júnior com 2 anos de experiência.
              Apaixonado por criar interfaces atraentes e funcionais. Sempre
              aprendendo e acompanhando tendências. Pronto para contribuir em
              projetos inovadores
            </div>
            <img
              src={ItsImg}
              alt=""
              className="absolute top-[-30px] right-10 max-w-[20%] "
            />
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center">
          <img
            src={Foto}
            className="max-w-[65%] borderAnimation rounded-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
