import React, { useRef, useState } from 'react';
import './sliders.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import istanbul from '../../images/istanbul';
import dubai from '../../images/dubai';
import antalya from '../../images/antalya';
import egypt from '../../images/egypt';
import usa from '../../images/usa';
import england from '../../images/england';
import canada from '../../images/canada';
import europe from '../../images/europe';

const Sliders = ({ language = 'ENG' }) => {
    const swiperRef = useRef(null);
    return (
        <>
            <section id='slider' className='sliders'>
                <h1>{language === 'UZ' ? 'Har bir shaharda eng yaxshi haftalik takliflar'
                    : language === 'RU' ? 'Лучшие Eженедельные Предложения В  Каждом Городе'
                        : 'Best Weekly Deals in Every City'}</h1>
                <h5>
                    {language === 'UZ' ? 'Har bir shaharda aynan siz uchun tanlangan eng yaxshi haftalik takliflar bilan tanishing. Chegirmalar dunyosiga sho\'ng\'ib, ajoyib tajribalar bilan rohatlaning.'
                        : language === 'RU' ? ' Откройте для себя лучшие еженедельные предложения в каждом городе, специально  подобранные для вас. Погрузитесь в мир скидок и наслаждайтесь непревзойденными  впечатлениями.'
                            : 'Discover the best weekly deals in every city, specially selected for you. Dive into the world of discounts and enjoy unparalleled experiences'}
                </h5>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={30} // Slaydlar orasidagi masofa
                    centeredSlides={true} // Slaydlar markazlashtirilgan bo'lishi
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false, // Avtomatik o'zgartirish tugagandan keyin ham foydalanuvchi interaktivligi bilan ishlashini davom ettirish
                    }}
                    pagination={{
                        clickable: true, // Sahifa raqamlariga bosish mumkin
                    }}
                    // navigation={true} // Navigatsiya tugmalari
                    slidesPerView={1} // Bir vaqtda ko'rsatiladigan slaydlar soni
                    loop={true} // Slaydlar oxiriga yetganda boshiga qaytish
                    modules={[Autoplay, Pagination, Navigation]} // Kerakli modullar
                    className="mySwiper"
                    breakpoints={{
                        1100: { // Ekran kengligi 1100px yoki kichik bo'lganda
                            slidesPerView: 3, // Slaydlar soni 2 bo'ladi
                        },
                        800: {
                            slidesPerView: 2, // Slaydlar soni 1 bo'ladi
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={istanbul} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Istanbul'
                                            : language === 'RU' ? 'Истанбул'
                                                : 'Istanbul'}
                                    </h2>
                                    <p>420$</p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={dubai} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Dubay'
                                            : language === 'RU' ? 'Дубай'
                                                : 'Dubai'}
                                    </h2>
                                    <p>700$</p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={antalya} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Antalya'
                                            : language === 'RU' ? 'Анталья'
                                                : 'Antalya'}
                                    </h2>
                                    <p>999$</p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={egypt} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Sharm-El-Sheyx'
                                            : language === 'RU' ? 'Шарм-ел-Шейх'
                                                : 'Sharm-el-Sheikh'}
                                    </h2>
                                    <p>800$</p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={usa} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'AQSh'
                                            : language === 'RU' ? 'США'
                                                : 'USA'}
                                    </h2>
                                    <p></p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={england} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Angliya'
                                            : language === 'RU' ? 'Англия'
                                                : 'England'}
                                    </h2>
                                    <p></p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={canada} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Kanada'
                                            : language === 'RU' ? 'Канада'
                                                : 'Canada'}
                                    </h2>
                                    <p></p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper'>

                            <img src={europe} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Yevropa'
                                            : language === 'RU' ? 'Европа'
                                                : 'Europe'}
                                    </h2>
                                    <p>420$</p>
                                </div>
                                <div>
                                    <h3>
                                        {language === 'UZ' ? '234 registratsiya'
                                            : language === 'RU' ? '234 регистратции'
                                                : '234 registration'}
                                    </h3>
                                    <h6>
                                        {language === 'UZ' ? '/Kishi'
                                            : language === 'RU' ? '/человек'
                                                : '/people'}
                                    </h6>
                                </div>
                                <h4>
                                    {language === 'UZ' ? 'Ilova tarkibiga kiritilgan:'
                                        : language === 'RU' ? 'Включено в приложение:'
                                            : 'Included in the application'}
                                </h4>
                                <div className='span'>
                                    <span>
                                        {language === 'UZ' ? '5 kunlik sayohat, mehmonxonada yashash bilan'
                                            : language === 'RU' ? '5-дневное путешествие проживание в отеле '
                                                : '5-day trip with hotel accommodation'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Aviabiletlar kiritilgan'
                                            : language === 'RU' ? 'Включены авиабилеты '
                                                : 'Flights included'}
                                    </span>
                                    <span>
                                        {language === 'UZ' ? 'Har kuni diqqatga sazovor joylarga tashrif'
                                            : language === 'RU' ? 'Посещение достопримечательности ежедневно '
                                                : 'Daily visits to attractions'}
                                    </span>
                                </div>
                                <button>
                                    {language === 'UZ' ? 'Bandlash'
                                        : language === 'RU' ? 'Забронировать '
                                            : 'Book'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="tour-btn">
                    <div>
                        <button onClick={() => swiperRef.current.slidePrev()}>
                            <i className="fa-solid fa-left-long"></i>
                        </button>
                        <button onClick={() => swiperRef.current.slideNext()}>
                            <i className="fa-solid fa-right-long"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sliders