import React from "react";

const CustomerMain = ({ num, title }) => {
  return (
    <div className="border-4 border-green rounded-full w-[200px] h-[200px] flex flex-col justify-center items-center m-2 ">
      <div className="bg-BgColor w-[93%] h-[93%] rounded-full flex flex-col justify-center items-center">
        <h2 className="text-h2 text-primary">{num}</h2>
        <h3 className="text-Paragraph text-primary">{title}</h3>
      </div>
    </div>
  );
};

export default CustomerMain;
