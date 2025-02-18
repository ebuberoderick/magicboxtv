import React from 'react'
import AppButton from './AppButton'
import Link from 'next/link'
import { IoPlay } from "react-icons/io5";
import Image from 'next/image'

function GenresBanner({ movie }) {

    return (
        <div>
            {movie?.length > 0 && (
                <div className="max-w-7xl px-3 mx-auto grid md:grid-cols-2 items-center md:gap-8">
                    <div className="bg-gray-950 md:order-1">
                        <Image
                            src={movie[0]?.img_poster ?? ""}
                            className="w-full"
                            alt={movie[0]?.title ?? ""}
                            width={200}
                            height={400}
                        />
                    </div>
                    <div className="space-y-2 sm:space-y-6 pt-5 pb-16">
                        <h4 className="text-xl sm:text-4xl uppercase text-white textborder max-w-sm">
                            {movie[0]?.title}
                        </h4>
                        <p className=" sm:text-[20px] text-white">
                            {movie[0]?.description}
                        </p>
                        <div className="flex gap-4">
                            <AppButton>
                                <Link href={`/movies/${movie[0]?.id}`}>
                                    <div className="flex items-center gap-2">
                                        <IoPlay />
                                        Play Now
                                    </div>
                                </Link>
                            </AppButton>
                            <AppButton white>
                                <Link href={`/movies/${movie[0]?.id}`}>
                                    <div className="flex items-center gap-2">
                                        <IoPlay />
                                        More Info
                                    </div>
                                </Link>
                            </AppButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GenresBanner