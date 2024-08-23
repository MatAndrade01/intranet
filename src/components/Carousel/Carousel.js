import React, { useEffect, useState } from "react";
import './styles.css';
import ArrowLeft from '../../assets/arrowLeft.png';
import ArrowRight from '../../assets/arrowRight.png';

const Carousel = ({ items, interval = 17000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [interval]);

    return (
        <div className="carousel">
            <button className="carouselButtonPrev" onClick={prevSlide} aria-label="Previous Slide">
                <img src={ArrowLeft} alt="Previous Slide" />
            </button>
            <div className="carouselSlides">
                <div
                    className="carouselSlidesWrapper"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="carouselSlide"
                        >
                            <div className="slideContent">
                                {item.content}
                                <div className="containerText">
                                    <p className="text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="carouselButtonNext" onClick={nextSlide} aria-label="Next Slide">
                <img src={ArrowRight} alt="Next Slide" />
            </button>
        </div>
    );
}

export { Carousel };
