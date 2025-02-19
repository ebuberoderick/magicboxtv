"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa6";
import AppNavLink from '../organisms/AppNavLink';
import NavBtn from '../organisms/NavBtn';

function NavBar({ active }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='fixed z-50 backdrop-blur-md w-screen top-0 right-0'>
            <div className='max-w-7xl justify-between p-4 items-center mx-auto flex'>
                <div className='px-4'>
                    <Link href="/"><Image src="/image/Magicboxlogo.png" alt='LOGO' width={30} height={30} /></Link>
                </div>
                <div className={`${isOpen ? '' : 'hidden md:block'} fixed bg-black px-6 md:px-0 backdrop-blur-lg bg-opacity-15 md:relative top-0 right-0 w-screen md:w-auto h-screen md:h-auto md:p-0 flex items-center justify-center`}>
                    <div className='bg-gray-950 w-full border-[2px] md:flex md:items-center rounded-lg border-gray-700 px-1 py-1'>
                        <AppNavLink active={active} text="home" />
                        <AppNavLink active={active} text="movies" />
                        <AppNavLink active={active} text="series" />
                        <NavBtn />
                    </div>
                </div>
                <div className='text-white hidden text-2xl md:flex items-center'>
                    <div className='p-3 cursor-pointer'><FiSearch /></div>
                    <div className='p-3 cursor-pointer'><FaRegBell /></div>
                </div>
                <div onClick={() => setIsOpen(true)} className='text-white md:hidden text-2xl flex items-center'>
                    <div className='p-2 cursor-pointer border-2 border-gray-800 bg-gray-600/25 rounded-lg '><HiOutlineMenuAlt3 /></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar