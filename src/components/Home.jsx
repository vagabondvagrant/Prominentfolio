import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const Home = () => {
  return (
    
    <div name="home" className=' bg-[black] text-white'>
      <div className='container mx-auto px-8 py-20'>
      <h1 className='text-4xl font-bold'>
  Hi,{' '}
  <span className='text-pink-600 inline-block animate-fade-in-2s'>I'm</span>{' '}
  <span className='text-pink-600 inline-block animate-fade-in-3s'>Kabeer</span>
</h1>

<p className='py-4 max-w-prose text-lg text-white animate-fade-in-2s'>
  I'm a Front End Web developer interested in creating responsive and user-friendly designs.
  I'm actively seeking new opportunities
</p>
 


        <button className='bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full inline-flex items-center'>
          See My Work
          <span className='ml-2'>
            <HiArrowNarrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
