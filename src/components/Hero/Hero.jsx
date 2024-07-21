import React from 'react';
import HeroImg from '../../assets/website/herobg_2.webp';

const Hero = () => {
  return (
    <>
      <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
        <div className="container min-h-[480px]  flex mt-0 pb-9 ">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0 place-items-center'> {/* Responsive gap */}
            {/* image section  */}
            <div data-aos = "zoom-in" className='order-1 sm:order-2 relative mb-4'> {/* Adjust margin for mobile */}
              <img src={HeroImg} alt="" className='w-full rounded-2xl  sm:rounded-3xl ' /> {/* Ensure full width for image */}
            </div>
            {/* text content  */}
            <div className='space-y-5 order-2 sm:order-1 px-4 sm:px-0'> {/* Adjust padding for mobile */}
              <h1
              data-aos="fade-up" 
              className='text-4xl sm:text-5xl font-semibold'>
                Welcome to <span className='text-primary'>BG Technology</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay = "300" >
              In a rapidly advancing world driven by technology, the need to
                equip students with essential skills for the future has never
                been more critical. Recognizing the existing gap in technology
                education, Mr. Aniket Barure, the Founder and Director of BG
                Technologies PVT .LTD embarked on a transformative journey to
                address this challenge
              </p>
              <button data-aos="fade-up" data-aos-delay = "500" className='btn-primary duration-300 transition-all'>Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero;
