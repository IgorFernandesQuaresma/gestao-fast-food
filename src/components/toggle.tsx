import { useTheme } from "../contexts/ThemeContext";


function ToggleButton() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
            <button
            onClick={toggleTheme}
            className={`relative flex items-center justify-between w-16 h-8 p-1 rounded-full transition-colors duration-300 ease-in-out
            ${isDarkMode ? 'bg-sky-950' : 'bg-gray-300'}
            shadow-md focus:outline-none`}
            aria-label="Toggle switch"
        >
            <span
            className={`absolute top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out
                ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}
            `}/>
        </button>
);
}

export default ToggleButton;
