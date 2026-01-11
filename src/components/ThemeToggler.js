import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.body.classList.add(`${storedTheme}-mode`);
        }
    }, []);

    const toggleTheme = () => {
        let newTheme;
        if (theme === 'dark') {
            newTheme = 'light';
        } else if (theme === 'light') {
            newTheme = 'dark';
        } else {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            newTheme = isSystemDark ? 'light' : 'dark';
        }

        setTheme(newTheme);
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(`${newTheme}-mode`);
        localStorage.setItem('theme', newTheme);
    };

    const isDark = theme === 'dark' || (theme === null && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return (
        <div className="theme-toggler-wrapper">
            <i className="fas fa-sun toggle-icon" style={{ opacity: !isDark ? 1 : 0.5 }}></i>
            <label className="theme-switch" htmlFor="checkbox" aria-label="Toggle between light and dark mode">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                />
                <div className="slider round"></div>
            </label>
            <i className="fas fa-moon toggle-icon" style={{ opacity: isDark ? 1 : 0.5 }}></i>
        </div>
    );
};

export default ThemeToggler;
