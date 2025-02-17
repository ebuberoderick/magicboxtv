"use client"
import React, { useEffect, useRef, useState } from 'react'
import AppButton from './AppButton';
import { IoPlay } from "react-icons/io5";

function VideoPlayer({ movieInfo }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!playing) {
                            setPlaying(true);
                            videoRef.current.play();
                        }
                    } else {
                        if (playing) {
                            setPlaying(false);
                            videoRef.current.pause();
                        }
                    }
                });
            },
            {
                threshold: 0.7, 
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [playing]);


    return (
        <div>
            <div className={`${!playing && "h-screen"} bg-gray-950 pt-24 pb-10 px-4`}>

                <div className={`${!playing && "hidden"}`}>
                    <video ref={videoRef} autoPlay={playing} onPause={() => setPlaying(false)} controls className="w-full h-full object-cover" src={movieInfo?.file_mp4}></video>
                </div>
                <div
                    className={`${playing && "hidden"} overflow-hidden h-full max-w-7xl mx-auto rounded-lg bg-cover bg-center `}
                    style={{ backgroundImage: `url(${movieInfo?.img_poster})` }}
                >
                    <div className="relative h-full p-6 flex items-end bg-gradient-to-t from-gray-950 to-[#00000000]">
                        <div className="p-5 space-y-5 w-full text-center">
                            <div className="space-y-1">
                                <div className="text-white font-bold text-3xl">
                                    {movieInfo?.title}
                                </div>
                                <div className="text-gray-400 max-w-3xl hidden md:block text-sm mx-auto">
                                    {movieInfo?.description}
                                </div>
                            </div>
                            <div className="md:flex items-center justify-center gap-3">
                                <div className="md:hidden">
                                    <AppButton dir={"tl"} onClick={() => { setPlaying(true), videoRef.current.play() }}>
                                        <div className="flex px-4 items-center gap-2">
                                            <IoPlay />
                                            Play Now
                                        </div>
                                    </AppButton>
                                </div>
                                <div className="hidden md:block">
                                    <AppButton onClick={() => { setPlaying(true), videoRef.current.play() }}>
                                        <div className="flex px-4 items-center gap-2">
                                            <IoPlay />
                                            Play Now
                                        </div>
                                    </AppButton>
                                </div>
                                {/* <div className="flex items-center justify-center gap-2">
          <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
            <AiOutlinePlus />
          </div>
          <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
            <TiThumbsUp />
          </div>
          <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
            <RxSpeakerLoud />
          </div>
        </div> */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default VideoPlayer