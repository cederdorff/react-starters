import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Page404 from "./pages/404";
import Update from "./pages/Update";
import Create from "./pages/Create";

function App() {
    return (
        <main className="app">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/users/:userId" element={<Update />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </main>
    );
}

export default App;
