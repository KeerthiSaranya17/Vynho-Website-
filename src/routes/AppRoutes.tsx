import { Routes,Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";

const AppRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    );
}

export default AppRoutes;