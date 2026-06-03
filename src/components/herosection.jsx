import React from 'react'

export default function HeroSection() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 text-white  " id="home">

            <section className="w-full flex items-center justify-center text-center">
                
                <div className="max-w-screen-xl px-4 py-8 flex flex-col items-center justify-center">
                    
                    <div className="flex flex-col items-center justify-center text-center">
                        
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            Omar Hatem
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-white md:text-lg lg:text-xl">
                            Programmer , Graphic Designer
                        </p>

                        <div className="flex gap-4 flex-wrap justify-center">
                            
                            <a
                                href="#projects"
                                className="inline-flex items-center px-5 py-3 text-base font-medium rounded-lg bg-blue-700 hover:bg-blue-800"
                            >
                                See My Projects

                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 
                                        6a1 1 0 010 1.414l-6 6a1 1 
                                        0 01-1.414-1.414L14.586 11H3a1 
                                        1 0 110-2h11.586l-4.293-4.293a1 
                                        1 0 010-1.414z"
                                    />
                                </svg>
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center px-5 py-3 text-base font-medium border border-gray-500 rounded-lg hover:bg-gray-700"
                            >
                                Contact Me
                            </a>

                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}