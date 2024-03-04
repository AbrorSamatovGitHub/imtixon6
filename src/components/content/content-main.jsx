import React from "react";
import Button from "../ui/button";
const ContentMain = ({ img, btn }) => {
  return (
    <div className="relative">
      <img src={img} alt="" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Button variant="primary3" ><p className="text-primary text-btn">{btn}</p></Button>
      </div>
    </div>
  );
};

export default ContentMain;
