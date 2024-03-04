import React from "react";
import Icon from "../../assets/product/icon";
import Button from "../ui/button";
const ProductMain = ({ btn, img, title, sum1, sum2 }) => {
  return (
    <div className="w-[320px] bg-BgColor p-7 rounded-[25px] ">
      <Button variant="primary2">{btn}</Button>
      <img
        className="flex justify-center h-[320px] mt-10 mb-10 "
        src={img}
        alt="img "
      />
      <h3 className="text-headerList text-primary mb-2">{title}</h3>
      <div className="border w-[100%] mb-2"></div>
      <div className="flex justify-between">
        <h3 className="text-headerList text-primary">
          {" "}
          <span
            className="text-sum text-Btn1 line-through">
            {sum1}
          </span>{" "}
          {sum2}
        </h3>
        <Icon />
      </div>
    </div>
  );
};

export default ProductMain;
