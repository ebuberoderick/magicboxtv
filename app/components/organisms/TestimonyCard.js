import React from 'react'
import { FaStar } from "react-icons/fa";


function TestimonyCard() {
    return (
        <div className="bg-gray-950 gap-2 items-start rounded-lg p-7 space-y-2 border border-gray-800">
            <div className='flex items-center justify-between'>
                <div>
                    <div className='font-semibold text-lg text-white'>Aniket Roy</div>
                    <div className='text-gray-400'>From India</div>
                </div>
                <div>
                    <div className='flex border border-gray-800 bg-gray-700/30 px-3 rounded-full items-center text-gray-400/50 gap-2'>
                        <div className="flex gap-1 text-sm">
                            <FaStar
                                className='text-pink'
                            />
                            <FaStar
                                className='text-pink'
                            />
                            <FaStar
                                className='text-pink'
                            />
                            <FaStar
                                className='text-pink'
                            />
                            <FaStar
                                className=''
                            />
                        </div>
                        <span className='text-white'>4</span>
                    </div>
                </div>
            </div>
            <div className='text-gray-400 pb-4'>
                This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn&apos;t watch it.
            </div>
        </div>
    )
}

export default TestimonyCard