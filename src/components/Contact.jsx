import React, { useState } from 'react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitFormToServer();

      setNotification({
        type: 'success',
        message: 'Form submitted successfully!',
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);

      setNotification({
        type: 'error',
        message: 'Form submission failed. Please try again later.',
      });
    }
  };

  const submitFormToServer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div name='contact' className='w-full h-screen bg-[black] flex justify-center items-center p-4'>
      {notification && (
        <div
          className={`${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } fixed top-0 left-0 right-0 p-4 text-white text-center`}
        >
          <p>{notification.message}</p>
          <button className="text-white ml-2" onClick={closeNotification}>
            Close
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-9'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Get Me Email/Gmail</p>
        </div>
        <input className='bg-[White] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[white]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[white] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">
          Dispatch form
        </button>
      </form>
    </div>
  );
};
