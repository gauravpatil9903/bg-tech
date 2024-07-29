import React from 'react';
import Logo from '../../assets/website/bg1.png';
import DarkMode from './DarkMode';
import {HiMenuAlt3, HiMenuAlt1} from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
// import { Link } from "react-router-dom";
// import { BiExpandHorizontal} from 'react-icons/bi';

export const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#Home",
    },
    {
        id: 2,
        name: "About Us",
        link: "/about",
    },
    {
        id: 3,
        name: "Career",
        link: "/#Career",
    },
    {
        id: 4,
        name: "Services",
        link: "/#Services",
    },
]

const navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  return (
    <>
    <nav className='bg-navbarLight text-white dark:bg-black dark:text-white duration-300 '>
        <div className='container py-3 md:py-2'>
            <div className='flex justify-between items-center'>
                {/* navbar logo section */}  
                <div>
               
                <a href="#" className='flex items-center gap-2 '>
                <img src={Logo} alt="Logo" className='w-9' />
                <span className='text-2xl sm:text-3xl font-semibold'>BG Technology</span>
                
                </a>
                   
                   
                </div>
                {/* navbar links section */}
                <div className='hidden md:flex'>
                    <ul className='flex items-center gap-8'>
                        {MenuLinks.map(({id, name,link}) => {
                            return(
                                <li key = {id}
                                className='curser-pointer py-4'>
                                    <a 
                                    href="#" 
                                    className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300'
                                    >{name}</a>
                                    
                                     </li>
                            );
                        })}
                        <button className='btn-primary'>Get in touch</button>

                        <DarkMode/>
                    </ul>
                </div>

                {/* Mobile view */}
                <div className='flex items-center fap-4 md:hidden '>
                    <DarkMode/>

                    { showMenu ? (
                         <HiMenuAlt1 onClick={toggleMenu}    className='cursor-pointer text-2xl'/>

                    ) : (
                        <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer text-2xl'/>
                    )

                    }
                   
                   
                </div>
            </div>
        </div>
        { /* Mobile Menu */ }
        <ResponsiveMenu showMenu = {showMenu}/>
    </nav>
      
    </>
  )
}

export default navbar;
