import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { ThemeProvider } from "../contexts/ThemeContext";






function AppRoutes ( ) {
    return (

        <ThemeProvider>
            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                
            </BrowserRouter>

            </ThemeProvider>
            
    


    )
}


export default AppRoutes