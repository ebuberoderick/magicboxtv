import React from 'react'
import AppButton from '../organisms/AppButton'
import { AiOutlinePlus } from "react-icons/ai";
import { TiThumbsUp } from "react-icons/ti";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoPlay } from "react-icons/io5";
import Image from 'next/image';

function AppBanner() {

    return (
        <>
            <div className='bannerImg hidden md:block'>
                <div className="h-screen flex items-center justify-center bannerGrident">
                    <div className='w-full pt-56'>
                        <div className='max-w-7xl space-y-3 mx-auto text-white text-center'>
                            <div className='font-normal text-[70px] lg:text-[100px] [font-family:Miltonian_Tattoo] textborder'>THE WISDOM OF ANCESTORS</div>
                            <div className='text-xl lg:text-3xl leading-[6px] font-bold'>The Wisdom of Ancestors</div>
                            <div className='text-sm px-3 lg:text-xl max-w-6xl mx-auto'>With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</div>
                            <div className='flex items-center justify-center gap-2'>
                                <AppButton>
                                    <div className='flex items-center gap-2'>
                                        <IoPlay />
                                        Play Now
                                    </div>
                                </AppButton>
                                <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
                                    <AiOutlinePlus />
                                </div>
                                <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
                                    <TiThumbsUp />
                                </div>
                                <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
                                    <RxSpeakerLoud />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden relative w-full overflow-hidden'>
                <div className='absolute h-full z-0'>
                    <div className="marquee h-1/4">
                        <div className='gap-3 flex h-full'>
                            {
                                ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""].map((_, i) => (
                                    <div key={i} className='w-40 h-full bg-gray-900/25 rounded-lg overflow-hidden'>
                                        {/* <Image src={`https://source.unsplash.com/random/200`} className='h-full w-full' alt='' loading='lazy' width={100} height={100} /> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="marquee2 h-1/4">
                        <div className='gap-3 flex h-full'>
                            {
                                ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""].map((_, i) => (
                                    <div key={i} className='w-40 h-full bg-gray-900/25 rounded-lg overflow-hidden'>
                                        {/* <Image src={`https://source.unsplash.com/random/200`} className='h-full w-full' alt='' loading='lazy' width={100} height={100} /> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="marquee4 h-1/4">
                        <div className='gap-3 flex h-full'>
                            {
                                ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""].map((_, i) => (
                                    <div key={i} className='w-40 h-full bg-gray-900/25 rounded-lg overflow-hidden'>
                                        {/* <Image src={`https://source.unsplash.com/random/200`} className='h-full w-full' alt='' loading='lazy' width={100} height={100} /> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="marquee3 h-1/4">
                        <div className='gap-3 flex h-full'>
                            {
                                ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""].map((_, i) => (
                                    <div key={i} className='w-40 h-full bg-gray-900/25 rounded-lg overflow-hidden'>
                                        {/* <Image src={`https://source.unsplash.com/random/200`} className='h-full w-full' alt='' loading='lazy' width={100} height={100} /> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="h-screen z-20 relative flex items-end justify-center bannerGrident">
                    <div className='p-5 flex flex-col gap-y-3'>
                        <div className='text-white text-2xl font-bold text-center'>The Best Streaming Experience</div>
                        <div className='text-gray-400 text-sm max-w-sm text-center'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.</div>
                        <div className='flex justify-center'>
                            <AppButton dir="tl">
                                <div className='flex text-sm items-center gap-2'>
                                    <IoPlay />
                                    Start Watching Now
                                </div>
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppBanner