import React from 'react';
import './metro.css';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Metro = ({ language = 'ENG' }) => {
    // const containerStyle = {
    //     width: '600px',
    //     height: '450px'
    // };

    // const center = {
    //     lat: 41.2995,  // Toshkentning latitude (o'zgartiring)
    //     lng: 69.2401   // Toshkentning longitude (o'zgartiring)
    // };
    return (
        <>
            <section className='metro'>
                <h1>
                    {language === 'UZ' ? 'Bu yerda afzal ko‘rilgan taklifni bron qiling.'
                        : language === 'RU' ? 'Забронируйте предпочтительное предложение здесь'
                            : 'Reserve your preferred option here'}
                </h1>
                <h2>
                    {language === 'UZ' ? 'Buyurtmangizni rasmiylashtiring'
                        : language === 'RU' ? 'Оформите ваш заказ'
                            : 'Complete your order'}
                </h2>
                <button>
                    {language === 'UZ' ? 'Batafsil ma\'lumot'
                        : language === 'RU' ? 'Узнать Больше'
                            : '   Learn More'}
                </button>
            </section>
            <div>
                <div className='metro-box'>
                    <div>
                        <span className='phon'><span className='phone'><i class="fa-solid fa-phone"></i></span></span>
                        <h4>
                            {language === 'UZ' ? 'Telefon orqali qo\'ng\'iroq qiling'
                                : language === 'RU' ? 'Совершите телефонный звонок'
                                    : 'Make a phone call'}
                        </h4>
                        <p>+998 94 286 0019</p>
                    </div>
                    <div>
                        <span className='phon'><span className='phone'><i class="fa-solid fa-at"></i></span></span>
                        <h4>
                            {language === 'UZ' ? 'e-mail'
                                : language === 'RU' ? 'Электронной почте'
                                    : 'E-mail'}
                        </h4>
                        <p>abdulmajidnabiyv@gmail.com</p>
                    </div>
                    <div>
                        <span className='phon'><span className='phone'><i class="fa-solid fa-location-dot"></i></span></span>
                        <h4>
                            {language === 'UZ' ? 'Bizning ofislarimiz'
                                : language === 'RU' ? 'Посетите наши офисы'
                                    : 'Visit our offices'}
                        </h4>
                        <p> {language === 'UZ' ? 'Toshkent shahri'
                            : language === 'RU' ? 'город Ташкент'
                                : 'Tashkent city'}</p>
                    </div>
                </div>
            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95896.14747703189!2d69.21302736865891!3d41.31420168197382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6e0533a81f%3A0x811386703e0f1ce4!2sLutfiy!5e0!3m2!1sru!2s!4v1727411317909!5m2!1sru!2s" width="80%"></iframe>
            </div>
            <div className='ofor'>
                <div className='oformit'>
                    <p> {language === 'UZ' ? 'Bu forma orqali bron qilishingiz mumkin'
                        : language === 'RU' ? 'Оформите ваше бронирование через эту форму '
                            : 'Make your booking through this form'}</p>

                    <div className='label'>
                        <div className='input'>
                            <label htmlFor="">
                                {language === 'UZ' ? 'Ismingiz'
                                    : language === 'RU' ? 'Ваше имя'
                                        : 'Your Name'}
                            </label>
                            <input type="text" placeholder='Abdulmajid Nabiyev' />
                        </div>
                        <div className='input'>
                            <label htmlFor="">
                                {language === 'UZ' ? 'Telefon raqamingiz'
                                    : language === 'RU' ? 'Ваш номер телефона'
                                        : 'Phone number'}
                            </label>
                            <input type="text" placeholder='+998 94 286 0019' />
                        </div>
                    </div>
                    <div className='label'>
                        <div className='input'>
                            <label htmlFor="">
                                {language === 'UZ' ? 'Mehmonlar soni'
                                    : language === 'RU' ? 'Количество гостей'
                                        : 'Number of guests'}
                            </label>
                            <select type="number" placeholder=''>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor="">
                                {language === 'UZ' ? 'Kirish sanasi'
                                    : language === 'RU' ? 'Дата заезда'
                                        : 'Check-in date'}
                            </label>
                            <input type="date" placeholder='mm/dd/y' />
                        </div>
                    </div>
                    <div className='input'>
                            <label htmlFor="">
                                {language === 'UZ' ? 'Manzilingizni tanlang'
                                    : language === 'RU' ? 'Выберите ваш пункт назначения'
                                        : 'Select your destination'}
                            </label>
                            <select id='sel' type="number" placeholder=''>
                                <option value="">  {language === 'UZ' ? 'Xitoy'
                                            : language === 'RU' ? 'Китай'
                                                : 'China'}</option>
                                <option value=""> {language === 'UZ' ? 'Ar-Riyod'
                                            : language === 'RU' ? 'Ар-Риед'
                                                : 'Ar-Riyad'}</option>
                                <option value="">{language === 'UZ' ? 'Anqara'
                                            : language === 'RU' ? 'Анкара'
                                                : 'Ankara'}</option>
                                <option value="">  {language === 'UZ' ? 'Gong-Kong'
                                            : language === 'RU' ? 'Гонг-Конг'
                                                : 'Gong-Kong'}</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor="">
                                {language === 'UZ' ? 'Viza qo‘llab-quvvatlashingizni tanlang'
                                    : language === 'RU' ? 'Выберите свою визовую поддержку'
                                        : 'Select your visa support'}
                            </label>
                            <select id='sel' type="number" placeholder=''>
                                <option value="">  {language === 'UZ' ? 'Davlat'
                                            : language === 'RU' ? 'Государсто'
                                                : 'Country'}</option>
                                <option value=""> {language === 'UZ' ? 'Ar-Riyod'
                                            : language === 'RU' ? 'Ар-Риед'
                                                : 'Ar-Riyad'}</option>
                                <option value="">{language === 'UZ' ? 'Anqara'
                                            : language === 'RU' ? 'Анкара'
                                                : 'Ankara'}</option>
                                <option value="">  {language === 'UZ' ? 'Gong-Kong'
                                            : language === 'RU' ? 'Гонг-Конг'
                                                : 'Gong-Kong'}</option>
                            </select>
                        </div>
                        <button class="main-button">
                        {language === 'UZ' ? 'Hozir bron qiling'
                                            : language === 'RU' ? 'Забронировать сейчас'
                                                : 'Book now'}
                        </button>
                </div>
                
            </div>
           
        </>
    )
}

export default Metro