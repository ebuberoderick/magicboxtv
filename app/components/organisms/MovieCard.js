import React from 'react'

function MovieCard() {
    return (
        <div className='bg-gray-800/20 space-y-4 rounded-xl p-3 border border-gray-800'>
            <div className='h-72 bg-gray-700/20 rounded-lg'></div>
            <div className='bg-gray-950 p-1 text-xs rounded-full border border-gray-800 text-gray-500 text-center'>Released at <span className='text-white/55'>14 April 2023</span></div>
        </div>
    )
}

export default MovieCard