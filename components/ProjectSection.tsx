import Verbum from "@/components/ProjectCardDesigns/Verbum";
import Versle from "@/components/ProjectCardDesigns/Versle";
import SpotifyClone from "@/components/ProjectCardDesigns/SpotifyClone";
import Versify from "@/components/ProjectCardDesigns/Versify";
import Me2 from "@/components/ProjectCardDesigns/Me2";
import HeartsForHope from "@/components/ProjectCardDesigns/HeartsForHope";
import RestoringRainbows from "@/components/ProjectCardDesigns/RestoringRainbows";

import Project from "./Project";

const ProjectSection = () => {
  const projects = [
    {
      component: <Verbum />,
      headerText: "Verbum",
      descriptionText: "A verse filter tool.",
      gradientColorOne: "#BC9BE3",
      gradientColorTwo: "#F6EFFA",
      noTextChange: false,
    },
    {
      component: <Versle />,
      headerText: "Versle",
      descriptionText: "A wordle-style verse game.",
      gradientColorOne: "#EDEEEF",
      gradientColorTwo: "#ACAFAF",
      noTextChange: false,
    },
    {
      component: <SpotifyClone />,
      headerText: "Micahfy",
      descriptionText: "A spotify clone.",
      gradientColorOne: "#075740",
      gradientColorTwo: "#578E7E",
      noTextChange: true,
    },
    {
      component: <Versify />,
      headerText: "Versify",
      descriptionText: "An AI verse generator.",
      gradientColorOne: "#EDEEEF",
      gradientColorTwo: "#ACAFAF",
      noTextChange: false,
    },
    {
      component: <Me2 />,
      headerText: "Me2",
      descriptionText: "A chat app for students.",
      gradientColorOne: "#77b4ff",
      gradientColorTwo: "#C6E0FF",
      noTextChange: false,
    },
    {
      component: <HeartsForHope />,
      headerText: "Hearts 4 Hope",
      descriptionText: "An organizational website.",
      gradientColorOne: "#EB7388",
      gradientColorTwo: "#9B4B5A",
      noTextChange: false,
    },
    {
      component: <RestoringRainbows />,
      headerText: "Rest. Rainbows",
      descriptionText: "An organizational website.",
      gradientColorOne: "#D9F5EF",
      gradientColorTwo: "#DDF3F5",
      noTextChange: false,
    },
  ];

  return (
    <section className="p-8 flex justify-start items-start flex-wrap
    gap-6 max-lg:gap-y-4
    lg:max-w-[1000px]">
      {projects.map((card, index) => (
        <Project
          key={index}
          headerText={card.headerText}
          descriptionText={card.descriptionText}
          gradientColorOne={card.gradientColorOne}
          gradientColorTwo={card.gradientColorTwo}
          noTextChange={card.noTextChange}
        >
          {card.component}
        </Project>
      ))}
    </section>
  );
};

export default ProjectSection;
