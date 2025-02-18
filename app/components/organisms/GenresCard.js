"use client"
import React, { useEffect, useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { fetchGenresMovieAPI } from '../../../services/authService';
import Image from 'next/image';
import Link from 'next/link';

function GenresCard({ badge, genres }) {

    const [genresMovies, setGenresMovies] = useState([])

    const fetchgenresMovies = async () => {
        const { status, data } = await fetchGenresMovieAPI({ slug: genres?.slug })
        if (status) {
            setGenresMovies(data?.results);
        }
    }

    useEffect(() => {
        fetchgenresMovies()
    }, [])

    return (
        <Link href={`movies?genre=${genres?.slug.split("-").join("()")}`}>
            <div className='bg-gray-800/20 space-y-4 rounded-xl overflow-hidden relative border border-gray-800'>
                <div className='grid grid-cols-2 top-0 left-0 w-full p-6 absolute gap-2'>
                    {
                        genresMovies?.slice(0, 4).map((movie, index) => (
                            <div key={index} className='bg-gray-600 rounded-lg h-32'>
                                <Image src={movie?.img_poster} alt={movie?.title} className='object-cover h-full w-full' width={100} height={100} />
                            </div>
                        ))
                    }
                </div>
                <div className='h-80 bg-gradient-to-t flex items-end relative z-20 from-black from-[20%] to-[#00000000]'>
                    <div className='text-white items-center flex w-full p-7'>
                        <div className='flex-grow space-y-3'>
                            {badge && <div>
                                <span className='font-semibold bg-blue py-2 text-sm px-3 text-white rounded-lg'>Top 10 In</span>
                            </div>}
                            <div className='font-semibold'>{genres?.name}</div>
                        </div>
                        <div className='text-xl'><IoArrowForward /></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GenresCard