import React from 'react'
import { IoArrowForward } from "react-icons/io5";

function GenresCard({ badge }) {
    return (
        <div className='bg-gray-800/20 space-y-4 rounded-xl overflow-hidden relative border border-gray-800'>
            <div className='grid grid-cols-2 top-0 left-0 w-full p-6 absolute gap-2'>
                <div className='bg-gray-600 rounded-lg h-32'></div>
                <div className='bg-gray-600 rounded-lg h-32'></div>
                <div className='bg-gray-600 rounded-lg h-32'></div>
                <div className='bg-gray-600 rounded-lg h-32'></div>
            </div>
            <div className='h-80 bg-gradient-to-t flex items-end relative z-20 from-black from-[20%] to-[#00000000]'>
                <div className='text-white items-center flex w-full p-7'>
                    <div className='flex-grow space-y-3'>
                        {badge && <div>
                            <span className='font-semibold bg-blue py-2 text-sm px-3 text-white rounded-lg'>Top 10 In</span>
                        </div>}
                        <div className='font-semibold'>Comedy</div>
                    </div>
                    <div className='text-xl'><IoArrowForward /></div>
                </div>
            </div>
        </div>
    )
}

export default GenresCard