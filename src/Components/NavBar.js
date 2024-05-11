import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavBar() {
    const [nav, setNav] = useState(false);
    const List = [
        { id: 1, path: '/Home', text: "" },
        { id: 2, path: '/About', text: "About" },
        { id: 3, path: '/Contact', text: "Contact" },
        { id: 4, path: '/Portfolio', text: "Portfolio" },
        { id: 5, path: '/Skills', text: "Skills" }
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 bg-black px-5 text-white'>
            <div>
                <Link to="/Home" className='text-5xl ml-3 cursor-pointer capitalize hover:scale-90 text-white-500 duration-300'>
                    ABISHAKE
                </Link>
            </div>
            <ul className='hidden  md:flex'>
                {List.map(({ id, path, text }) => (
                    <li key={id} className='px-5 cursor-pointer capitalize font-medium hover:scale-105 text-gray-500 duration-200'>
                        <Link to={path}>{text}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
                {nav && (
                    <ul className='flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500  text-gray-500'>
                        {List.map(({ id, path, text }) => (
                            <li key={id} className='px-4 capitalize cursor-pointer py-6 text-4xl'>
                                <Link to={path}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default NavBar;
