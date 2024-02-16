import { TextField } from "@mui/material";
import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        {...props}
        className="w-[350px] px-2 py-4 border-gray-200 border rounded-md focus:outline-green-800"
      />
    </div>
  );
};

export default Input;
