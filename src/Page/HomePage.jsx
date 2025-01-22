import React from 'react';
import MasterLayOut from "../MasterLayout/MasterLayOut.jsx";
import BannerSection from "../components/BannerSection.jsx";
import Curriculum from "../components/Curriculum.jsx";
import Stories from "../components/Stories.jsx";

const HomePage = () => {
    return (
        <MasterLayOut>
            <BannerSection/>
            <Curriculum/>
            <Stories/>
        </MasterLayOut>
    );
};

export default HomePage;