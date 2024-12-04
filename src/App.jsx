import React, { useState } from 'react';
import Header from './components/header/header';  // Header komponentasini import qilamiz
import Cities from './components/cities/cities';  // Cities komponentasini import qilamiz
import Sliders from './components/sliders/sliders';
import Tour from './components/tour/tour';
import Destination from './components/destination/destination';
import Metro from './components/metro/metro'
import Footer from './components/footer/footer';
import { Element } from 'react-scroll';
const App = () => {
    const [language, setLanguage] = useState('UZ');  // Boshlang'ich tilni Uzbekcha qilib belgilaymiz

    const handleLanguageChange = (lang) => {
        setLanguage(lang);  // Tilni o'zgartirish
    };

    return (
        <div>

            <Element> <Header language={language} onLanguageChange={handleLanguageChange} /></Element>  {/* Headerga tilni o'zgartirish funksiyasini va til holatini uzatamiz */}
            <Element name='home'> <Cities language={language} /></Element>  {/* Citiesga tilni prop sifatida uzatamiz */}
            <Element> <Sliders language={language} /></Element>
            <Element> <Tour language={language} /></Element>
            <Element name='tour'>  <Destination language={language} /></Element>
            <Element name='contact'><Metro language={language} /></Element>
            <Element name='about'> <Footer language={language} /></Element>

        </div>
    );
};

export default App;
