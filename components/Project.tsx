"use client";

import React, { useState } from 'react';

interface ProjectProps {
  children: React.ReactNode;
  headerText: string;
  descriptionText: string;
  gradientColorOne: string;
  gradientColorTwo: string;
}

const Project: React.FC<ProjectProps> = ({
  children,
  headerText,
  descriptionText,
  gradientColorOne,
  gradientColorTwo,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`w-[200px] h-[200px] group relative overflow-hidden rounded-md lg:hover:transform lg:hover:-translate-y-[10px] transition-all duration-500 max-lg:w-[100vw]`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} 
    >
      <div
        className={`absolute w-full h-full transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full scale-0 
            lg:group-hover:scale-[160%] opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100
            max-lg:w-[600px] max-lg:h-[600px] 
            ${isActive ? 'scale-[160%] opacity-100' : ''}`}
        style={{
          background: `linear-gradient(to top, ${gradientColorOne}, ${gradientColorTwo})`
        }}
      />
      <div className={`absolute w-full h-full inset-0
      transition-all duration-500
      ${isActive ? 'max-lg:translate-y-[0px] max-lg:translate-x-[0px]' : 'max-lg:translate-y-[150px] max-lg:translate-x-[150px]'}`}>
        {children}
      </div>
      <div className="w-full h-full bg-black/90 flex flex-col justify-end p-4">
        <div className={`transform translate-y-[25px] lg:group-hover:translate-y-[0px] transition-all duration-500
            ${isActive ? 'max-lg:translate-y-[0px]' : ''}`}>
          <h3 className="text-xl font-semibold z-10 text-white lg:group-hover:text-black transition-all duration-500">
            {headerText}
          </h3>
          <p className={`text-sm z-10 text-black opacity-0 lg:group-hover:opacity-100 transition-all duration-500
            ${isActive ? 'opacity-100' : ''}`}>
            {descriptionText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
