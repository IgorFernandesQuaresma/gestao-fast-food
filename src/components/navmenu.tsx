import { useTheme } from "../contexts/ThemeContext";
import ToggleButton from "./toggle";




function NavMenu() {
    const { isDarkMode} = useTheme();

    return (
        
        <div data-theme={isDarkMode ? "dark" : "hidden"} className="w-full h-12 flex justify-around items-center bg-background p-10">
            <div>
                <h1 className="text-primary font-sans">Logo</h1>
            </div>

                <ul className="w-1/3 flex flex-row justify-center items-center text-primary font-sans list-none p-0">
                    <li className="mr-4 text-h4 hover:text-accent cursor-pointer">Teste 1</li>
                    <li className="mr-4 text-h4 hover:text-accent cursor-pointer">Teste 1</li>
                    <li className="mr-4 text-h4 hover:text-accent cursor-pointer">Teste 1</li>
                    <li className="mr-4 text-h4 hover:text-accent cursor-pointer">Teste 1</li>
                </ul>
        
            <ToggleButton />
        </div>
);
}

export default NavMenu;