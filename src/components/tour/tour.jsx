import React, { useRef } from 'react';
import './tour.css';
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

const Tour = ({ language = 'ENG' }) => {
    const swiperRef = useRef(null);
    return (
        <>
            <section className='tour'>
                <div className='hr'></div>
                <h1>
                    {language === 'UZ' ? 'Viza olishda yordam'
                        : language === 'RU' ? 'Поддержка в получении визы'
                            : 'Visa assistance'}
                </h1>
                <h5>
                    {language === 'UZ' ? 'Bizning viza olishda ekspert yordamimiz bilan muammosiz sayohat tajribasi. Biz mukammal yordam va to‘liq yo‘riqnomalarni taqdim etamiz, sayohatingizni oson va qulay o‘tkazishingizga ishonch hosil qilamiz.'
                        : language === 'RU' ? 'Опыт беспроблемных путешествий с нашей экспертной поддержкой в получении визы. Мы предоставляем безупречную помощь и полное руководство, обеспечивая гладкое путешествие.'
                            : ' Experience hassle-free travel with our expert visa assistance. We provide impeccable support and complete guidance, ensuring a smooth journey.'}
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
                                        {language === 'UZ' ? 'Xitoy'
                                            : language === 'RU' ? 'Китай'
                                                : 'China'}
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

                            <img src={dubai} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Ar-Riyod'
                                            : language === 'RU' ? 'Ар-Риед'
                                                : 'Ar-Riyad'}
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

                            <img src={antalya} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Anqara'
                                            : language === 'RU' ? 'Анкара'
                                                : 'Ankara'}
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

                            <img src={egypt} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Gong-Kong'
                                            : language === 'RU' ? 'Гонг-Конг'
                                                : 'Gong-Kong'}
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

                            <img src={usa} alt="" width="250px" />
                            <div className='info'>
                                <div>
                                    <h2>
                                        {language === 'UZ' ? 'Saudiya Arabistoni'
                                            : language === 'RU' ? 'Саудовская Арабия'
                                                : 'Saudi Arabai'}
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
                                        {language === 'UZ' ? 'London'
                                            : language === 'RU' ? 'Лондон'
                                                : 'London'}
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
                                        {language === 'UZ' ? 'Ottava'
                                            : language === 'RU' ? 'Оттава'
                                                : 'Ottava'}
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
                                        {language === 'UZ' ? 'Rim'
                                            : language === 'RU' ? 'Рим'
                                                : 'Rome'}
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
                <div className='hrr'></div>
            </section>
        </>
    )
}

export default Tour