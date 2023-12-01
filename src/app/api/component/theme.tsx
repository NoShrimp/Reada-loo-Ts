// 'use client'

// import { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { FaSun, FaMoon } from "react-icons/fa6";

// const ThemeSwitch = () => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     let newTheme = theme === 'light' ? 'mydark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     Cookies.set('theme', newTheme);
//   };

//   useEffect(() => {
//     const savedTheme = Cookies.get('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute('data-theme', savedTheme);
//     }
//   }, []);

//   return (
//     <button onClick={toggleTheme} className={h-12 w-12 flex items-center justify-center rounded-full ${theme === 'mydark' ? 'bg-[#1C232A]' : 'bg-white'}}>
//       {theme === 'mydark' ? <FaMoon size={28} className='text-[#BF9E60]' /> : <FaSun size={28} className='text-[#ad8f56]' />}
//     </button>
//   );
// };

// export default ThemeSwitch;
// ﻿
// chunko
// toxiclast