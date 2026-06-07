import { Routes,Route } from "react-router-dom";

import Home from "../pages/HomePage";
import Contact from "../pages/ContactPage";
import About from "../pages/About";
import Services from "../pages/ServicesPage";
import Products from "../pages/ProductsPage";
import Ai from "../pages/Ai";

const AppRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/ai" element={<Ai/>}/>
        </Routes>
    );
}

export default AppRoutes;