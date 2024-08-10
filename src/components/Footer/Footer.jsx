import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterLinks = [
    {
        title : "About",
        link: "/#about",
    },
    {
        title : "Contact Us",
        link: "/#contact",
    },
    {
        title : "Our Services",
        link: "/#services",
    },
    {
        title : "Privacy Policy",
        link: "/#about",
    },
];

const HelpLinks =[
    {
        title : "Customer Support",
        link: "/#support",
    },
    {
        title : "Company Details",
        link: "/#about",
    },
    {
        title : "Terms & Conditions",
        link: "/#terms",
    },
    {
        title : "Privacy Policy",
        link: "/#policy",
    },
];

const ResourcesLink =[
    {
        title : "Photo Gallery",
        link : "/#gallery",
    },
    {
        title : "BLog",
        link : "/#blog",
    },
    {
        title : "Visit Us",
        link : "/#visit",
    },
];

const Footer = () => {
  return (
    <>
    <div className='bg-black/95 text-white'>
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
                {/* company details   */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        BG Technology
                    </h1>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse, illo veniam praesentium nesciunt natus facere aperiam ducimus ullam, atque voluptate? Debitis, corrupti magnam. Deleniti ad aliquid repudiandae provident. Iste.{""}
                    </p>
                    <br/>


                </div>
                {/* link section  */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    {/* first col  */}
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Company</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((link) => (
                                    <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400'>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* second col  */}
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Help</h1>
                            <ul className='space-y-3'>
                                {HelpLinks.map((link) => (
                                    <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400'>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Third col  */}
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Resources</h1>
                            <ul className='space-y-3'>
                                {ResourcesLink.map((link) => (
                                    <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400'>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>

                             {/* social handle  */}
                    <div className='flex text-center gap-4 mt-6'>
                        <a href="#">
                            <FaInstagram className='text-2xl hover:text-primary duration-300'/>
                        </a>
                        <a href="#">
                        <FaFacebook className='text-2xl hover:text-primary duration-300'/>
                        </a>
                        <a href="#">
                        <FaLinkedin className='text-2xl hover:text-primary duration-300'/>
                        </a>
                        <a href="#">
                        <FaTwitter className='text-2xl hover:text-primary duration-300'/>
                        </a>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Footer
