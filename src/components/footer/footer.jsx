import React from 'react';
import './footer.css'

const Footer = ({ language = 'ENG' }) => {
    return (
        <>
            <section className='footer'>
                <div className='foot'>
                    <div>
                        <h1>
                            {language === 'UZ' ? 'Qayerga borishni qidiryapsizmi?'
                                : language === 'RU' ? 'Ищите, куда поехать?'
                                    : 'Looking for a place to go?'}
                        </h1>
                        <h2>
                            {language === 'UZ' ? 'Tugmani bosib bron qiling'
                                : language === 'RU' ? 'Зарезервируйте, кликнув по кнопке    '
                                    : 'Reserve by clicking the button'}
                        </h2>
                        <h3>
                            {language === 'UZ' ? 'Ish vaqti: D - J 9:00 - 18:00'
                                : language === 'RU' ? 'Режим работы: Пн - Пт 9:00 - 18:00   '
                                    : 'Working hours: Mon-Fri 9:00 AM - 6:00 PM'}
                        </h3>
                    </div>
                    <button>
                        {language === 'UZ' ? 'Hozir bron qiling'
                            : language === 'RU' ? 'Забронируйте сейчас'
                                : 'Book now'}
                    </button>
                </div>
            </section>
            <div className='copy'>
                <p>
                    Copyright © 2024 Travel  All rights reserved
                </p>
            </div>
        </>
    )
}

export default Footer