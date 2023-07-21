import Header from "../header";
import Background from "../../assets/img/background.png";
import Mobile from "../../assets/img/mobile-content.png";
import "../../styles/textStyle.css";

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
      <div id="home" className="flex h-[100%]">
        <div className="w-[50%] justify-center flex flex-col items-start box-border pl-40 max-[1140px]:pl-10 940 max-[880px]:pl-0 max-[880px]:w-screen max-[880px]:items-center max-[1374px]:mb-[80px]">
          <div className="  h-[300px] flex flex-col items-center justify-center">
            <div className="text-[#fff] text-[5rem] font-bold text mb-[-30px] w-[800px] max-[1374px]:text-[3.6rem] max-[1016px]:text-[3rem] max-[1016px]:mb-[-18px]  max-[880px]:text-center">
              EXPERIÊNCIA EM FRONT-END
            </div>
            <div className="text-[#fff] text-[5rem] flex font-bold gap-2 text mb-[-30px] w-[800px] max-[1374px]:text-[3.6rem] max-[1016px]:text-[3rem] max-[1016px]:mb-[-18px]  max-[880px]:text-center max-[880px]:justify-center ">
              E UI <div className="text-[#38075E]">DESIGN PARA EMPRESAS</div>
            </div>
            <div className="text-[#fff] text-[5rem] font-bold text w-[800px] max-[1374px]:text-[3.6rem] max-[1374px]:mb-[-100px] max-[1016px]:text-[3rem]  max-[880px]:text-center">
              IMPULSIONANDO O SUCESSO.
            </div>
          </div>
          <div
            style={{ fontWeight: "500" }}
            className="text-[#fff] text-[1.2rem] flex gap-2 text tracking-[2px] w-[800px] max-[880px]:text-center max-[1412px]:w-[400px]"
          >
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
        <div className="w-[50%] flex items-center max-[1374px]:justify-center max-[880px]:hidden">
          <img
            src={Mobile}
            alt=""
            className="max-w-[80%] ml-[120px] max-[1374px]:ml-[0] max-[1140px]:max-w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
