import { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './styles/productSlideshow.css'


export const ProductSlideshow = ({ images }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const mainSliderRef = useRef(null);


    const handleSlidePrev = useCallback(() => {
        if (!mainSliderRef.current) return;
        mainSliderRef.current.swiper.slidePrev();
      }, []);
    
      const handleSlideNext = useCallback(() => {
        if (!mainSliderRef.current) return;
        mainSliderRef.current.swiper.slideNext();
      }, []);

    return (
        <div className="slideshow">
            <div className="slideshow__main-container">
                <Swiper
                    ref={ mainSliderRef }
                    loop={true}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500
                    }}
                    thumbs={{ 
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    }}
                    modules={[FreeMode, Thumbs, Autoplay]}
                    className="slideshow__main"
                >
                    {
                        images.map(img => (
                            <SwiperSlide key={img.url}>
                                <img src={ img.url } />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="slideshow__main-navigation">
                    <button
                        onClick={handleSlidePrev}
                        className="slideshow__main-button"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        onClick={handleSlideNext}
                        className="slideshow__main-button"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="slideshow__thumbs"
            >
                {
                    images.map(img => (
                        <SwiperSlide key={img.url}>
                            <img src={ img.url } />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}


ProductSlideshow.propTypes = {
    images: PropTypes.array.isRequired
}