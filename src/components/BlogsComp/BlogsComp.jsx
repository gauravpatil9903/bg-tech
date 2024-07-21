import React from 'react';
import BlogCard from './BlogCard';
import Img1 from '../../assets/blog/blog1.jpg';
import Img2 from '../../assets/blog/blog2.webp';
import Img3 from '../../assets/blog/blog3.jpg';

const BlogsData = [
    {
        id : 1,
        image : Img1,
        title : "Project 1",
        description : "lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore.",
        onwer: "Aniket ",
        date : "September 11, 2024",
        aosDelay  : "0",
    },
    {
        id : 2,
        image : Img2,
        title : "Project 1",
        description : "lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore.",
        onwer: "Aniket ",
        date : "September 11, 2024",
        aosDelay  : "300",
    },
    {
        id : 3,
        image : Img3,
        title : "Project 1",
        description : "lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore.",
        onwer: "Aniket ",
        date : "September 11, 2024",
        aosDelay  : "500",
    },
];

const BlogsComp = () => {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14'>
        <div className='container'>
            <h1 data-aos = "fade-up" className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold'>
                Our Projects
            </h1>
            {/* blogs card  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                BlogsData.map((blog) => (
                    <BlogCard  key={blog.id}  {...blog}/>
                ))
            }
            </div>
            <div data-aos = "fade-up" data-aos-offset = "0" className='text-center'>
                <button className='btn-primary'>View All Projects</button>
            </div>
            
        </div>
    </div>
      
    </>
  )
}

export default BlogsComp;
