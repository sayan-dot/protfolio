import ArrowDown from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StartIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import HeroOrbit from "@/components/HeroOrbit";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* grains */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* rings */}
        {/* hero-rings --globals.css */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* stars */}
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="45s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-28 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-12 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-8 text-emerald-300 " />
        </HeroOrbit>
        {/* sparkels */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={330}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-4 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          orbitDuration="32s"
          shouldOrbit
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        {/* circles */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="44s">
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={620} rotation={-5} shouldOrbit orbitDuration="40s">
          <div className="size -2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        {/* section01 */}
        <div className="flex flex-col items-center">
          {/* hero image/emoji */}
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person peeking from behind laptop"
          />
          {/* ping */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            {/* availability tag */}
            <div className="text-sm font-medium">
              Available for new Projects
            </div>
          </div>
        </div>

        {/* heading and paragraph */}
        {/* TODO: change the header */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          {/* TODO: change the paragraph */}
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Driven by a passion for understanding user needs and behaviors. I
            employ a variety of research methods to gather valuable insights and
            inform data-driven design decisions.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <a
            href="/cv.pdf"
            download="MyResume.pdf"
            className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10"
          >
            <span>👋</span>
            <span className="font-semibold cursor-pointer">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};
