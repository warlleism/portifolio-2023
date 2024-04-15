import { useEffect, useState } from "react";
import { Data } from "./data";
import "../../styles/textStyle.css";
import Computer from "../../assets/img/icons/computer.png";
import Github from "../../assets/img/icons/github.png";
import BarLoader from "react-spinners/BarLoader";
import "./style.scss";

const Projects = () => {
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredContainerIndex, setHoveredContainerIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredContainerIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredContainerIndex(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 2500)

  };

  const totalPages = Math.ceil(Data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = Data.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [currentPage])

  return (
    <div id="projects" className="mainConainerProjects">
      <div style={{ color: "#fff" }} className="textTile text">
        Projetos
      </div>
      <div className="containerMainCard">
        <div className="containerCard">
          {displayedData.map((e, index) => {
            return (
              <a
                href={e.link}
                target="_blank"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                key={e.id}
                style={{ position: 'relative' }}
                className="my-custom-card borderAnimation"
              >

                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}>
                  <BarLoader
                    color={'#4D0188'}
                    loading={loading}
                    size={130}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>

                {
                  !loading &&
                  <>
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
                  </>
                }

              </a>
            );
          })}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${currentPage === page ? "transparent" : "bg-[#3f0a6d]"
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
