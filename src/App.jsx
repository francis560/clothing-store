import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FeaturedStyles from "./components/FeaturedStyles";
import TrendingNow from "./components/TrendingNow";
import MemberBenefits from "./components/MemberBenefits";
import MoreToExplore from "./components/MoreToExplore";
import Footer from "./components/Footer";


import "./components/css/App.css";
import "./components/css/ImgHover.css";


const App = () => {
    return (
        <div>
            <Nav />
            <Header />
            <FeaturedStyles />
            <TrendingNow />
            <MoreToExplore />
            <MemberBenefits />
            <Footer />
        </div>
    );
}

export default App;