import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="py-4 px-7 flex justify-between
        items-center sticky top-0 z-50 w-full border-b-[0.3px]
        border-[#babaff] bg-black">
            <div className="flex lg:gap-14 gap-4 items-center">
                <img
                    className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300"
                    src="public/images/logo.png"
                    alt="logo-img"
                />
            </div>

            <div className="hidden md:flex gap-5
            items-center">
                <button className="h-10 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-white text-lg hover:opacity-80 transition-all duration-300 shadow-md">
                    ابدء اللعب
                </button>
                
            </div>
            <nav className='hidden md:flex lg:gap-8 gap-4'>
                <a href="chaectur.jsx" className='relative py-1 text-lg
                hover:text-purple-300 transition-colors
                duration-300 after:content-[""]
                after:absolute after:w-0 after:h-0.5
                after:bg-purple-400 after:left-0
                after:bottom-0 after:transition-all hover:after:w-full
                text-nowrap'>
                    <i className="bx bx-user-circle"></i>
                    Aatars
                </a>
                <a href="#" className='relative py-1 text-lg
                hover:text-purple-300 transition-colors
                duration-300 after:content-[""]
                after:absolute after:w-0 after:h-0.5
                after:bg-purple-400 after:left-0
                after:bottom-0 after:transition-all hover:after:w-full
                text-nowrap'>
                    <i className="bx bx-chevrons-up"></i>
                  Items
                </a>
                <a href="#" className='relative py-1 text-lg
                hover:text-purple-300 transition-colors
                duration-300 after:content-[""]
                after:absolute after:w-0 after:h-0.5
                after:bg-purple-400 after:left-0
                after:bottom-0 after:transition-all hover:after:w-full
                text-nowrap'>
                    <i className="bx bx-store"></i>
                    Shop
                </a>
            </nav>


            <button
                className="text-3xl p-2 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <i className="bx bx-menu"></i>
            </button>

            <div
                className={`
                    fixed top-14 right-0 left-0
                    bg-black/60 backdrop-blur-md
                    p-5 md:hidden z-50
                    transition-all duration-500
                    ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}
                `}
            >
                <nav className='flex flex-col gap-4 items-center'>
                    <a href="<Charectur/>" className='relative py-1 text-lg
                    hover:text-purple-300 transition-colors
                    duration-300 after:content-[""]
                    after:absolute after:w-0 after:h-0.5
                    after:bg-purple-400 after:left-0
                    after:bottom-0 after:transition-all hover:after:w-full
                    text-nowrap'>
                        <i className="bx bx-user-circle"></i>
                        Characters
                    </a>
                    <a href="<Arena/>" className='relative py-1 text-lg
                    hover:text-purple-300 transition-colors
                    duration-300 after:content-[""]
                    after:absolute after:w-0 after:h-0.5
                    after:bg-purple-400 after:left-0
                    after:bottom-0 after:transition-all hover:after:w-full
                    text-nowrap'>
                        <i className="bx bx-chevrons-up"></i>
                        Echo Player
                    </a>
                    <a href="#" className='relative py-1 text-lg
                    hover:text-purple-300 transition-colors
                    duration-300 after:content-[""]
                    after:absolute after:w-0 after:h-0.5
                    after:bg-purple-400 after:left-0
                    after:bottom-0 after:transition-all hover:after:w-full
                    text-nowrap'>
                        <i className="bx bx-store"></i>
                        shop
                    </a>
                </nav>

            <div className="flex flex-col gap-3 w-full
           mt-4 ">
            <button className="bg-purple-700 py-2
                rounded">
                    play now
                </button>
                <button className="bg-gray-500 py-2
                rounded">
                    NFT Store
                </button>
            </div>
            </div>
        </header>
    );
};

export default Header;