import Image from 'next/image'
import React from 'react'
import logo from "@/public/image/Magicboxlogo.png"
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa6";
import AppNavLink from '../organisms/AppNavLink';

function NavBar({active}) {
    return (
        <div className='fixed backdrop-blur-md w-screen top-0 right-0'>
            <div className='max-w-7xl justify-between p-4 items-center mx-auto flex'>
                <div className='px-4'>
                    <Link href="/"><Image src={logo} alt='LOGO' width={50} /></Link>
                </div>
                <div>
                    <div className='bg-gray-950 border-[3px] flex rounded-lg border-gray-700 px-1 py-1'>
                        <AppNavLink active={active} text="home" />
                        <AppNavLink active={active} text="movies" />
                        <AppNavLink active={active} text="series" />
                        <AppNavLink active={active} text="subscriptions" />
                    </div>
                </div>
                <div className='text-white hidden text-2xl lg:flex items-center'>
                    <div className='p-3 cursor-pointer'><FiSearch /></div>
                    <div className='p-3 cursor-pointer'><FaRegBell /></div>
                </div>
                <div className='text-white lg:hidden text-2xl flex items-center'>
                    <div className='p-3 cursor-pointer border-2 border-gray-800 bg-gray-600/25 rounded-lg '><HiOutlineMenuAlt3 /></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar