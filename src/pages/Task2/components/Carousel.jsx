import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './SlickButton';

const Carousel = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        draggable: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container lg:px-40">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} >
                        <img src={image.src} alt={image.alt} className={` ${index % 2 === 0 ? 'mt-10' : 'mb-10'} w-full max-h-[400px] object-cover rounded-3xl px-5`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
