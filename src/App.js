import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact-us/contact-us";
import Program from "./components/program/program";
import Registration from "./components/registration/registration";
import Sponsorship from "./components/sponsorship/sponsorship";
import Main from "./App";
import Navbar from "./components/navbar/navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/program" element={<Program />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/sponsor" element={<Sponsorship />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
