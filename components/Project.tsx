"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, MotionValue } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectProps {
  children: React.ReactNode;
  headerText: string;
  descriptionText: string;
  gradientColorOne: string;
  gradientColorTwo: string;
  noTextChange?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  children,
  headerText,
  descriptionText,
  gradientColorOne,
  gradientColorTwo,
  noTextChange
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value: number) => {
      setIsActive(value > 0.4 && value < 0.6);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      ref={targetRef}
      className={`relative w-[200px] h-[200px] overflow-hidden rounded-md group transition-all duration-500 
        lg:hover:transform lg:hover:-translate-y-[10px] max-lg:w-[100vw]`}
    >
      {/* Background Gradient */}
      <motion.div
        className={`absolute w-full h-full rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 
          lg:group-hover:scale-[160%] lg:group-hover:opacity-100 opacity-0 transition-all duration-500 delay-100 
          max-lg:w-[600px] max-lg:h-[600px] ${isActive ? "max-lg:scale-[160%] max-lg:opacity-100" : ""}`}
        style={{
          background: `linear-gradient(to top, ${gradientColorOne}, ${gradientColorTwo})`,
        }}
      />
      {/* Application Overlay */}
      <motion.div
        className={`absolute w-full h-full inset-0 transition-all duration-500 
          ${isActive ? "max-lg:translate-x-[0px] max-lg:translate-y-[0px]" : "max-lg:translate-x-[150px] max-lg:translate-y-[150px]"}`}
      >
        {children}
      </motion.div>
      {/* Content Overlay */}
      <motion.div className="w-full h-full flex flex-col justify-end p-4 bg-black/90">
        <motion.div
          className={`transition-all duration-500 transform translate-y-[25px] lg:group-hover:translate-y-[0px] 
            ${isActive ? "max-lg:translate-y-[0px]" : ""}`}
        >
          <motion.h3
            className={`text-xl font-semibold z-10 text-white transition-all duration-500 
              ${!noTextChange && "lg:group-hover:text-black"}
              ${(isActive && !noTextChange) ? "max-lg:text-black" : ""}`}
          >
            {headerText}
          </motion.h3>
          <motion.p
            className={`text-sm z-10 text-white lg:group-hover:opacity-100 opacity-0 transition-all duration-500 
              ${!noTextChange && "lg:group-hover:text-black max-lg:text-black"}
              ${isActive ? "max-lg:opacity-100 max-lg:text-black" : ""}}`}
          >
            {descriptionText}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
