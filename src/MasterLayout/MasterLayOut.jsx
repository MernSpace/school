import React, {Fragment} from 'react';
import Navbar from '../components/NavBar.jsx';

const MasterLayOut = (prop) => {
    return (
        <Fragment>
            <Navbar />
            {prop.children}
        </Fragment>
    );
};

export default MasterLayOut;