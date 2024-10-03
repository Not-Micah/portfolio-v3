import Project from "@/components/Project";

const Home = () => {
  const projects = Array.from({ length: 8 });

  return (
    <div className="p-8 h-[100vh] flex justify-start items-start gap-12 flex-wrap">
      {projects.map((_, index) => (
        <Project
          key={index}
          headerText="Me2"
          descriptionText="A chat app for students."
          gradientColorOne="#77b4ff"
          gradientColorTwo="#C6E0FF"
        >
          <div
            className="
              project-card-container
              bg-[#F4F9FF] grid grid-cols-2 gap-x-2"
          >
            <div className="flex flex-col gap-y-2">
              <div className="h-[20%] w-full bg-[#C6E0FF] rounded-lg shadow-sm" />
              <div className="h-[20%] w-full bg-[#C6E0FF] rounded-lg shadow-sm" />
              <div className="h-full w-full bg-[#C6E0FF] rounded-lg shadow-sm" />
            </div>
            <div className="h-full w-full bg-white rounded-lg shadow-sm" />
          </div>
        </Project>
      ))}
    </div>
  );
};

export default Home;
