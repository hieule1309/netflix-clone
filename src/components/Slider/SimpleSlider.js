import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../Row/Row.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function SimpleSlider({ children, ...props }) {
    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        // adaptiveHeight: true,
        arrows: false,
        initialSlide: 0,
        // swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 6,
                    initialSlide: 6,
                },
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 5,
                    initialSlide: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    initialSlide: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
        ],
    };
    return (
        <div className="wrapper">
            <ArrowBackIosIcon className="icon left" onClick={previous} />
            <Slider ref={ref} {...settings} className="slide-hover">
                {children}
            </Slider>
            <ArrowForwardIosIcon className="icon right" onClick={next} />
        </div>
    );
}

export default SimpleSlider;
