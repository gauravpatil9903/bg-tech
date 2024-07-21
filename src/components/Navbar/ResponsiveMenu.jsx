import React from 'react';
import {FaUserCircle} from 'react-icons/fa';
import { MenuLinks } from './Navbar';
// import BiExpandHorizontal from './menu'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${
        showMenu ? "left-0" : "left-[-100%]"
    } fixed bottom-0 top-0 w-[75%] transition-all duration-300 shadow-md pt-16 px-8 bg-white dark:bg-gray-900 z-50 flex flex-col justify-between pb-4`} >

     <div className='card'>

        <div className='flex items-center justify-start gap-3'>
            <FaUserCircle  size={50}/>

       <div>

       
        <h1>User</h1>
        <h1 className='text-sm text-slate-500'>Bg Technology</h1>
     </div>
    </div>
    {/* Menu Section */}
     <nav className='mt-12'>
     <ul className='space-y-4 text-xl'>
         {MenuLinks.map(({ id, name, link }) => {
             return(
                 <li key = {id}> 
                 <a href={link} className='mb-5 inline-block'>
                    {" "}
                    {name}</a>
                 </li>
             );
         })}
     </ul>
     </nav>

      </div>
      {/* footer section */}
      <div>
         <h4>BG Technology</h4>
      </div>
    </div>
  
   
  );
};

export default ResponsiveMenu;
