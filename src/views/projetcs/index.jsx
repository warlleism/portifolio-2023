import { useState } from "react";
import { Data } from "./data";
import "../../styles/textStyle.css";
import Computer from "../../assets/img/icons/computer.png";
import Github from "../../assets/img/icons/github.png";
import "./style.scss";

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
    <div id="projects" className="mainConainerProjects">
      <div style={{ color: "#fff" }} className="textTile text">
        Projetos
      </div>
      <div className="containerMainCard">
        <div className="containerCard">
          {displayedData.map((e, index) => {
            return (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                key={e.id}
                className="my-custom-card borderAnimation"
              >
                <div className="my-custom-image-wrapper">
                  <img src={e.img} alt="" className="my-custom-image" />
                </div>

                <div className="my-custom-info-wrapper">
                  <div
                    style={{
                      transition: "0.3s ease-in-out",
                      color:
                        hoveredContainerIndex === index ? "#4D0188" : "#fff",
                    }}
                    className="my-custom-title text"
                  >
                    {e.name}
                  </div>
                  <div className="my-custom-icons">
                    {e.link && (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                        className="my-custom-icon"
                      >
                        <img src={Computer} alt="" />
                      </a>
                    )}
                    {e.git && (
                      <a
                        href={e.git}
                        target="_blank"
                        rel="noreferrer"
                        className="my-custom-icon"
                      >
                        <img src={Github} alt="" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="my-custom-description text">{e.side}</div>

                <div
                  style={{ color: "#fff", fontWeight: "600", letterSpacing: 2 }}
                  className="my-custom-skills-title text"
                >
                  Skills
                </div>

                <div className="my-custom-skills">
                  {e.skills.map((skill) => (
                    <div key={skill.id} className="my-custom-skill antonia borderAnimation">
                      {skill.skill}
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
                currentPage === page ? "transparent" : "bg-[#3f0a6d]"
              } bg-[#210936] border-2 border-solid border-[#9000ff]  text-[#fff] py-3 px-5 mr-5 rounded-[5px] text-[1.5rem] rainbow`}
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
