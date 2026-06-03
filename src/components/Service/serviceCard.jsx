import React from 'react'

export default function serviceCard(props) {
    return (
           <div class="max-w-sm p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow content-center">

                    <img
                        src={props.img}
                        alt="coding"
                        class="w-1/2 h-1/2 mb-7 mx-auto"
                    />

                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {props.title}

                    </h3>

                    <p class="text-gray-500 dark:text-gray-400">
                      {props.description}
                    </p>

                </div>
    )
}
