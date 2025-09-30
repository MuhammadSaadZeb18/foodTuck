import React from "react";
import cofeMaker from "../../../assets/icons/cofeMakerIcon.png";
const CofeMaker = () => {
  const cofeMakerObj = [1, 2, 3];
  return (
    <div className="flex flex-col  gap-y-[2rem] ">
      {cofeMakerObj.map((_, index) => (
        <div className="flex gap-x-[2rem]   items-center">
          <div>
            <img src={cofeMaker} className="border_radious" />
          </div>
          <div className="flex flex-col gap-y-3">
            <h5>High quality coffee</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue
              nibh
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CofeMaker;
