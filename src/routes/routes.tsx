import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { ThemeProvider } from "../contexts/ThemeContext";
import NavMenu from "../components/navmenu";
import { AuthProvider } from "../contexts/Usercontext";







function AppRoutes ( ) {
    return (

        <ThemeProvider>
        <AuthProvider>
            <BrowserRouter>

                <NavMenu/>
                <Routes>
                    <Route path="/login" element={<Home />} />
                </Routes>
                
            </BrowserRouter>
            </AuthProvider>
            </ThemeProvider>
           
            
    


    )
}


export default AppRoutes