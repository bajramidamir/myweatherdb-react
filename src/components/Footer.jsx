import React from 'react';

const Footer = () => {
  return (
    <>
        <footer className='bg-gray-200 dark:bg-stone-800  text-center lg:text-left fixed bottom-0 w-full'>
            <div className='text-gray-700 text-center dark:text-white p-4'>
            © 2022 Copyright:&nbsp; 
            <a href="https://www.github.com/Tempest20" className="hover:underline 
            decoration-red-500 
            dark:decoration-emerald-300 
            underline-offset-2 " target="_blank">Damir Bajrami</a>
            </div>
        </footer>
    </>
  )
}


export default Footer;