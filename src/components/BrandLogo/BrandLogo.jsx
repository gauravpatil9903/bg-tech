import React from 'react';
import Brand1 from '../../assets/brands/Ambitech.png';
import Brand2 from '../../assets/brands/pcmc_logo1.png';

const BrandLogo = () => {
  return (
    <>
      <div className='dark:bg-gray-900 dark:text-white'>
        <div className='container py-12 p-4'>
          <h1 data-aos="fade-up" className='text-center text-2xl font-semibold'>
            Powering next-gen companies
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className='flex flex-wrap items-center justify-center gap-3 py-6 md:px-32 grid grid-cols-2'
          >
            <img src={Brand1} alt="Ambitech" className='h-13 w-auto sm:h-15 sm:w-auto' />
            <img src={Brand2} alt="PCMC Logo" className='h-13 w-auto sm:h-15 sm:w-auto' />
            <img src={Brand2} alt="PCMC Logo" className='h-13 w-auto sm:h-15 sm:w-auto' />
            <img src={Brand1} alt="Ambitech" className='h-13 w-auto sm:h-15 sm:w-auto' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogo;
