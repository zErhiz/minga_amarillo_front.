import React from "react";

const ButtonAdmin = ({ active, onClick, children }) => {
  return (
    <button
      className={`w-[100%] h-[100%] ${
        active ? "bg-orange-500 text-white" : "bg-white text-orange-500"
      } font-bold text-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonAdmin;