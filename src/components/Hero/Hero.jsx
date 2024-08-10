import React from 'react';
import HeroImg from '../../assets/website/herobg_2.webp';

// const heroTitleStyle = {
//   fontFamily: 'Playfair Display, serif', // For "Welcome to"
//   fontWeight: 'bold',
//   fontSize: '2.5rem', // Adjust as needed
// };

// const spanStyle = {
//   fontFamily: 'Poppins, sans-serif', // For "BG Technology"
//   color: '#615C3D', // Apply your primary color
//   fontWeight: 'bold', // Optional: make it bolder
//   fontSize: '3rem', // Optional: adjust the size
// };

const Hero = () => {
  return (
    <>
      <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
        <div className="container min-h-[480px]  flex mt-0 pb-12 ">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0 place-items-center'> {/* Responsive gap */}
            {/* image section  */}
            <div data-aos = "zoom-in" className='order-1 sm:order-2 relative mb-4'> {/* Adjust margin for mobile */}
              <img src={HeroImg} alt="" className='w-full rounded-2xl  sm:rounded-3xl ' /> {/* Ensure full width for image */}
            </div>
            {/* text content  */}
            <div className='space-y-5 order-2 sm:order-1 px-4 sm:px-0'> {/* Adjust padding for mobile */}
              {/* <h1
              data-aos="fade-up" 
              className='text-4xl sm:text-5xl font-semibold'>
                Welcome to <span className='text-primary font-poppins '>BG Technology</span>
              </h1> */}
             <h1 data-aos="fade-up" className='text-4xl sm:text-4xl font-semibold font-playfair'>
              Welcome to <span className='font-abri text-5xl sm:text-7xl text-primary'>BG Technology</span>
            </h1>
            {/* <div className='p-4'>
      <h1 className='text-4xl font-playfair mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-lora mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-merriweather mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-montserrat mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-raleway mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-cinzel mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-oswald mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-poppins mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-quicksand mb-4'>BG Technology</h1>
      <h1 className='text-4xl font-abril mb-4'>BG Technology</h1>
    </div> */}
              <p data-aos="fade-up" data-aos-delay = "300"  >
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
