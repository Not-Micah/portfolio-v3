"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className={`relative w-[200px] h-[200px] overflow-hidden rounded-md group transition-all duration-500 
        lg:hover:transform lg:hover:-translate-y-[10px] max-lg:w-[100vw]`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background Gradient */}
      <div
        className={`absolute w-full h-full rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 
          lg:group-hover:scale-[160%] lg:group-hover:opacity-100 opacity-0 transition-all duration-500 delay-100 
          max-lg:w-[600px] max-lg:h-[600px] ${isActive ? "scale-[160%] opacity-100" : ""}`}
        style={{
          background: `linear-gradient(to top, ${gradientColorOne}, ${gradientColorTwo})`,
        }}
      />
      {/* Application Overlay */}
      <div
        className={`absolute w-full h-full inset-0 transition-all duration-500 
          ${isActive ? "max-lg:translate-x-[0px] max-lg:translate-y-[0px]" : "max-lg:translate-x-[150px] max-lg:translate-y-[150px]"}`}
      >
        {children}
      </div>
      {/* Content Overlay */}
      <div className="w-full h-full flex flex-col justify-end p-4 bg-black/90">
        <div
          className={`transition-all duration-500 transform translate-y-[25px] lg:group-hover:translate-y-[0px] 
            ${isActive ? "max-lg:translate-y-[0px]" : ""}`}
        >
          <h3
            className={`text-xl font-semibold z-10 text-white lg:group-hover:text-black transition-all duration-500 
              ${isActive ? "max-lg:text-black" : ""}`}
          >
            {headerText}
          </h3>
          <p
            className={`text-sm z-10 text-black lg:group-hover:opacity-100 opacity-0 transition-all duration-500 
              ${isActive ? "max-lg:opacity-100" : ""}`}
          >
            {descriptionText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
