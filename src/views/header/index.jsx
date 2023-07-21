import { useEffect } from "react";
import "../../styles/textStyle.css";
import { useState } from "react";

const Header = () => {
  const [scrollParaBaixo, setScrollParaBaixo] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollAtual = window.pageYOffset;
      const scrollAnterior = scrollRef.current || 0;

      if (scrollAtual > scrollAnterior) {
        setScrollParaBaixo(true);
      } else {
        setScrollParaBaixo(false);
      }
      scrollRef.current = scrollAtual;
    }

    const scrollRef = { current: window.pageYOffset };

    window.addEventListener("scroll", () => {
      handleScroll();
      const header = document.getElementById("header");
      const width = window.scrollY;
      const black =
        width >= 500
          ? (header.style.background = "#00000085")
          : (header.style.background = "transparent");
      return [handleScroll, black];
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className="flex items-center z-10 justify-center h-20 w-[100%] fixed top-0 transition-all py-14"
      style={{
        transform: scrollParaBaixo ? "translateY(-400%)" : "translateY(0%)",
      }}
    >
      <div className="text-3xl font-semibold w-[63%] text-[#fff] text tracking-[3px] max-[880px]:w-[100%] max-[880px]:text-center ">
        Warllei Martins
      </div>
      <ul className="flex items-center justify-between w-[20%] max-[1262px]:w-[30%] max-[880px]:hidden ">
        <li className="text-[#fff] text-[1.3rem]">
          <a href="#home" className="text">
            Ínicio
          </a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="#about" className="text">
            Sobre
          </a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="#skills" className="text">
            Skills
          </a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="#projects" className="text">
            Projetos
          </a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="#footer" className="text">
            Contato
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
