import React from 'react';
import image1 from '../assets/image/Rectangle 12.png'

const Stories = () => {

    return (
        <div className='container-fluid cover'>
            <div className="container my-5">
                <h2 className="text-center mb-4">Our Stories</h2>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card shadow-lg">
                            <div className="card-img-container position-relative">
                                <img src={image1} className="card-img-top" alt="Card image"/>
                            </div>
                            <div className="card-body">

                                <h6 style={{background: "#3cd8e8"}}
                                    className="card-subtitle py-2 btn position-absolute translate-middle mb-3 text-white fw-medium start-50">November
                                    18, 2024</h6>
                                <h5 className="card-title mt-5">This is the title</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-4">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card h-100 position-relative shadow-lg">
                                    <img src={image1} className="card-img-top"/>
                                    <div className="card-body">
                                        <h6 style={{background: "#95b226"}}
                                            className="card-subtitle py-2 btn mb-3 text-white fw-medium position-absolute start-50 translate-middle ">November
                                            18, 2024</h6>
                                        <h5 className="card-title fw-bold fs-3 mt-5">This is the title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 position-relative shadow-lg">
                                    <img src={image1} className="card-img-top"/>
                                    <div className="card-body">
                                        <h6 style={{background: "#95b226"}}
                                            className="card-subtitle py-2 btn mb-3 text-white fw-medium position-absolute start-50 translate-middle ">November
                                            18, 2024</h6>
                                        <h5 className="card-title fw-bold fs-3 mt-5">This is the title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 position-relative shadow-lg">
                                    <img src={image1} className="card-img-top"/>
                                    <div className="card-body">
                                        <h6 style={{background: "#5d58f0"}}
                                            className="card-subtitle py-2 btn mb-3 text-white fw-medium position-absolute start-50 translate-middle ">November
                                            18, 2024</h6>
                                        <h5 className="card-title fw-bold fs-3 mt-5">This is the title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 position-relative shadow-lg">
                                    <img src={image1} className="card-img-top"/>
                                    <div className="card-body">
                                        <h6 style={{background: "#5d58f0"}}
                                            className="card-subtitle py-2 btn mb-3 text-white fw-medium position-absolute start-50 translate-middle ">November
                                            18, 2024</h6>
                                        <h5 className="card-title fw-bold fs-3 mt-5 text-center">This is the title</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-dark fw-medium fs-5 px-5">View All</button>
                </div>
            </div>
        </div>
    );
};

export default Stories;