import React, { useState, useEffect } from 'react';


const DarkModeButton = () => {
    const [theme, setTheme] = useState(null);
    
    useEffect(() => {
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme('dark') : setTheme('light'))
        }, []);

    const handleThemeSwitch = () => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        };

    useEffect(() => {
        (theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark'))
        }, [theme]);

    const renderThemeButton = () => {
        if (theme === 'dark') {
            return <img className='invert' src="/assets/sun.svg" alt="" />
        } else {
            return <img className='invert' src="/assets/moon.svg" alt="" />
        }
    }
    
    
    return (
    <>
        <button onClick={handleThemeSwitch} className='w-10 h-10 m-1 p-2 absolute rounded-lg bg-blue-500 dark:bg-slate-700 border-stone-700'>
            {renderThemeButton()}
        </button>
    </>
    )
}

export default DarkModeButton;