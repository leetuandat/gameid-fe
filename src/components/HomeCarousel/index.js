import React from "react";
import { Carousel } from "antd";
import "./HomeCarousel.css";

const HomeCarousel = () => {
    let carouselRef = null;
    const nextBtn = "/assets/images/rightnext.png"
    const prevBtn = "/assets/images/leftnext.png"
    const slide = "/assets/images/slide.png"
    const slide2 = "/assets/images/slide1.png"


    return (
        <div className="carousel">
            <div className="container"> {/* Bootstrap container */}
                <div className="carousel-wrapper">
                    {/* Nút trái */}
                    <button
                        className="custom-arrow left"
                        onClick={() => carouselRef.prev()}
                    >
                        <img src={prevBtn} alt="prev" />
                    </button>

                    {/* Carousel chính */}
                    <Carousel
                        dots={{ className: "custom-dots" }}
                        ref={(el) => (carouselRef = el)}
                        effect="scrollx"
                    >
                        {/* Slide 1 */}
                        <div className="slide slide-one">
                            <div className="title">―― Title 1 ――</div>
                            <img src={slide} alt="Slide 1" />
                        </div>

                        {/* Slide 2 */}
                        <div className="slide slide-two">
                            <div className="title">―― FEATURES ――</div>
                            <div className="image-stack">
                                <img src={slide2} className="img-top" alt="top" />
                                <img src={slide2} className="img-bottom" alt="bottom" />
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="slide slide-three">
                            <div className="title">―― Title 3 ――</div>
                            <p>Nội dung</p>
                        </div>
                    </Carousel>

                    {/* Nút phải */}
                    <button
                        className="custom-arrow right"
                        onClick={() => carouselRef.next()}
                    >
                        <img src={nextBtn} alt="next" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;