import './styles/slideShow.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import slides from './../../data/banners.json'

export const SlideShow = () => {

    return (
        <section>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Autoplay, EffectFade]}
                autoplay={{
                    delay: 3500,
                }}
                effect="fade"
                className="slides-swiper"
              >
                {
                    slides.map( slide => (
                        <SwiperSlide key={ slide.id }>
                            <article 
                                className="slide"
                                style={{ backgroundImage: `url(${ slide.banner })` }}
                            >
                                <div className="slide__content">
                                    <h3 className="slide__title">{ slide.title }</h3>
                                    <p className="slide__description">{ slide.description }</p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))
                }
              </Swiper>
        </section>
    )
}
