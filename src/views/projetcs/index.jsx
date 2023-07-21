import { useState } from "react";
import { Data } from "./data";
import "../../styles/textStyle.css";
import Computer from "../../assets/img/icons/computer.png";
import Github from "../../assets/img/icons/github.png";

const Projects = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredContainerIndex, setHoveredContainerIndex] = useState(null);

  const handleMouseEnter = (index) => {
    console.log(index);
    setHoveredContainerIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredContainerIndex(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(Data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = Data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      id="projects"
      className="w-[100%] flex flex-col justify-center items-center"
    >
      <div
        style={{ color: "#fff" }}
        className="text-[2.5rem] mb-[50px] text-center w-[100%] text"
      >
        Projetos
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] m-auto  mb-[100px]">
        <div className="flex flex-row flex-wrap justify-between items-center w-[70%]">
          {displayedData.map((e, index) => {
            return (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                key={e.id}
                className="flex box px-5 flex-col items-center justify-center bg-[#0A0A0D] w-[400px] h-[500px] rounded-[5px] mb-[50px] borderAnimation"
              >
                <div className="w-[100%] h-[45%]  mt-2 ">
                  <img src={e.img} alt="" className="w-[100%] h-[100%]" />
                </div>

                <div className="w-[100%] flex justify-between items-center  mt-2">
                  <div
                    style={{
                      transition: "0.3s ease-in-out",
                      color:
                        hoveredContainerIndex === index ? "#4D0188" : "#fff",
                    }}
                    className="text-[1.6rem] text text-[#fff] text-center mt-3"
                  >
                    {e.name}
                  </div>
                  <div className="flex w-[60px] justify-center">
                    {e.link && (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mr-3"
                      >
                        <img src={Computer} alt="" />
                      </a>
                    )}

                    {e.git && (
                      <a href={e.git} target="_blank" rel="noreferrer">
                        <img src={Github} alt="" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="text-[1.3rem] w-[100%] text text-[#fff]">
                  {e.side}
                </div>
                <div
                  style={{ color: "#fff", fontWeight: "700" }}
                  className="text-[2rem]  text w-[100%] mt-8"
                >
                  Skills
                </div>
                <div className="w-[100%] flex flex-wrap">
                  {e.skills.map((e) => (
                    <div
                      key={e.id}
                      style={{ fontWeight: "600" }}
                      className="bg-[#210936] text-[0.8rem] py-2 px-3 text-[#fff] rounded-[100px] mr-2 mb-2"
                    >
                      {e.skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${
                currentPage === page ? "bg-[#9000ff]" : "bg-[#210936]"
              } bg-[#210936] border-2 border-solid border-[#9000ff]  text-[#fff] py-3 px-5 mr-5 rounded-[5px] text-[1.5rem]`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
