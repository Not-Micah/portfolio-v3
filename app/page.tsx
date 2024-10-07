import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";

const Home = () => {
  return (
    <main className="bg-black/90
    flex justify-center items-center">
      <div className="max-w-[1400px] px-8">
        <Hero />
        <ProjectSection />
      </div>
    </main>
  );
};

export default Home;
