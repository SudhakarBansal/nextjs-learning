import HeaderSlideShow from "./HeaderSlideShow";
import HeaderText from "./HeaderText";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center md:px-32 md:py-16 px-6 py-8">
      <HeaderSlideShow />
      <HeaderText />
    </header>
  );
};

export default Header;
