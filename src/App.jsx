import React, { useEffect, useState }from 'react';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

  const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

  useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);



  return (
    <div className="bg-slate-200 dark:bg-stone-900">
    <button
			type="button"
			onClick={handleThemeSwitch}
			className="font-light text-xs fixed p-2 z-10
       right-20 top-4 bg-violet-300 
       dark:bg-orange-300 
       rounded-md"
		  >light / dark
    </button>
    
      <div className="bg-slate-200 dark:bg-stone-900">
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
