import Header from "../header";
import Background from "../../assets/img/background.png";
import Mobile from "../../assets/img/mobile-content.png";
import "../../styles/homeStyles.css";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover box-border pt-10 pb-0 "
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
      <div className="flex h-[100%]">
        <div className="w-[50%] justify-center flex flex-col items-start box-border  pl-40 ">
          <div className=" h-[300px] flex flex-col items-center justify-center">
            <div className="text-[#fff] text-[5rem] font-bold text mb-[-30px] w-[800px]">
              EXPERIÊNCIA EM FRONT-END
            </div>
            <div className="text-[#fff] text-[5rem] flex font-bold gap-2 text mb-[-30px] w-[800px]">
              E UI <div className="text-[#38075E]">DESIGN PARA EMPRESAS</div>
            </div>
            <div className="text-[#fff] text-[5rem] font-bold text w-[800px]">
              IMPULSIONANDO O SUCESSO.
            </div>
          </div>
          <div
            style={{ fontWeight: "500" }}
            className="text-[#fff] mt-3 text-[1.2rem] flex gap-2 text tracking-[2px] w-[800px]"
          >
            SEMPRE COM FOCO NO DESENVOLVIMENTO ÁGIL COM BOAS PRÁTICAS EM BUSCA
            DE UMA BOA EXPERIÊNCIA PARA O USUÁRIO.
          </div>
          <div
            style={{ fontWeight: "600" }}
            className="cursor-pointer text-[#fff] mt-3 text-[1.2rem] gap-2 w-[140px] p-4 flex justify-center bg-[#38075E] rounded-lg"
          >
            Contato
          </div>
        </div>
        <div className="w-[50%] flex items-center">
          <img src={Mobile} alt="" className="max-w-[80%] ml-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
