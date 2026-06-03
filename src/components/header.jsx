import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
    return (
        <nav className="bg-black fixed w-full  z-20 top-0 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="/" className="flex items-center space-x-3">
                    <img src="logo.jpg" className="h-12" alt="Logo" />
                    
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>

                    <svg
                        className="w-7 h-7 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M5 7h14M5 12h14M5 17h14"
                        />
                    </svg>
                </button>

                <div
                    className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                >
                    <ul className="font-medium flex flex-col p-4 mt-4 rounded-base bg-gray-900 rounded-xl md:flex-row md:space-x-8 md:mt-0 ">

                        <li>
                            <a
                                
                                href="#home"
                                className="block py-2 px-3 text-white"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                className="block py-2 px-3 text-white"
                            >
                                About Me
                            </a>
                        </li>

                        <li>
                            <a
                                href="#services "
                                className="block py-2 px-3 text-white"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="block py-2 px-3 text-white"
                            >
                                My Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact  "
                                className="block py-2 px-3 text-white"
                            >
                                Get in Touch
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}