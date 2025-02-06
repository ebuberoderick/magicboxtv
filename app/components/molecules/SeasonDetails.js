import React, { useState } from 'react'
import { IoArrowDown } from "react-icons/io5";

function SeasonDetails() {

    const [showEpisodes, setShowEpisodes] = useState(false)

    return (
        <div className="bg-gray-950 text-sm rounded-lg p-3 lg:p-4 lg:px-8 space-y-2 border border-gray-800 font-semibold">
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-2'>
                    <div className='font-semibold lg:text-xl text-white'>Season 01</div>
                    <div className='font-medium text-sm lg:text-base text-gray-400'>9 Episodes</div>
                </div>
                <div
                    onClick={() => setShowEpisodes(!showEpisodes)}
                    className={`border cursor-pointer bg-gray-800/10 transition-all duration-300 border-gray-800 w-12 h-12 text-white text-2xl flex items-center justify-center rounded-full ${showEpisodes ? "rotate-180" : ""
                        }`}
                >
                    <IoArrowDown />
                </div>
            </div>
            <div className={`${showEpisodes ? "block" : "hidden"}`}>
                
            </div>
        </div>
    )
}

export default SeasonDetails