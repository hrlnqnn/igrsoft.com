import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import css from 'components/Gallery/Gallery.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from 'assets/Home/slide1.jpg';
import { NavLink } from 'react-router-dom';

export const Gallery = () => {
    return (
        <section className={css.gallery}>
            <div className={css.gallery_content}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={2}
                    spaceBetween={0}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className={css.gallery_swiper}
                >
                    <SwiperSlide>
                        <NavLink to="/portfolio">
                            <div className={css.gallery_slide}>
                                <img className={css.gallery_img} src={slide1} alt='slide' />
                            </div>
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink to="/portfolio">
                            <div className={css.gallery_slide}>
                                <img className={css.gallery_img} src={slide1} alt='slide' />
                            </div>
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink to="/portfolio">
                            <div className={css.gallery_slide}>
                                <img className={css.gallery_img} src={slide1} alt='slide' />
                            </div>
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink to="/portfolio">
                            <div className={css.gallery_slide}>
                                <img className={css.gallery_img} src={slide1} alt='slide' />
                            </div>
                        </NavLink>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}