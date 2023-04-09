import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import IndianCinema from "../Pages/IndianCinema/IndianCinema";
import Hollywood from "../Pages/Hollywood/Hollywood";
import Fitness from "../Pages/Games/Games";
import Anime from "../Pages/Anime/Anime";
import Technology from "../Pages/Technology/Technology";

import AccessData from "../Utility/UniqueId";


const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={ <Home />} />
                <Route path="/IndianCinema" element={<IndianCinema />} />
                
                <Route path="/Fitness" element={<Fitness /> } />
                <Route path="/Anime" element={<Anime /> } />
                <Route path="/Hollywood" element={<Hollywood /> } />
                <Route path="/Technology" element={<Technology />} />
                <Route path="/accessdata/:ID" element={<AccessData />} />
                 
            </Routes>
            </BrowserRouter>
    );
};
export default RouterComponent;