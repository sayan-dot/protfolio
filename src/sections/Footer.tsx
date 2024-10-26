export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 "></div>
      <div className="container">
        <div className="border-t border-white py-6 text-sm flex flex-col items-center gap-8 ">
          <div className="text-white ">&copy; 2024, All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
