import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[black] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Greetings! I'm Kabeer Ahmad, delighted to make your acquaintance. Feel free to explore my world.</p>
          </div>
          <div>
            <p>I am deeply passionate about crafting exceptional software solutions that enhance the quality of life for those in my sphere. My expertise lies in developing software for a diverse clientele, spanning from individuals and small enterprises to sizable corporate entities. What possibilities might you envision with a software artisan at your service?</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
