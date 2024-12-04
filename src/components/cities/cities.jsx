import React, { useState, useEffect } from 'react';
import './cities.css';

const Cities = ({ language = 'ENG' }) => {
    const images = [
        {
            url: 'https://cdn-imgix.headout.com/media/images/fd89223056e350ae524f6c6120198677-Bluemosqueistanbul.jpg?auto=format&q=90&fit=crop&crop=faces',
            text: { UZ: "Go'zal shaharga tashrif buyuring:", RU: 'Загляните в красивый город:', ENG: 'Visit the beautiful city:' },
            title: { UZ: 'Istanbul', RU: 'Стамбул', ENG: 'Istanbul' },
            go: { UZ: "O'tish", RU: 'Перейти', ENG: 'Go' },
            population: { UZ: 'Aholisi:', RU: 'Население:', ENG: 'Population' },
             pop: { UZ: '44,48 mln', RU: '44,48 млн', ENG: '44,48 million' },
            area: { UZ: 'Hududi:', RU: 'Территория:', ENG: 'Area' },
            are: { UZ: '275,400 km²', RU: '275,400 км²', ENG: '275,400 km²' },
            price: { UZ: "O'rtacha narx:", RU: 'Средняя цена:', ENG: 'Middle price' },
            cost: { UZ: '946 000$', RU: '946 000$', ENG: '946 000$' },
            more: { UZ: "Ko'proq", RU: 'Узнать Больше', ENG: 'Learn more' }
        },
    
                {
                    url: 'https://i.natgeofe.com/n/483e77f7-f52b-432a-a0f5-d9cd1489a95a/madinat-jumeirah-dubai-uae_3x2.jpg',
                    text: {
                        UZ: 'Go\'zal shaharga tashrif buyuring:',
                        RU: 'Загляните в красивый город:',
                        ENG: 'Visit the beautiful city:'
                    },
                    title: {
                        UZ: 'Dubay',
                        RU: 'Дубай',
                        ENG: 'Dubai'
                    },
                    go: {
                        UZ: 'O\'tish',
                        RU: 'Перейти',
                        ENG: 'Go'
                    },
                    population: {
                        UZ: 'Aholisi:',
                        RU: 'Население:',
                        ENG: 'Population'
                    },
                    pop: {
                        UZ: '8,66 mln',
                        RU: '8,66 млн',
                        ENG: '8,66 million'
                    },
                    area: {
                        UZ: 'Hududi:',
                        RU: 'Территория:',
                        ENG: 'Area'
                    },
                    are: {
                        UZ: '41,290 km²',
                        RU: '41,290 км²',
                        ENG: '41,290 km²'
                    },
                    price: {
                        UZ: 'O\'rtacha narx:',
                        RU: 'Средняя цена:',
                        ENG: 'Middle price'
                    },
                    cost: {
                        UZ: '1 100 200$',
                        RU: '1 100 200$',
                        ENG: '1 100 200$'
                    },
                    more: {
                        UZ: 'Ko\'proq',
                        RU: 'Узнать Больше',
                        ENG: 'Learn more'
                    }
                },
                {
                    url: 'https://www.excursionmarket.com/uploads/project_image/webp/city-tours-antalya-663c3b300bf99-85.webp',
                    text: {
                        UZ: 'Go\'zal shaharga tashrif buyuring:',
                        RU: 'Загляните в красивый город:',
                        ENG: 'Visit the beautiful city:'
                    },
                    title: {
                        UZ: 'Antaliya',
                        RU: 'Анталия',
                        ENG: 'Antalya'
                    },
                    go: {
                        UZ: 'O\'tish',
                        RU: 'Перейти',
                        ENG: 'Go'
                    },
                    population: {
                        UZ: 'Aholisi:',
                        RU: 'Население:',
                        ENG: 'Population'
                    },
                    pop: {
                        UZ: '67,41 mln',
                        RU: '67,41 млн',
                        ENG: '67,41 million'
                    },
                    area: {
                        UZ: 'Hududi:',
                        RU: 'Территория:',
                        ENG: 'Area'
                    },
                    are: {
                        UZ: '551,500 km²',
        
       
                        RU: '551,500 км²',
                        ENG: '551,500 km²'
                    },
                    price: {
                        UZ: 'O\'rtacha narx:',
                        RU: 'Средняя цена:',
                        ENG: 'Middle price'
                    },
                    cost: {
                        UZ: '425 600$',
                        RU: '425 600$',
                        ENG: '425 600$'
                    },
                    more: {
                        UZ: 'Ko\'proq',
                        RU: 'Узнать Больше',
                        ENG: 'Learn more'
                    }
                },
                {
                    url: 'https://www.domina.it/wp-content/uploads/sites/360/2024/04/entertainment.old-market.2.jpg',
                    text: {
                        UZ: 'Go\'zal shaharga tashrif buyuring:',
                        RU: 'Загляните в красивый город:',
                        ENG: 'Visit the beautiful city:'
                    },
                    title: {
                        UZ: 'Sharm El Sheikh',
                        RU: 'Шарм-эль-Шейх',
                        ENG: 'Sharm El Sheikh'
                    },
                    go: {
                        UZ: 'O\'tish',
                        RU: 'Перейти',
                        ENG: 'Go'
                    },
                    population: {
                        UZ: 'Aholisi:',
                        RU: 'Население:',
                        ENG: 'Population'
                    },
                    pop: {
                        UZ: '69,86 mln',
                        RU: '69,86 млн',
                        ENG: '69,86 million'
                    },
                    area: {
                        UZ: 'Hududi:',
                        RU: 'Территория:',
                        ENG: 'Area'
                    },
                    are: {
                        UZ: '513,120 km²',
                        RU: '513,120 км²',
                        ENG: '513,120 km²'
                    },
                    price: {
                        UZ: 'O\'rtacha narx:',
                        RU: 'Средняя цена:',
                        ENG: 'Middle price'
                    },
                    cost: {
                        UZ: '165 450$',
                        RU: '165 450$',
                        ENG: '165 450$'
                    },
                    more: {
                        UZ: 'Ko\'proq',
                        RU: 'Узнать Больше',
                        ENG: 'Learn more'
                    }
                }
            ];
        
        

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const currentImage = images[currentIndex];

    return (
        <div className="slider" style={{ backgroundImage: `url(${currentImage.url})` }}>
            <div className="slider-overlay">
                <div className="slide">
                    <div className="slide-text">{currentImage.text[language]}</div>
                    <div className="slide-title">{currentImage.title[language]}</div>
                    <button className="go">{currentImage.go[language]}</button>
                    <div className="data">
                        <div className="data-box">
                            <div className="people-res">
                                <div className="people">
                                    <div><i className="fa-solid fa-users"></i></div>
                                    <div>
                                        <h6>{currentImage.population[language]}</h6>
                                        <p>{currentImage.pop[language]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="people-res">
                                <div className="people">
                                    <div><i className="fa-solid fa-map"></i></div>
                                    <div>
                                        <h6>{currentImage.area[language]}</h6>
                                        <p>{currentImage.are[language]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="data-box">
                            <div className="people-res">
                                <div className="people">
                                    <div><i className="fa-solid fa-money-bill-wave"></i></div>
                                    <div>
                                        <h6>{currentImage.price[language]}</h6>
                                        <p>{currentImage.cost[language]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="people-res">
                               <div className="people">
                               <button>{currentImage.more[language]}</button>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`pagination-line ${index === currentIndex ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cities;
