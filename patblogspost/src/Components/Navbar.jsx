import React, { useState, useContext, useEffect } from "react";
import { Navbar, Typography, IconButton, Collapse } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import MyContext from "../context/myContext";
import lightLogo from '../assets/Logo-dark.png';
import darkLogo from '../assets/Logo-light.png';
import Image from '../assets/Women_light_icon.png';
import SearchDialog from "./SearchDialog";
import ShareDialogBox from "./ShareDialogBox";

export default function Nav() {
    const [openNav, setOpenNav] = useState(false);

    const context = useContext(MyContext);
    const { mode, toggleMode } = context;

    const handleThemeChange = () => {
        toggleMode();
        document.body.setAttribute("data-theme", mode);
        localStorage.setItem("mode", mode);
    };

    // All NavList 
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="p-1 font-normal">
                <Link to={'/'} className="flex items-center" style={{ color: 'white' }}>
                    Home
                </Link>
            </li>
            <li className="p-1 font-normal">
                <Link to={'/allblogs'} className="flex items-center" style={{ color: 'white' }}>
                    Blogs
                </Link>
            </li>
            <li className="p-1 font-normal">
                <Link to={'/login'} className="flex items-center" style={{ color: 'white' }}>
                    Login
                </Link>
            </li>
            <li className="p-1 font-normal">
                <Link to={'/singup'} className="flex items-center" style={{ color: 'white' }}>
                    Sing up
                </Link>
            </li>
        </ul>
        
    );

    return (
        <>
            <Navbar
                className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
                style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

                {/* Desktop View  */}
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to="/" >
                        <Typography as="span" className="text-m font-bold" style={{ color: mode === 'dark' ? 'white' : 'white' }}>
                            <img src={mode === "light" ? darkLogo : lightLogo}  className=' w-20 h-20 ' />
                        </Typography>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/*Navlis */}
                        <div className="hidden lg:flex items-center justify-between w-full"> {navList}</div>

                        {/* Search Icon */}
                        <div>
                            {/* <AiOutlineSearch size={20} color="white" /> */}
                            <SearchDialog/>
                        </div>
                        
                        {/* Share Icon */}
                        <div className="hidden lg:block">
                            {/* <AiOutlineShareAlt size={20} color="white" /> */}
                            <ShareDialogBox/>
                        </div>
                        
                        {/* User Icon */}
                        <div>
                            <Link to="/dashboard">
                                <img src={Image} className="w-20" />
                            </Link>
                        </div>

                        {/* dark and light mode */}
                        <div>
                            <IconButton onClick={handleThemeChange} className="rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}>
                                {mode === 'light' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                        {/* d */}
                        <div className="flex lg:hidden items-center">
                            <IconButton className="h-10 w-10 text-inherit rounded-lg" ripple={false} onClick={() => setOpenNav(!openNav)}
                                style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}
                            >
                                {openNav ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>

                <Collapse open={openNav}>
                    {navList}
                </Collapse>
            </Navbar>
        </>
    );
}
