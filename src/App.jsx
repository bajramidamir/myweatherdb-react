import React, { useEffect, useState }from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import DarkModeButton from './components/DarkModeButton';


function App() {
  

  return (
    <div className="bg-slate-200 dark:bg-stone-900">
      <div className="bg-slate-200 dark:bg-stone-900">
		<DarkModeButton />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
