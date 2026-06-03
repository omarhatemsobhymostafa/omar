import React from 'react'
import ProjectsCard from './projectCard'

export default function projects() {
    return (
        <section class="bg-white dark:bg-gray-900 py-10 px-4 text-center w-full " id="projects">
            <div class="max-w-screen-xl mx-auto text-center w-full ">


                <div class="max-w-2xl mb-8 w-full mx-auto">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center ">
                        My Projects
                    </h2>

                    <p class="text-gray-500 dark:text-gray-400">
                        I focus on technology and innovation to unlock long-term value.
                    </p>
                </div>
                <h2 class="text-xl font-bold text-gray-500 dark:text-gray-500 mb-4 mt-8text-center ">
                    Programming Projects
                </h2>
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full flex-wrap justify-center">

                    <ProjectsCard
                        img="mohema.png"
                        title="Mohema"
                        description="A website for Learing Moms and Babies I built it using React and Node.js"
                        link="mohma.vercel.app"
                    />
                    <ProjectsCard
                        img="tamra.png"
                        title="Tamra Studio"
                        description="A website for a local art studio, showcasing their work and services. I built it using React"
                        link='tamara-studio.vercel.app'
                    />
                    <ProjectsCard
                        img="E-commerce.png"
                        title="E-commerce Site"
                        description="A simple e-commerce website built with React Completely responsive Only frontend"
                        link='omarhatemsobhymostafa.github.io/E-Commerce/index.html'
                    />
                </div>
                <h2 class="text-xl font-bold text-gray-500 dark:text-gray-500 mb-4 mt-8 text-center ">
                    Graphic Design Projects
                </h2>

                <div class="grid gap-8 w-full flex-wrap justify-center">

                   <div className="w-full mx-auto flex justify-center w-full bg-gray-800 w-[80vw] p-6 rounded-lg">

                     <ProjectsCard
                        
                        img="graphic.png"
                        title="Graphic Design Portfolio"
                        description="All my graphic design projects are showcased in this portfolio, including work for Eldawlia Company"
                        link='drive.google.com/drive/folders/14JHluD3VwZ5rPMjc5eXWBJ9rATlMT654?usp=sharing'
                    />
                   </div>
                </div>


            </div>
        </section>
    )
}
