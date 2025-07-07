import React from "react";

function index({ text, color, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`uppercase text-xs font-semibold outline outline-1 px-8 py-3 text-${color} md:mt-3 tracking-widest`}
      >
        {text}
      </button>
    </div>
  );
}

export default index;
