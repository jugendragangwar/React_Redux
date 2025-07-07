import React from "react";

const index = ({ children, text, position = "top" }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`
          absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          px-3 py-1 text-sm rounded bg-black text-white whitespace-nowrap
          ${position === "top" ? "bottom-full mb-2 left-1/2 -translate-x-1/2" : ""}
          ${position === "bottom" ? "top-full mt-2 left-1/2 -translate-x-1/2" : ""}
          ${position === "left" ? "right-full mr-2 top-1/2 -translate-y-1/2" : ""}
          ${position === "right" ? "left-full ml-2 top-1/2 -translate-y-1/2" : ""}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default index;
