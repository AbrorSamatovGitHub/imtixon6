import React from "react";

const CardMain = ({ img, h4, title }) => {
  return (
    <div className="relative">
      <img className="w-[500px]" src={img} alt="" />
      <div className="absolute w-[230px] top-1/2 translate-y-[-50%] left-[50px]">
        <h4 className="font-display text-h4 text-[#68A47F]">{h4}</h4>
        <h3 className="text-h3 text-primary ">{title}</h3>
      </div>
    </div>
  );
};

export default CardMain;
