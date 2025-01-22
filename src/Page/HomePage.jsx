import React from 'react';
import MasterLayOut from "../MasterLayout/MasterLayOut.jsx";
import BannerSection from "../components/BannerSection.jsx";
import Curriculum from "../components/Curriculum.jsx";

const HomePage = () => {
    return (
        <MasterLayOut>
            <BannerSection/>
            <Curriculum/>
        </MasterLayOut>
    );
};

export default HomePage;