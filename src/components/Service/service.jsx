import React from 'react'
import ServiceCard from './serviceCard'
export default function service() {
    return (
        <section class="bg-gray-900 dark:bg-gray-900 py-10 px-4 text-center w-full " id="services" >
            <div class="max-w-screen-xl mx-auto text-center w-full ">


                <div class="max-w-2xl mb-8 w-full mx-auto">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center ">
                        My Services
                    </h2>

                    <p class="text-gray-500 dark:text-gray-400">
                        I focus on technology and innovation to unlock long-term value.
                    </p>
                </div>
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full flex-wrap justify-center">

                    <ServiceCard
                        img="coding.png"
                        title="Web Development"
                        description="I build responsive and user-friendly websites using modern technologies like React, Node.js, and Tailwind CSS."
                    />
                    <ServiceCard
                        img="graphic.png"
                        title="Graphic Design"
                        description="I create visually appealing designs for logos, social media, and marketing materials using tools like Adobe Photoshop , Indesign and Illustrator."
                    />
                       <ServiceCard
                        img="content.png"
                        title="Content Creation"
                        description="I have a page on Facebook where I share programming and design content to help others learn and grow in their skills."
                    />
                    </div>
                    
                 
            </div>
        </section>
    )
}
