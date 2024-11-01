import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import grainImage from "@/assets/images/grain.jpg";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "NVN Foods",
    year: "(under development)",
    title: "House of Mangoes",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://houseofmango.in/",
    image: darkSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Voice Pal",
    results: [
      { title: "Integrated multilingual support." },
      { title: "Optimized for fast loading." },
      { title: "Improves satisfaction quick responses" },
    ],
    link: "https://voicepal2-mp.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "AI Image Recognizer",
    results: [
      { title: "Accurately detects real vs AI images" },
      { title: "Boosts trust with reliable image verification" },
      { title: "Optimized for high-speed image analysis" },
    ],
    link: "https://ai-image-recognizer.vercel.app/?vercelToolbarCode=rFXk8uw57qOcDrL",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        {/* paste here */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into real world experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              {/* grain image background */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              {/* project details */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul
                    className="flex flex-col gap-4 mt-4 
              md:mt-5"
                  >
                    {project.results.map((result, index) => (
                      <li
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                        key={index}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  {/* project image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
