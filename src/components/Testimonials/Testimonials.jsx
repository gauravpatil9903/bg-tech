import React from 'react';
import Slider from "react-slick";

const testimonialData =[ 
  {
    id: 1,
    name : "Aniket Barure",
    description : "CEO & Director of BG Technology",
    text : "lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore.",
    img : "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name : "Aniket Barure",
    description : "CEO & Director of BG Technology",
    text : "lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore.",
    img : "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name : "Aniket Barure",
    description : "CEO & Director of BG Technology",
    text : "lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore.",
    img : "https://picsum.photos/101/101",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase : "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
    <div className='py-10 dark:text-white'>
      <div data-aos = "fade-up" className='container'>
        {/* testimonial section  */}
        <div className='grid grid-cols-1 max-w-screen-xl mx-auto gap-6'>
          <Slider {...settings}>
            {testimonialData.map(({id, name,description, text, img}) => (
              <div key = {id} className='my-6'>
                <div className='flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative'>
                <img src={img} alt="" className='block mx-auto  h-[300px] w-full sm:w-[200px] object-cover rounded-xl'/>
                <div className='space-y-4'>
                  <p className='text-gray-500 text-black/80 dark:text-white/80 xl:pr-40'>{text}</p>
                  <div>
                  <h1 className='text-xl font-bold'>{name}</h1>
                  <p className='text-gray-500 text-black/80 dark:text-white/80 xl:pr-40 text-sm  '>{description}</p>
                  </div>
                  
                </div>
                <p className='text-black/10 text-[12rem] font-serif absolute  bottom-0 right-0 '>,,</p>
                </div>
                
                
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Testimonials;
