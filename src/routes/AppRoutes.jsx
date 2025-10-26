import { BrowserRouter, Routes , Route } from "react-router-dom";
import BemVindo from "../pages/BemVindo";
 import Portifolio from "../pages/Portifolio";

export function AppRoutes() {       
    return (
        <BrowserRouter>
            <Routes>    
                <Route path="/" element={<BemVindo />} />
                 <Route path="/portfolio" element={<Portifolio />} />  
            </Routes>
        </BrowserRouter>
    );
}   