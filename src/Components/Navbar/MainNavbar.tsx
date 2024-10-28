"use client";

import React, { useEffect, useState } from 'react'
import { MdLocationPin, MdLocalPhone } from "react-icons/md";
import Navbar from './Navbar';

const MainNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <div className='hidden md:flex justify-between items-center m-auto pt-[30px] pb-[40px] mx-10'>
                <div className='flex text-3xl font-extrabold'>
                    <span className='text-primary'>
                        GA
                    </span>
                    <span className='text-secondaryblack'>
                        MANAGEMENT
                    </span>
                </div>
                <div className='flex items-center gap-2 text-secondarytextgray'>
                    <span className='rounded-full border border-bordergray p-3'>
                        <MdLocalPhone className="text-primarytext" size={25} />
                    </span>
                    <div className='flex flex-col'>
                        <a href="" className='hover:text-primarytext'>1-800-1234-567</a>
                        <a href="" className='hover:text-primarytext'>1-800-8763-765</a>
                    </div>
                </div>
                <div className='hidden lg:flex items-center gap-2  text-secondarytextgray'>
                    <span className='rounded-full border border-bordergray p-3'>
                        <MdLocationPin className="text-primarytext" size={25} />
                    </span>
                    <a href="" className='hover:text-primarytext'>
                        <div>
                            2130 Fulton Street
                        </div>
                        <div>
                            San Diego, CA 94117-1080
                        </div>
                    </a>
                </div>
                <div>
                    <button
                        className='border-[2.5px] border-primary w-[210px] p-3 text-secondaryblack font-semibold hover:text-secondarytextwhite hover:bg-primary transition-all duration-300 ease-in-out'
                    >
                        Request a call
                    </button>
                </div>
            </div>
            <Navbar isScrolled={isScrolled}/>
        </div>
    )
}

export default MainNavbar