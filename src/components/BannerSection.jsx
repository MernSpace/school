import React from 'react';
import BannarImage from '../assets/image/Group 4.png'

const BannerSection = () => {
    return (
        <section className="py-5 bg-main">
            <div className="container">
                <div className="row min-h-screen items-center align-items-center">
                    {/* Image Content */}
                    <div className="col-lg-6 py-4 order-1 order-lg-2 text-center text-lg-end">
                        <img
                            src={BannarImage}
                            alt="Banner"
                            className="img-fluid w-100 w-lg-75 h-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="col-lg-6 py-4 order-2 order-lg-1">
                        <h1 className="display-4 fw-bold mb-4">
                            <span style={{color:"#FEA301"}}>Empowering</span><br/>
                            Student From Small<br/>
                            age <span style={{color:"#01ACFD"}}>Towards vision</span>
                        </h1>
                        <p className="lead mb-4">
                            With the courage, confidence, creativity and compassion
                            to make their unique contribution in a diverse and
                            dynamic world
                        </p>
                        <button className="btn btn-orange text-white px-5 py-3 fw-medium">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;

