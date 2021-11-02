import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FeaturedStyles from "./components/FeaturedStyles";
import TrendingNow from "./components/TrendingNow";


import "./components/css/App.css";
import "./components/css/ImgHover.css";


const App = () => {
    return (
        <div>
            <Nav />
            <Header />
            <FeaturedStyles />
            <TrendingNow />
        </div>
    );
}

export default App;