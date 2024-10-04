import Project from "@/components/Project";

import Verbum from "@/components/ProjectCardDesigns/Verbum";
import Versle from "@/components/ProjectCardDesigns/Versle";
import SpotifyClone from "@/components/ProjectCardDesigns/SpotifyClone";
import Versify from "@/components/ProjectCardDesigns/Versify";
import Me2 from "@/components/ProjectCardDesigns/Me2";
import HeartsForHope from "@/components/ProjectCardDesigns/HeartsForHope";
import RestoringRainbows from "@/components/ProjectCardDesigns/RestoringRainbows";

const Home = () => {
  const projects = [
    {component: <Verbum />, headerText: "Verbum", descriptionText: "A verse filter tool.", gradientColorOne: "#BC9BE3", gradientColorTwo: "#F6EFFA"},
    {component: <Versle />, headerText: "Versle", descriptionText: "A wordle-style verse game.", gradientColorOne: "#EDEEEF", gradientColorTwo: "#ACAFAF"},
    {component: <SpotifyClone />, headerText: "Micahfy", descriptionText: "A spotify clone.", gradientColorOne: "#075740", gradientColorTwo: "#578E7E"},
    {component: <Versify />, headerText: "Versify", descriptionText: "An AI verse generator.", gradientColorOne: "#EDEEEF", gradientColorTwo: "#ACAFAF"},
    {component: <Me2 />, headerText: "Me2", descriptionText: "A chat app for students.", gradientColorOne: "#77b4ff", gradientColorTwo: "#C6E0FF"},
    {component: <HeartsForHope />, headerText: "Hearts 4 Hope", descriptionText: "An organizational website.", gradientColorOne: "#EB7388", gradientColorTwo: "#9B4B5A"},
    {component: <RestoringRainbows />, headerText: "Rest. Rainbows", descriptionText: "An organizational website.", gradientColorOne: "#D9F5EF", gradientColorTwo: "#DDF3F5"}
  ];

  return (
    <div className="p-8 h-[100vh] flex justify-start items-start gap-12 flex-wrap">
      {projects.map((card, index) => (
        <Project
          key={index}
          headerText={card.headerText}
          descriptionText={card.descriptionText}
          gradientColorOne={card.gradientColorOne}
          gradientColorTwo={card.gradientColorTwo}
        >
          {card.component}
        </Project>
      ))}
    </div>
  );
};

export default Home;
