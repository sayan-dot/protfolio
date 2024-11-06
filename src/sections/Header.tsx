export const Header = () => {
  return (
    // TODO: make the links dynamic
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="https://github.com/sayan-dot" className="nav-item">
          Github
        </a>
        <a
          href="https://www.instagram.com/shuvradeepchatterjee?igsh=MWpibGE5Z2Z0cjloZg=="
          className="nav-item"
        >
          Instagram
        </a>
        <a href="https://www.facebook.com/shuvradeepCh/" className="nav-item">
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/shuvradeep-chatterjee"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Linkdin
        </a>
      </nav>
    </div>
  );
};
