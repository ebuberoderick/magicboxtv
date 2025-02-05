import Link from 'next/link'
import React from 'react'
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";


function Footer() {
    return (
        <div className='bg-black divide-y divide-gray-900 md:px-20 px-4'>
            <div className='grid grid-cols-2 gap-y-7 md:grid-cols-4 lg:grid-cols-6 py-12 md:py-20'>
                <div className='space-y-3'>
                    <h1 className='md:text-lg font-bold text-white'>Home</h1>
                    <div className='text-xs md:text-base space-y-2'>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Categories</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Devices</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Pricing</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>FAQ</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='md:text-lg font-bold text-white'>Movies</h1>
                    <div className='text-xs space-y-2'>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Gernes</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Trending</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>New Release</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Popular</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='md:text-lg font-bold text-white'>Shows</h1>
                    <div className='text-xs space-y-2'>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Gernes</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Trending</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>New Release</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Popular</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='md:text-lg font-bold text-white'>Support</h1>
                    <div className='text-xs space-y-2'>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Contact Us</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='md:text-lg font-bold text-white'>Subscription</h1>
                    <div className='text-xs space-y-2'>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Plans</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/' className='text-gray-500 hover:text-white'>
                                <div>Features</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-lg font-bold text-white'>Connect With Us</h1>
                    <div className='flex gap-2'>
                        <div>
                            <Link href='/'>
                                <div className='md:w-12 w-8 text-white md:text-2xl md:h-12 h-8 border-2 rounded-lg border-gray-800 bg-gray-600/25 flex items-center justify-center'>
                                    <MdFacebook />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/'>
                                <div className='md:w-12 w-8 text-white md:text-2xl md:h-12 h-8 border-2 rounded-lg border-gray-800 bg-gray-600/25 flex items-center justify-center'>
                                    <FaTwitter />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/'>
                                <div className='md:w-12 w-8 text-white md:text-2xl md:h-12 h-8 border-2 rounded-lg border-gray-800 bg-gray-600/25 flex items-center justify-center'>
                                    <RxLinkedinLogo />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' text-gray-500 divide-x-2 divide-gray-700 pt-5 pb-10'>
                <Link href='/' className='pr-4 hover:text-white'>Terms of Use</Link>
                <Link href='/' className='px-4 hover:text-white'>Privacy Policy</Link>
                <Link href='/' className='pl-4 hover:text-white'>Cookie Policy</Link>
            </div>
        </div>
    )
}

export default Footer