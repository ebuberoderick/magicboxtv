"use client"
import React, { useEffect, useState } from 'react'
import AppButton from './AppButton';
import Link from 'next/link';
import ls from "localstorage-slim";

function NavBtn() {

    const [str, setStr] = useState("")

    const msisdn = ls.get("magicboxtv", { decrypt: true })

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    useEffect(() => {
        setStr(generateRandomString(8))
    }, [])

    return (
        <div>
            {
                (msisdn === undefined || msisdn === null) ? (
                    <Link target='_blank' href={`http://ng-app.com/CloudIntegrated/magicbox-daily-en-doi-web?origin_banner=1&trfsrc=Organic&trxId=${str}`}>
                        <AppButton>Subscribe</AppButton>
                    </Link>
                ) : <div className='h-full py-3 flex items-center'><div className={`bg-white py-1 capitalize text-xs rounded-lg px-6`}>{msisdn}</div></div>
            }
        </div>
    )
}

export default NavBtn