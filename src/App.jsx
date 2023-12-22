import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Registration from "./components/registration/Registration";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
