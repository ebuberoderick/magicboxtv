import Link from 'next/link'
import React from 'react'

function AppNavLink({ text, active }) {
    return (
        <div>
            <Link href={text === "home" ? "/" : `/${text}`}>
                <div className={`${active === text ? "bg-gray-900 text-white " : "text-gray-500 hover:text-white"} p-3 capitalize rounded-lg px-6`}>{text}</div>
            </Link>
        </div>
    )
}

export default AppNavLink