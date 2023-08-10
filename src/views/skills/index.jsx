import { useState } from "react";
import { Data } from "./skills";
import "../../styles/textStyle.css";
import "./style.scss";

const Skills = () => {
  const [hoveredContainerIndex, setHoveredContainerIndex] = useState(null);

   const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

console.log(isIOS)

  const handleMouseEnter = (index) => {
    setHoveredContainerIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredContainerIndex(null);
  };

  const dataFilterSixUp = Data.filter((e) => e.id <= 5);
  const dataFilterSixDown = Data.filter((e) => e.id >= 6);

  return (
    <div id="skills" className="mainContainerSkills">
      <div className="containerTextSkills">Skills</div>
      <div className="containerFlexSkills">
        <div className="containerRowSkills">
          {dataFilterSixUp.map((e, index) => {
            return (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                key={e.id}
                className={`containerItemSkills ${isIOS ? 'iosRainbow' : 'rainbow'}`}
              >
                <div
                  style={{
                    transition: "0.3s ease-in-out",
                    bottom: hoveredContainerIndex === index ? "-50px" : "0px",
                    opacity: hoveredContainerIndex === index ? 1 : 0,
                  }}
                  className="containerNameSkills text"
                >
                  {e.name}
                </div>
                <img src={e.img} alt="" className="containerImageSkills" />
              </div>
            );
          })}
        </div>

        <div className="containerRowSkills">
          {dataFilterSixDown.map((e, index) => {
            return (
              <div
                onMouseEnter={() =>
                  handleMouseEnter(index + dataFilterSixUp.length)
                }
                onMouseLeave={handleMouseLeave}
                key={e.id}
                className="containerItemSkills rainbow"
              >
                <div
                  style={{
                    transition: "0.3s ease-in-out",
                    bottom:
                      hoveredContainerIndex === index + dataFilterSixUp.length
                        ? "-50px"
                        : "0px",
                    opacity:
                      hoveredContainerIndex === index + dataFilterSixUp.length
                        ? 1
                        : 0,
                  }}
                  className="containerNameSkills text"
                >
                  {e.name}
                </div>
                <img src={e.img} alt="" className="containerImageSkills" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
