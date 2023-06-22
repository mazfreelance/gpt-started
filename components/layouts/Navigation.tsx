import Link from 'next/link'
import React, { useState } from 'react'
import { useUser } from "@auth0/nextjs-auth0/client";
import Head from 'next/head';
import { SettingModal } from '../SettingModal';

function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    const { user } = useUser()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Head>
                <title>AI GPT</title>
                <meta name="description" content="by mohdazmin.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex items-center justify-between border-b border-gray-400 py-8 px-8 bg-slate-800 text-white">
                <a href="/">
                    {/* <img src="https://designbygio.it/images/logo.png" alt="logo" /> */}
                    <h1 className='text-2xl'>Ai - GPT</h1>
                    <sub className='text-xs'>powered by GPT-3</sub>
                </a>
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={ () => setIsNavOpen((prev) => !prev) }
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        {/* mobile view */}
                        <div className={ isNavOpen ? "showMenuNav" : "hideMenuNav" }>
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={ () => setIsNavOpen(false) }
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[50px] text-black">
                                <li className="border-b border-gray-400 my-2 uppercase">
                                    <Link href="/darkjoke">Dark Jokes</Link>
                                </li>
                                <li className={!user ? 'hidden': 'border-b border-gray-400 my-2 uppercase'}>
                                    <Link href="#" onClick={handleModalOpen}>Settings</Link>
                                </li>
                                <li className="border-b border-gray-400 my-2 uppercase">
                                    {!! user ? (
                                        <Link href="/api/auth/logout">Logout</Link>
                                    ) : (
                                        <Link href="/api/auth/login">Login</Link>
                                    ) !!}
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                    {/* desktop view */}
                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                        <li>
                            <Link href="/posts">Blog Post</Link>
                        </li>
                        <li>
                            <Link href="/darkjoke">Dark Jokes</Link>
                        </li>
                        <li className={!user ? 'hidden': ''}>
                            <Link href="#" onClick={handleModalOpen}>Settings</Link>
                        </li>
                        <li>
                            {!! user ? (
                                <Link href="/api/auth/logout">Logout</Link>
                            ) : (
                                <Link href="/api/auth/login">Login</Link>
                            ) !!}
                        </li>
                    </ul>
                </nav>
                <SettingModal isOpen={isModalOpen} onClose={handleModalClose}/>
                <style>{ `
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: white;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
                `}</style>
        </div>
    </>
    )
}

export default Navigation