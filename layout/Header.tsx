import Navbar from "../components/Navbar";
const Header = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Header;
