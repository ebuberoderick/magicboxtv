import React, { useState } from 'react'
import { IoArrowDown, IoTime } from "react-icons/io5";

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
            <div className={`${showEpisodes ? "block" : "hidden"} space-y-6 sm:space-y-0 md:space-y-6 lg:space-y-0 lg:*:border-t lg:last:border-b sm:*:border-t sm:last:border-b md:*:border-t-0 md:last:border-b-0 last:border-gray-800 *:border-gray-800`}>
                {
                    Array.from(Array(9).keys()).map((index) => (
                        <div key={index} className="sm:flex md:block lg:flex space-y-4 sm:space-y-0 md:space-y-4 lg:space-y-0 items-center rounded-2xl sm:rounded-none md:rounded-2xl lg:rounded-none py-8 bg-gray-800/40 px-6 sm:px-0 md:px-5 lg:px-0 md:bg-gray-800/40 sm:bg-[#00000000] lg:bg-[#00000000]  justify-between gap-4">
                            <div className='flex w-full sm:w-auto md:w-full lg:w-auto items-center gap-5'>
                                <div className='sm:order-1 md:order-none lg:order-1 w-full flex-grow'>
                                    <div className='sm:w-32 md:w-auto lg:w-44 w-full h-28 bg-gray-700 rounded-lg'></div>
                                </div>
                                <div className='text-gray-600 text-2xl font-semibold'>01</div>
                            </div>
                            <div className='flex-grow space-y-3'>
                                <div className='sm:flex md:block lg:flex items-center justify-between'>
                                    <div className='text-white font-semibold text-lg'>Chapter Three: Holly, Jolly</div>
                                    <div>
                                        <div className="text-gray-300/50 bg-gray-800/30 text-sm rounded-lg px-2 border border-gray-800 font-normal flex items-center justify-center gap-1"><IoTime /> 53 mins</div>
                                    </div>
                                </div>
                                <div className='text-gray-500 font-normal'>Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SeasonDetails