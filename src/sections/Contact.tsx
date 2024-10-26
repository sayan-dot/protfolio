import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Your Vision, My Expertise
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Interested in working together? Download my CV to explore my
                qualifications and discover how my unique perspective can add
                value to your team.
              </p>
            </div>
            <div>
              <a
                href="/cv.pdf"
                download="MyResume.pdf"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Download CV</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
