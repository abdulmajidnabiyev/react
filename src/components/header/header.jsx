import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-scroll';

const Header = ({ language, onLanguageChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);  // Header ko'rinishini boshqarish

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Skrollni kuzatish
    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScrollTop) {
                // Pastga skroll qilinganida header yashirin bo'lsin
                setIsHeaderVisible(false);
            } else {
                // Yuqoriga skroll qilinganida header ko'rinsin
                setIsHeaderVisible(true);
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Skroll pastga o'tsa to'xtaydi
        };

        window.addEventListener('scroll', handleScroll);

        // Tozalash
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Faqat fonni blur qilish
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Foydalanuvchi skroll qilishini to'xtatish
            document.body.style.position = 'fixed'; // Sahifa holatini bloklash
            document.body.style.width = '100%'; // Sahifa o'lchamini o'zgartirmaslik uchun
            // document.body.style.filter = 'blur(5px)'; // Faqat body ni bulash
        } else {
            document.body.style.overflow = ''; // Skrollni tiklash
            document.body.style.position = ''; // Sahifa holatini tiklash
            document.body.style.width = ''; // Sahifa o'lchamini tiklash
            document.body.style.filter = ''; // Blurni olib tashlash
        }

        return () => {
            document.body.style.filter = ''; // Komponent unmount bo'lganda blurni olib tashlash
        };
    }, [isMenuOpen]);

    return (
        <>
            <section className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
                <div className="head">
                    <h1>Travel</h1>
                    <div className='ul'>
                        <div><Link to='home' smooth={true} duration={800}>{language === 'UZ' ? 'Asosiy' : language === 'RU' ? 'Главная' : 'Home'}</Link></div>
                        <div><Link to='about' smooth={true} duration={800}>{language === 'UZ' ? 'Biz Haqimizda' : language === 'RU' ? 'О Нас' : 'About Us'}</Link></div>
                        <div><Link to='tour' smooth={true} duration={800}>{language === 'UZ' ? 'Sayohatlar' : language === 'RU' ? 'Туры' : 'Tours'}</Link></div>
                        <div><Link to='contact' smooth={true} duration={800}>{language === 'UZ' ? 'Aloqa' : language === 'RU' ? 'Контакты' : 'Contacts'}</Link></div>
                    </div>
                    <div>
                        <button onClick={() => onLanguageChange('UZ')}>UZ</button>
                        <button onClick={() => onLanguageChange('RU')}>RU</button>
                        <button onClick={() => onLanguageChange('ENG')}>ENG</button>
                        <button className='tg'>
                            <a href="https://t.me/abdulmajidnabiyev" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </button>

                        <button className='insta'>
                            <a href="https://www.instagram.com/n.abdulmajid7" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </button>

                    </div>
                </div>

                <div className='menu'>
                    {!isMenuOpen ? (
                        <button className='header-menu' onClick={toggleMenu}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    ) : (
                        <button className='close-btn' onClick={toggleMenu}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    )}
                </div>
            </section>

            {isMenuOpen && (
                <div className='modal'>
                    <div className='ul'>
                        <div><Link to='home' smooth={true} duration={800} onClick={toggleMenu}>{language === 'UZ' ? 'Asosiy' : language === 'RU' ? 'Главная' : 'Home'}</Link></div>
                        <div><Link to='about' smooth={true} duration={800} onClick={toggleMenu}>{language === 'UZ' ? 'Biz Haqimizda' : language === 'RU' ? 'О Нас' : 'About Us'}</Link></div>
                        <div><Link to='tour' smooth={true} duration={800} onClick={toggleMenu}>{language === 'UZ' ? 'Sayohatlar' : language === 'RU' ? 'Туры' : 'Tours'}</Link></div>
                        <div><Link to='contact' smooth={true} duration={800} onClick={toggleMenu}>{language === 'UZ' ? 'Aloqa' : language === 'RU' ? 'Контакты' : 'Contacts'}</Link></div>
                    </div>
                    <div>
                        <button onClick={() => { onLanguageChange('UZ'); toggleMenu(); }}>UZ</button>
                        <button onClick={() => { onLanguageChange('RU'); toggleMenu(); }}>RU</button>
                        <button onClick={() => { onLanguageChange('ENG'); toggleMenu(); }}>ENG</button>
                        <button onClick={toggleMenu}><i className="fa-brands fa-telegram"></i></button>
                        <button onClick={toggleMenu}><i className="fa-brands fa-instagram"></i></button>
                    </div>
                </div>
            )}
        </> 
    );
}

export default Header;
