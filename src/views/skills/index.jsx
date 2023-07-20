import { useState } from "react";
import { Data } from "./skills";
import "../../styles/textStyle.css";

const Skills = () => {
  const [hoveredContainerIndex, setHoveredContainerIndex] = useState(null);

  const handleMouseEnter = (index) => {
    console.log(index)
    setHoveredContainerIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredContainerIndex(null);
  };

  const dataFilterSixUp = Data.filter((e) => e.id <= 5);
  const dataFilterSixDown = Data.filter((e) => e.id >= 6);

  return (
    <div className="w-[100%] flex flex-col justify-center items-center ">
      <div style={{ color: "#fff" }} className="text-[2.5rem] mb-[50px] text">
        Skills
      </div>
      <div className="flex flex-col justify-center items-center w-[70%] m-auto h-[400px] mb-[100px]">
        <div className="flex flex-row justify-between h-[300px] items-center w-[100%]">
          {dataFilterSixUp.map((e, index) => {
            return (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                key={e.id}
                className="flex items-center justify-center bg-[#0A0A0D] w-[130px] h-[130px] rounded-[100%] relative borderAnimation"
              >
                <div
                  id={`name-linguage-${index}`}
                  style={{
                    transition: "0.3s ease-in-out",
                    bottom: hoveredContainerIndex === index ? "-50px" : "0px",
                    opacity: hoveredContainerIndex === index ? 1 : 0,
                  }}
                  className="absolute bottom-[0px] text-[1.4rem] text text-[#fff]"
                >
                  {e.name}
                </div>
                <img src={e.img} alt="" className="max-w-[50%]" />
              </div>
            );
          })}
        </div>

        <div className="flex flex-row justify-between h-[300px] items-center w-[100%]">
          {dataFilterSixDown.map((e, index) => {
            return (
              <div
                onMouseEnter={() =>
                  handleMouseEnter(index + dataFilterSixUp.length)
                }
                onMouseLeave={handleMouseLeave}
                key={e.id}
                className="flex items-center justify-center bg-[#0A0A0D] w-[130px] h-[130px] rounded-[100%] relative borderAnimation"
              >
                <div
                  id={`name-linguage-${index + dataFilterSixUp.length}`}
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
                  className="absolute bottom-[0px] text-[1.4rem] text text-[#fff]"
                >
                  {e.name}
                </div>
                <img src={e.img} alt="" className="max-w-[50%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
