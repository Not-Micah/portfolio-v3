import React from "react";

const Me2 = () => {
  return (
    <div
      className="
      project-card-container
      bg-[#F4F9FF] grid grid-cols-2 gap-x-2"
    >
      <div className="flex flex-col gap-y-2">
        {
          Array.from({ length: 2 }).map((_, index) => (
            <div className="h-[20%] w-full bg-[#C6E0FF] rounded-lg shadow-sm" />
          ))
        }
        <div className="h-full w-full bg-[#C6E0FF] rounded-lg shadow-sm" />
      </div>
      <div className="h-full w-full bg-white rounded-lg shadow-sm
      flex flex-col gap-y-2 p-2">
          {
            Array.from({ length: 5 }).map((_, index) => (
              <div className={`h-[10%] w-[60%] bg-gray-300/40 rounded-lg shadow-sm
                ${index % 2 === 0 && "self-end"}`} />
            ))
          }
      </div>
    </div>
  );
};

export default Me2;
