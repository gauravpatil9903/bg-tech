import React from 'react'
import { FaCameraRetro } from 'react-icons/fa';
import {GiNotebook} from 'react-icons/gi';
import {SlNote} from 'react-icons/sl';

const skillsData = [
    {
        name: "Robotics and Automation",
        icon : <FaCameraRetro className='text-4xl text-primary'/>,
        link :"#",
        description : "Our pioneering robotics solutions encompass a wide spectrum of applications, from industrial robots enhancing manufacturing efficiency to AI-driven automation systems optimizing logistics and supply chain operations. We integrate cutting-edge technologies that redefine industry standards.",
        aosDelay : "0",

    },
    {
        name: "Industrial Automation",
        icon : <FaCameraRetro className='text-4xl text-primary'/>,
        link :"#",
        description : "As leaders in industrial automation, we engineer bespoke solutions tailored to specific operational needs. Our expertise spans from PLC programming and SCADA systems to IoT integration, ensuring seamless connectivity and real-time data analytics for informed decision-making.",
        aosDelay : "0",

    },
    {
        name: "3D Printing and Design",
        icon : <FaCameraRetro className='text-4xl text-primary'/>,
        link :"#",
        description : "BG Technology leads the forefront in additive manufacturing with advanced 3D printing capabilities. We facilitate rapid prototyping, customized production parts, and intricate designs, empowering businesses to innovate faster and reduce time-to-market.",
        aosDelay : "0",

    },
    {
        name: "Laser Cutting and Engraving",
        icon : <FaCameraRetro className='text-4xl text-primary'/>,
        link :"#",
        description : "Our state-of-the-art laser cutting and engraving services deliver precision and versatility across diverse industries. From high-precision components to artistic designs, our laser technology enables unparalleled quality and customization options.",
        aosDelay : "0",

    },
    {
        name: "Web Development Services",
        icon : <FaCameraRetro className='text-4xl text-primary'/>,
        link :"#",
        description : "In addition to our hardware expertise, our digital services division specializes in creating scalable web solutions such as e-commerce platforms, CMS, and interactive applications. These innovations drive digital transformation and enhance online presence significantly.",
        aosDelay : "0",

    },
];
const Services = () => {
  return (
    <>
     <div className='bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center'>
        <div className='container'>
            {/* header section  */}
            <div className='pb-12 text-center space-y-3'>
                <h1 data-aos = "fade-up" className='text-3xl font-semibold text-violet-950 dark:text-primary'>Explore our Services</h1>
                <p data-aos = "fade-up" data-aos-delay = "300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas placeat officia maiores!

                </p>

            </div>
            {/* card section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {skillsData.map((skill) => (
                    <div data-aos = "fade-up" data-aos-delay = {skill.aosDelay} key={skill.name} className='card space-y-3 sm:space-y-4 p-4'>
                        <div>
                            {skill.icon}
                        </div>
                        <h1 className='text-lg font-semibold'>{skill.name}</h1>
                        <p className='text-gray-600 dark:text-gray-400'>{skill.description}</p>
                    </div>
                ))}
            </div>
            {/* button section  */}
            <div data-aos = "fade-up" data-aos-delay = "900" data-aos-offset = "0" className='text-center mt-4 sm:mt-8'>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Services
