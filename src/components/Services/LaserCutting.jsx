// RoboticsService.jsx
import React from 'react';
import Img1 from '../../assets/blog/blog1.jpg';
import Img2 from '../../assets/blog/blog2.webp';
import Img3 from '../../assets/blog/blog3.jpg';

const RoboticsService = () => {
  return (
    <div className='container p-2'>
        <div className='mb-2'>
        <h1 className='text-2xl font-semibold dark:text-white'>Robotics and Automation</h1>
        <p className='text-sm font-semibold dark:text-white'>Details about Robotics and Automation services...</p>
        </div>
      

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-stretch'>
  <img src={Img1} alt="" className='mb-0   rounded-xl' />
  <div className='flex flex-col md:mx-3'>
    <div className=''>
      <button className='btn-primary'>Order now</button>
      <div className='flex items-center mt-2 mx-1'>
        <p className='dark:text-white mr-2'>Price:</p>
        <h3 className='dark:text-white'>$12</h3>
      </div>
    </div>
    <div className="description-box-container mt-4 ">
      <label htmlFor="description" className="block text-lg font-medium text-gray-700 dark:text-white">Description:</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-black text-white"
        placeholder="Enter your description here..."
      ></textarea>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default RoboticsService;
