import React from 'react'

export default function projectCard(props) {
    return (
        <div class="max-w-sm p-6 bg-gray-800 dark:bg-gray-800 rounded-lg shadow content-center">

            <div class="flex justify-center rounded-full border-2 border-gray-300 content-center mx-auto h-24 w-24 mb-4">
                <img class="w-24 h-24  rounded-full scale-75" src={props.img} alt="Project Image" />
            </div>

            <h3 class="text-xl font-bold mb-2 text-white">
                {props.title}

            </h3>

            <p class="text-gray-500 dark:text-gray-400">
                {props.description}
            </p>
                <a href={"https://".concat(props.link)} target="_blank"  >
                                <button class="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                    View Project    
                                </button>
                </a>

        </div>
    )
}
