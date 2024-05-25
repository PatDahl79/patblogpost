import React, { useState, useEffect } from 'react';
import MyContext from './myContext';

function MyState(props) {
    // Check if a mode preference is stored in localStorage, default to 'light' if not found
    const initialMode = localStorage.getItem('mode') || 'light';
    const [mode, setMode] = useState(initialMode);

    useEffect(() => {
        // Update body background color based on the mode
        document.body.style.backgroundColor = mode === 'dark' ? 'rgb(17, 24, 39)' : 'white';
        // Save mode preference to localStorage
        localStorage.setItem('mode', mode);
    }, [mode]);

    const toggleMode = () => {
        // Toggle between light and dark mode
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <MyContext.Provider value={{ mode, toggleMode }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
