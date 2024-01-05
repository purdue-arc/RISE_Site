import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Registration from "./components/registration/Registration";
import About from "./components/about/About"
import Contact from "./components/contact-us/contact-us"
import Program from "./components/program/Program"
import Sponsorship from "./components/sponsorship/Sponsorship"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/program" element={<Program />} />
                <Route path="/sponsorship" element={<Sponsorship />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
