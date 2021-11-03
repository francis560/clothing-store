import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FeaturedStyles from "./components/FeaturedStyles";
import TrendingNow from "./components/TrendingNow";
import ProductSlider from "./components/ProductSlider";
import MoreToExplore from "./components/MoreToExplore";
import MemberBenefits from "./components/MemberBenefits";
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
            <ProductSlider />
            <MoreToExplore />
            <MemberBenefits />
            <Footer />
        </div>
    );
}

export default App;