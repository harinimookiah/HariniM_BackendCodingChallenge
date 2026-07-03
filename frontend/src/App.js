import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AddPlayer from "./components/AddPlayer";
import UpdatePlayer from "./components/UpdatePlayer";
import PlayerList from "./components/PlayerList";

import "./css/Player.css";

function App() {

    return (

        <BrowserRouter>

            <nav>

                <Link to="/">Home</Link>

                <Link to="/players">Player Details</Link>

                <Link to="/add">Add Player</Link>

                <Link to="/update">Update Player</Link>

            </nav>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/players"
                    element={<PlayerList />}
                />

                <Route
                    path="/add"
                    element={<AddPlayer />}
                />

                <Route
                    path="/update"
                    element={<UpdatePlayer />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;