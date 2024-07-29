import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const DarkMode = () => {
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or default to "dark" change it after update by default dark mode
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme : "dark";
    });

    useEffect(() => {
        const element = document.documentElement;

        // Apply dark mode if theme is "dark"
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }

       
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            {theme === "dark" ? (
                <BiSolidSun onClick={() => setTheme("light")} className='text-2xl' />
            ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl' />
            )}
        </>
    );
}

export default DarkMode;
