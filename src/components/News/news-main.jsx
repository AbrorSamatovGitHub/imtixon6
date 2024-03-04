import React from "react";
import Icon from "../../assets/news/icon";
import Button from "../ui/button";
import BtnIcon from "../../assets/header/btnIcon";
const NewsMain = ({ img, date, title, text }) => {
  return (
    <div className="relative">
      <img src={img} alt="" />
      <div className=" absolute top-[43px] left-[32px] w-[82px] h-[82px] bg-white rounded-full flex  justify-center items-center">
        <span className="text-h6 text-primary w-[50px] text-center">{date}</span>
      </div>
      <div className="absolute rounded-[30px] left-[50%] translate-x-[-50%] shadow-2xl bottom-[-70px] px-[50px] py-[50px] bg-white">
        <div className="flex items-center gap-2 mb-[15px]">
          <Icon />
          <p className="text-new text-primary">By Rachi Card</p>
        </div>
        <h5 className="text-h6 text-primary mb-2">{title}</h5>
        <p className="w-[470px] text-Paragraph text-TextP mb-[15px]">{text}</p>
        <Button variant="secondary">
          <span className="flex items-center gap-1">
            <p className="text-headerList text-primary ">Load More</p>{" "}
            <span>
              <BtnIcon />
            </span>{" "}
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default NewsMain;
