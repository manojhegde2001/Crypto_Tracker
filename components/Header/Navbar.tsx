import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import search from '../../public/Vector.png';
import close from '../../public/close.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="w-full border-black border-1 shadow-lg flex h-12 justify-center"
        x-data="{ open: false }"
      >
        <div className="w-4/5 flex min-[500px]:justify-between items-center max-[500px]:flex-row-reverse max-[500px]:justify-between max-[500px]:w-full">
          <div className="flex gap-3 items-center">
            <Image src={logo} className="" alt="Logo" />
            <h2 className="text-2xl font-bold text-black">Crypto Tracker</h2>
          </div>
          <div className="flex gap-5 items-center">
            <Image src={search} className="max-[750px]:hidden" alt="search" />
            <div className="" onClick={toggleSidebar}>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black my-1"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </div>
          
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-0 flex-3 right-0 h-full w-2/3 bg-black text-center z-50 md:hidden ">
          <div className="p-4">
            <Image
              src={close}
              className="w-6 h-auto items-start mb-20"
              onClick={closeSidebar}
              alt="closesidebar"
            />
            <a
              href="#" onClick={closeSidebar}
              className="flex text-center justify-center w-full py-2 text-white bg-gray-800 hover:bg-blue-600 border-red-white border-y-2 my-10"
            >
              HOME
            </a>
            <a
              href="#"
              className="flex text-center justify-center w-full py-2 text-white bg-gray-800 hover:bg-blue-600 border-white border-y-2 my-10"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="flex text-center justify-center w-full py-2 text-white bg-gray-800 hover:bg-blue-600 border-white border-y-2 my-10"
            >
              CONTACT US
            </a>
            <a
              href="#"
              className="flex text-center justify-center w-full py-2 text-white bg-gray-800 hover:bg-blue-600 border-white border-y-2 my-10"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="flex text-center justify-center w-full py-2 text-white bg-gray-800 hover:bg-blue-600 border-white border-y-2 my-10"
            >
              INBOX
            </a>
            <a
              href="#"
              className="flex text-center justify-center w-full py-2 text-white bg-gray-800 hover:bg-blue-600 border-white border-y-2 my-10"
            >
              BLOGS
            </a>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
