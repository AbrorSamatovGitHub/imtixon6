import React from "react";
import clsx from "clsx";
const Input = React.forwardRef(
  ({ placeholder, value, onChange, name, id, label,variant }, ref) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <div className="relative w-[100%]">
          <input
            className={clsx(
              "outline-1 outline-gray-400 p-5 w-[321px] bg-BgColor rounded-full",
              {
                " outline-gray-400 p-5 w-[321px] bg-BgColor rounded-full": variant === "headerInput",
                " outline-gray-400 p-[27px] w-[321px] bg-white rounded-[14px]": variant === "footerInput",
              },
               )}
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
          />
        </div>
      </div>
    );
  }
);
export default Input;
