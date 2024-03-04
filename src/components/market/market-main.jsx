import React from "react";

const MarketMain = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center pt-[60px] pb-[20px] px-[35px] rounded-[30px] bg-white w-[270px]">
      <img className="mb-[15px]" src={img} alt="" />
      <h3 className="text-h6 text-primary mb-[12px]"> {title}</h3>
      <p className="text-textP2 text-Paragraph text-center">{text}</p>
    </div>
  );
};

export default MarketMain;
