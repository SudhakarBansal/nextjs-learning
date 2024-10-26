import HeaderSlideShow from "./HeaderSlideShow";
import HeaderText from "./HeaderText";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center">
      <HeaderSlideShow />
      <HeaderText />
    </header>
  );
};

export default Header;
