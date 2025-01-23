import React from 'react';
import image1 from '../assets/image/SVG.png'
import image2 from '../assets/image/SVG (1).png'
import image3 from '../assets/image/svg3.png'
import left from '../assets/image/left.png'
import right from '../assets/image/right.png'

const Curriculum = () => {
    return (
        <div className='container-fluid cover'>
            <div className='container text-center py-5'>
                <h2>Standard Curriculum</h2>
                <div className='row mt-5'>
                    <div className="col-md-4 mb-4">
                        <div  style={{ background: 'linear-gradient(to bottom, #e3f6fe 0%, #ffffff 100%)' }}
                             className=" card h-100 border-0 rounded-4 p-4 text-center shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <div className={`rounded-circle mx-auto mb-4 p-4  bg-opacity-10`}
                                     style={{width: '220px', height: '220px',}}>
                                    <img src={image1} className="img-fluid"/>
                                </div>
                                <h3 className="fw-medium  mb-3 fs-4 ">Hello this is Title</h3>
                                <p className="card-text text-muted mb-4">The card will now have the colored background
                                    only in the header section while maintaining a white background for the content
                                    area.</p>
                                <a href="#"
                                   className={` text-decoration-none mt-auto fw-medium btn text-white btn-orange`}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div style={{ background: 'linear-gradient(to bottom, #fdf4df 0%, #ffffff 100%)' }}
                             className="card h-100 border-0  rounded-4 p-4 text-center shadow-sm hover:shadow-lg transition-all">
                            <div className="card-body d-flex flex-column">
                                <div className={`rounded-circle mx-auto mb-4 p-4  bg-opacity-10`}
                                     style={{width: '220px', height: '220px'}}>
                                    <img src={image2} className="img-fluid"/>
                                </div>
                                <h3 className="fw-medium  mb-3 fs-4 ">Hello this is Title</h3>
                                <p className="card-text text-muted mb-4">The card will now have the colored background
                                    only in the header section while maintaining a white background for the content
                                    area.</p>
                                <a href="#"
                                   className={`text-decoration-none mt-auto fw-medium btn text-white btn-orange`}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div style={{ background: 'linear-gradient(to bottom, #f1e7ff 0%, #ffffff 100%)' }}
                             className="card h-100 border-0 rounded-4 p-4 text-center shadow-sm hover:shadow-lg transition-all">
                            <div className="card-body d-flex flex-column">
                                <div className={`rounded-circle mx-auto mb-4 p-4  bg-opacity-10`}
                                     style={{width: '220px', height: '220px'}}>
                                    <img src={image3} className="img-fluid"/>
                                </div>
                                <h3 className="fw-medium  mb-3 fs-4 ">Hello this is Title</h3>
                                <p className="card-text text-muted mb-4">The card will now have the colored background
                                    only in the header section while maintaining a white background for the content
                                    area.</p>
                                <a href="#"
                                   className={` text-decoration-none mt-auto fw-medium btn text-white btn-orange`}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                        <button className="btn btn-orange rounded-circle border shadow-sm"
                                style={{width: "50px", height: "50px"}}>
                            <img src={left} className="img-fluid"/>
                        </button>
                        <button className="btn btn-orange rounded-circle border shadow-sm"
                                style={{width: "50px", height: "50px"}}>
                            <img src={right} className="img-fluid"/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Curriculum;