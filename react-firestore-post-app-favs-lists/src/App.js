import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import FavoritePage from "./pages/FavoritePage";
import NewFavList from "./pages/NewFavList";

function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/posts/:postId" element={<UpdatePage />} />
                <Route path="/favorites" element={<FavoritePage />} />
                <Route path="/new-fav" element={<NewFavList />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
