import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { ThemeProvider } from "../contexts/ThemeContext";
import NavMenu from "../components/navmenu";






function AppRoutes ( ) {
    return (

        <ThemeProvider>
            <BrowserRouter>

                <NavMenu/>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                
            </BrowserRouter>

            </ThemeProvider>
            
    


    )
}


export default AppRoutes