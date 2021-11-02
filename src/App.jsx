import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FeaturedStyles from "./components/FeaturedStyles";
import "./components/css/App.css";


const App = () => {
    return (
        <div>
            <Nav />
            <Header />
            <FeaturedStyles />
        </div>
    );
}

export default App;