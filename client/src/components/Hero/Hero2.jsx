import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='bg-gray-500 min-h-screen flex flex-col items-center py-8'>
      <div className='container max-w-4xl'>
        <h1 className='text-4xl font-bold text-center mb-8 mt-10 '>Contact Us</h1>
        
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Contact Form */}
          <form className='bg-white p-6 rounded-lg shadow-md w-full md:w-1/2'>
            <h2 className='text-2xl font-semibold mb-4'>Send Us a Message</h2>
            <label className='block mb-2'>
              <span className='text-gray-700'>Name</span>
              <input type='text' name='name' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </label>
            <label className='block mb-2'>
              <span className='text-gray-700'>Email</span>
              <input type='email' name='email' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </label>
            <label className='block mb-2'>
              <span className='text-gray-700'>Subject</span>
              <input type='text' name='subject' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </label>
            <label className='block mb-4'>
              <span className='text-gray-700'>Message</span>
              <textarea name='message' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' rows='4'></textarea>
            </label>
            <button type='submit' className='bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md'>
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className='md:w-1/2 md:ml-8 mt-8 md:mt-0'>
            <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
            <p className='text-gray-700 mb-2'>Email: <a href="aadeshsatpute375@gmail.com" className='text-blue-500 hover:underline'>aadeshsatpute375@gmail.com</a></p>
            <p className='text-gray-700 mb-2'>Phone: 7225012026</p>
            <p className='text-gray-700 mb-2'>Address: Betul(M.P) </p>
            <p className='text-gray-700 mb-2'>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Follow Us</h2>
          <div className='flex justify-center gap-4'>
            <a href="https://www.instagram.com/aadinath660/profilecard/?igsh=MTUyNDFnc3M5OG91Zg==" className='text-blue-600 hover:text-blue-800'>Instagram</a>
            <a href="https://x.com/satpute_aadesh?t=ueeiUdOVw5eoEsDfeonRzA&s=09" className='text-blue-400 hover:text-blue-600'>Twitter</a>
            <a href="https://www.linkedin.com/in/aadesh-satpute-894220224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-700 hover:text-blue-900'>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;