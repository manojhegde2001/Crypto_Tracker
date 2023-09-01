import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import logo2 from "../public/Vector.png";
import logo3 from "../public/Frame.png";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white border-black border-1 shadow-lg flex h-12 justify-center">
        <div className="w-4/5 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image src={logo} className="" alt="Logo" />
            <h2 className="text-xl font-bold text-black">Craypto Tracker</h2>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={logo2} className="" alt="logo2" />
            <Image src={logo3} className="" alt="logo3" />
          </div>

              </div>
      </nav>
    </>
  );
};

export default Navbar;
