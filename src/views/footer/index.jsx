import Wt from "../../assets/img/footer/wth.png";
import Git from "../../assets/img/footer/git.png";
import Lin from "../../assets/img/footer/lin.png";
import Be from "../../assets/img/footer/be.png";
import "../../styles/textStyle.css";

const Footer = () => {
  return (
    <div className="flex flex-col h-[200px] border-t-2 border-solid border-[#9000ff] justify-center items-center ">
      <div className="flex h-[100%] gap-10 justify-center items-center">
        <div className="text-[#fff] text-[1.5rem] roboto">Copyright © 2023</div>
        <div className="flex   gap-8">
          <a href="https://api.whatsapp.com/send?phone=5527995804151&text=Meu%20Whatsapp" target="_blank" rel="noreferrer"> 
            <img src={Wt}  alt="" className="w-[50px] h-[50px]:" />
          </a>
          <a href="https://github.com/warlleism" target="_blank" rel="noreferrer">
            <img src={Git}  alt="" className="w-[50px] h-[50px]:" />
          </a>
          <a href="https://www.linkedin.com/in/warllei-martins-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-823510153/" target="_blank" rel="noreferrer">
            <img src={Lin}  alt="" className="w-[50px] h-[50px]:" />
          </a>
          <a href="https://www.behance.net/warlleimartins" target="_blank" rel="noreferrer">
            <img src={Be}  alt="" className="w-[50px] h-[50px]:" />
          </a>
        </div>
      </div>
      <div
        style={{ color: "#fff", fontWeight: 900, letterSpacing: 2 }}
        className="text-[2.5rem] mb-[50px] text-center w-[100%] text"
      >
        WARLLEI MARTINS
      </div>
    </div>
  );
};

export default Footer;
