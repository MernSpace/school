import React, {Fragment} from 'react';
import Navbar from '../components/NavBar.jsx';
import Footer from "../components/Footer.jsx";

const MasterLayOut = (prop) => {
    return (
        <Fragment>
            <Navbar />
            {prop.children}
            <Footer/>
        </Fragment>
    );
};

export default MasterLayOut;