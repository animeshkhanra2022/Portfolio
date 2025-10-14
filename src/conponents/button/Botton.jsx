// src/components/Button.jsx

import React from 'react';

/**
 * A reusable button component.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to display inside the button (e.g., text, an icon).
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.className=''] - Optional additional CSS classes to apply.
 * @param {('button'|'submit'|'reset')} [props.type='button'] - The button's type.
 */
const Button = ({ children, onClick, className = '', type = 'button' }) => {
    // Base classes for the button
    const baseClasses =
        'py-2 px-5 bg-red-500 text-white font-serif rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-colors duration-200';

    return (
        <button
            type={type}
            onClick={onClick}
            // Combine base classes with any custom classes passed in via props
            className={`${baseClasses} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;