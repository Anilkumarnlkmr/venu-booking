// src/components/Header.js
import React, {useState} from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyLogo</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#home"
            className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="/login"
            className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300"
          >
            SiginUP
          </a>
          <a
            href="#contact"
            className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
