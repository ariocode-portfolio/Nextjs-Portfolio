import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen  flex  items-center justify-center bg-center bg-cover "
    >
      <div className=" grid  max-w-max max-h-[100%]
       md:grid md:grid-cols-2 gap-4 md:gap-12 lg:gap-11 md:max-w-[90%] md:max-h-[90%]  ">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
