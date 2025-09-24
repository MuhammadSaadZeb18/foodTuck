import React from "react";

const User = ({ img, role, name }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5">
      <img
        src={img}
        className="rounded-[50%] h-[80px] w-[80px] mb-2 border-amber-50 border-2"
      />
      <b className="text-white font-bold text-4xl">{name}</b>
      <p className="text-white">{role}</p>
    </div>
  );
};

export default User;
