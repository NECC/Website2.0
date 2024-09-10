"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

    return (
        <>
            <div className='sticky h-20 border-b border-[#008CCA42] bg-black/75 w-full top-0 inset-x-0 z-10 shadow-sm backdrop-blur-lg transition-all select-none font-sans'>
                <div className='flex justify-between items-center sm:mx-16 mx-2'>
                    <div className='flex items-center'>
                        <Image 
                            src='/neccSticker.png' 
                            alt='Logo NECC' 
                            width={100} 
                            height={100} 
                            className='w-20 h-20 cursor-pointer' 
                        />
                        <div className='hidden sm:flex items-center'>
                            <Link href="/">
                                <h3 className="text-white text-xs sm:text-sm font-semibold mr-4 lg:mx-5 relative group">
                                    Sobre
                                    <span className="block h-[3px] w-full bg-[#008CCA] absolute left-0 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                                </h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-white text-xs sm:text-sm font-semibold mr-4 lg:mx-5 relative group">
                                    Loja
                                    <span className="block h-[3px] w-full bg-[#008CCA] absolute left-0 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                                </h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-white text-xs sm:text-sm font-semibold mr-4 lg:mx-5 relative group">
                                    Equipa
                                    <span className="block h-[3px] w-full bg-[#008CCA] absolute left-0 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                                </h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-white text-xs sm:text-sm font-semibold lg:mx-5 relative group">
                                    Parcerias
                                    <span className="block h-[3px] w-full bg-[#008CCA] absolute left-0 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className='sm:hidden flex items-center'>
                        <button onClick={toggleMenu} className='focus:outline-none mr-6'>
                            <div className={`relative ${isMenuOpened ? 'open' : ''}`}>
                                <div className={`mb-2 h-[2px] w-8 rounded bg-white transition-transform duration-200 ${isMenuOpened ? 'translate-y-3 rotate-45 transform' : ''}`}></div>
                                <div className={`mb-2 h-[2px] w-8 rounded bg-white transition-transform duration-200 ${isMenuOpened ? 'opacity-0' : 'opacity-100'}`}></div>
                                <div className={`h-[2px] w-8 rounded bg-white transition-transform duration-200 ${isMenuOpened ? '-translate-y-2 -rotate-45 transform' : ''}`}></div>
                            </div>
                        </button>
                    </div>
                    <div className='hidden sm:flex items-center'>
                        <Link href="https://github.com/NECC" target="_blank">
                            <Image 
                                src='/github.svg'
                                alt='GitHub'
                                width={24}
                                height={24}
                                className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]"
                            />
                        </Link>
                        <Link href="https://necchange.necc.di.uminho.pt/" target="_blank">
                            <button className="text-white bg-gradient-to-r from-[#008CCA] to-[#009bee] drop-shadow-[0_0_2px_#009bee] hover:bg-gradient-to-r hover:from-white hover:to-white hover:drop-shadow-[0_0_3px_white] transition-all duration-500 ease-in-out hover:text-[#008cca] text-sm sm:text-base font-semibold py-0.5 px-4 rounded-full sm:ml-4 ml-3 mr-5 lg:ml-6 lg:mr-5 tracking-[0.4px]">
                                NECChange
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`fixed font-sans top-20 inset-0 bg-black/75 z-20 transform ${isMenuOpened ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out sm:hidden flex flex-col justify-between backdrop-blur-lg`}>
                <div className='flex-1 divide-y-2 divide-[#008CCA42] text-lg font-bold px-6'>
                    <Link href="/" onClick={toggleMenu} className='block py-4'>
                        <h3 className="text-white text-xl font-semibold relative group">
                            <span className="group-hover:text-[#008CCA] transition-colors duration-200">Sobre</span>
                        </h3>
                    </Link>
                    <Link href="/" onClick={toggleMenu} className='block py-4'>
                        <h3 className="text-white text-xl font-semibold relative group">
                            <span className="group-hover:text-[#008CCA] transition-colors duration-200">Loja</span>
                        </h3>
                    </Link>
                    <Link href="/" onClick={toggleMenu} className='block py-4'>
                        <h3 className="text-white text-xl font-semibold relative group">
                            <span className="group-hover:text-[#008CCA] transition-colors duration-200">Equipa</span>
                        </h3>
                    </Link>
                    <Link href="/" onClick={toggleMenu} className='block py-4'>
                        <h3 className="text-white text-xl font-semibold relative group">
                            <span className="group-hover:text-[#008CCA] transition-colors duration-200">Parcerias</span>
                        </h3>
                    </Link>
                </div>
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <Link href="https://github.com/NECC" target="_blank">
                        <Image 
                            src='/github.svg'
                            alt='GitHub'
                            width={24}
                            height={24}
                            className="w-7 h-7 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]"
                        />
                    </Link>
                    <Link href="https://necchange.necc.di.uminho.pt/" target="_blank">
                        <button className="text-white bg-gradient-to-r from-[#008CCA] to-[#009bee] drop-shadow-[0_0_2px_#009bee] hover:bg-gradient-to-r hover:from-white hover:to-white hover:drop-shadow-[0_0_3px_white] transition-all duration-500 ease-in-out hover:text-[#008cca] text-lg font-semibold py-0.5 px-4 rounded-full tracking-[0.4px]">
                            NECChange
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;