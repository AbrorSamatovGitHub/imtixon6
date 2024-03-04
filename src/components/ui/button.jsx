import React from "react";
import clsx from "clsx";

const Button = ({ variant, children }) => {
  return (
    <button
      className={clsx("py-[18px] px-[22px] text-white rounded-xl ", {
        "bg-Btn2 rounded-md": variant === "secondary",
        "bg-primary rounded-md": variant === "primary",
        "bg-primary rounded-md py-[7px] px-[20px]  text-sum": variant === "primary2",
        "bg-white rounded-md text-primary ": variant === "primary3",
        "bg-white rounded-md text-primary border-solid border-2 border-primary py-[28px] px-[45px]": variant === "primary4",
        "bg-primary rounded-md py-[22px] px-[64px]  text-cart3": variant === "primary5",
        "bg-btn3 text-[rgb(53,70,89)] rounded-md py-[22px] px-[64px]  text-cart3": variant === "primary6",



 
      })}
    >
      {children}
    </button>
  );
};

export default Button;
