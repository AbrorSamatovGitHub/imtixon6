import React from "react";
import Icon from "../../assets/ABOUT/user/icon";
const UserMain = ({ img, name, job}) => {
  return (
    <div className="w-[450px] bg-btn3 rounded-[30px]">
      <img src={img} alt="" />
      <div className="my-[35px] mx-[28px]">
        <h3 className="text-h6 text-primary">{name}</h3>
        <div className="flex justify-between">
          <h4 className="text-new3 font-display  text-[#68A47F]">
            {job}
          </h4>
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default UserMain;
