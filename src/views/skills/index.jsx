import { useState } from "react";
import { Data } from "./skills";
import "../../styles/textStyle.css";
import "./style.scss";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const groupedData = [
    Data.filter((e) => e.id <= 5),
    Data.filter((e) => e.id >= 6 && e.id <= 11),
    Data.filter((e) => e.id >= 12),
  ];

  return (
    <div id="skills" className="mainContainerSkills">
      <div className="containerTextSkills text">Skills</div>
      <div className="containerFlexSkills">
        {groupedData.map((group, groupIndex) => (
          <div key={groupIndex} className="containerRowSkills">
            {group.map((item, index) => {
              const globalIndex =
                groupedData.slice(0, groupIndex).flat().length + index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(globalIndex)}
                  onMouseLeave={handleMouseLeave}
                  className={`containerItemSkills ${isIOS ? "iosRainbow" : "rainbow"}`}
                >
                  <div
                    style={{
                      transition: "0.3s ease-in-out",
                      zIndex: 9999,
                      bottom: hoveredIndex === globalIndex ? "-50px" : "0px",
                      opacity: hoveredIndex === globalIndex ? 1 : 0,
                    }}
                    className="containerNameSkills text"
                  >
                    {item.name}
                  </div>
                  <img src={item.img} alt={item.name} className="containerImageSkills" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
