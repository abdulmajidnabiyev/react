import React, { useRef } from 'react';
import './destination.css';
import train from '../../images/trail';
import plane from '../../images/plane';
import istanbul from '../../images/istanbul';
import dubai from '../../images/dubai';
import antalya from '../../images/antalya';
import egypt from '../../images/egypt';

const Destination = ({ language = 'ENG' }) => {
    return (
        <>
            <section className='destination'>
                <h1>
                    {language === 'UZ' ? 'Yo‘nalishlarni oson o‘rganing'
                        : language === 'RU' ? 'Исследуйте направления легко'
                            : 'Explore destinations with ease'}
                </h1>
                <h2>
                    {language === 'UZ' ? 'Har bir shaharda siz uchun ehtiyotkorlik bilan tanlangan temir yo‘l va aviachiptalar bo‘yicha eng yaxshi takliflarni toping'
                        : language === 'RU' ? 'Находите лучшие предложения на железнодорожные и авиабилеты в каждом городе, тщательно отобранные для вас'
                            : ' Find the best deals on train and flight tickets in every city, carefully selected for you'}
                </h2>
                <div className='trail'>
                    <div>
                        <img src={train} alt="" width="400px" />
                    </div>
                    <div>
                        <h3>
                            {language === 'UZ' ? 'Arzon temir yo‘l chiptalari bizda'
                                : language === 'RU' ? 'Дешевые железнодорожные билеты у нас'
                                    : ' Affordable train tickets with us'}
                        </h3>
                        <div className="res-btn">
                            <div className='trail-btn'>
                                <h4>
                                    {language === 'UZ' ? 'Global yo‘nalishlar'
                                        : language === 'RU' ? 'Глобальные направления'
                                            : '  Global destinations'}
                                </h4>
                                <button>
                                    {language === 'UZ' ? 'Batafsil ma\'lumot'
                                        : language === 'RU' ? 'Узнать Больше'
                                            : '   Learn More'}
                                </button>
                            </div>
                        </div>
                        <h5>
                            {language === 'UZ' ? ' Temir yo‘l sarguzashtiga chiqib, butun dunyo bo‘ylab yo‘nalishlarni o‘rganing. Go‘zal manzaralar, jonli shaharlar yoki madaniy xazinalar bo‘lsin, bizning temir yo‘l xizmatlarimiz butun dunyo bo‘ylab sayohat qilishning noyob va qulay usulini taklif etadi. Keng qamrovli temir yo‘l tarmog‘imiz orqali turli madaniyatlarning go‘zalligiga sho‘ng‘ing.'
                                : language === 'RU' ? 'Отправляйтесь в железнодорожное приключение и исследуйте направления по всему миру. Будь то живописные пейзажи, оживленные города или культурные сокровища, наши железнодорожные услуги предлагают уникальный и комфортабельный способ путешествовать по всему миру. Погрузитесь в красоту различных культур, доступных через наш обширный железнодорожный сеть. .'
                                    : 'Embark on a rail adventure and explore destinations around the world. Whether it’s scenic landscapes, bustling cities, or cultural treasures, our rail services offer a unique and comfortable way to travel across the globe. Immerse yourself in the beauty of diverse cultures accessible through our extensive railway network.'}
                        </h5>
                    </div>
                </div>
                <div className='trail-hr'></div>
                <div className='trail'>
                    <div>
                        <img src={plane} alt="" width="400px" />
                    </div>
                    <div>
                        <h3>
                            {language === 'UZ' ? ' Havo qatnovlari bo‘yicha ajoyib takliflarni kashf eting'
                                : language === 'RU' ? 'Откройте для себя захватывающие предложения по воздушным перевозкам'
                                    : ' Discover exciting air travel offers'}
                        </h3>
                        <div className="res-btn">
                            <div className='trail-btn'>
                                <h4>
                                    {language === 'UZ' ? 'Global yo‘nalishlar'
                                        : language === 'RU' ? 'Глобальные направления'
                                            : '  Global destinations'}
                                </h4>
                                <button>
                                    {language === 'UZ' ? 'Batafsil ma\'lumot'
                                        : language === 'RU' ? 'Узнать Больше'
                                            : '   Learn More'}
                                </button>
                            </div>
                        </div>
                        <h5>
                            {language === 'UZ' ? ' Temir yo‘l sarguzashtiga chiqib, butun dunyo bo‘ylab yo‘nalishlarni o‘rganing. Go‘zal manzaralar, jonli shaharlar yoki madaniy xazinalar bo‘lsin, bizning temir yo‘l xizmatlarimiz butun dunyo bo‘ylab sayohat qilishning noyob va qulay usulini taklif etadi. Keng qamrovli temir yo‘l tarmog‘imiz orqali turli madaniyatlarning go‘zalligiga sho‘ng‘ing.'
                                : language === 'RU' ? 'Отправляйтесь в железнодорожное приключение и исследуйте направления по всему миру. Будь то живописные пейзажи, оживленные города или культурные сокровища, наши железнодорожные услуги предлагают уникальный и комфортабельный способ путешествовать по всему миру. Погрузитесь в красоту различных культур, доступных через наш обширный железнодорожный сеть. .'
                                    : 'Embark on a rail adventure and explore destinations around the world. Whether it’s scenic landscapes, bustling cities, or cultural treasures, our rail services offer a unique and comfortable way to travel across the globe. Immerse yourself in the beauty of diverse cultures accessible through our extensive railway network.'}
                        </h5>
                    </div>
                </div>
                <div className='trail-hrr'></div>
                <h1 className='now'>
                    {language === 'UZ' ? 'Hozirning o‘zida mamlakatlarimizdan birini tashrif buyuring'
                        : language === 'RU' ? 'Посетите одну из наших стран прямо сейчас'
                            : ' Visit one of our countries right now'}
                </h1>
                <h2>
                    {language === 'UZ' ? 'Har bir shaharda siz uchun maxsus tanlangan eng yaxshi takliflarni kashf eting. Chegirmalar olamiga sho‘ng‘ing va tengsiz taassurotlardan bahramand bo‘ling.'
                        : language === 'RU' ? 'Откройте для себя лучшие предложения в каждом городе, специально подобранные для вас. Погрузитесь в мир скидок и наслаждайтесь непревзойденными впечатлениями.'
                            : ' Discover the best offers in every city, specially curated for you. Dive into a world of discounts and enjoy unmatched experiences.'}
                </h2>
                <div className='trail'>
                    <div>
                        <img src={istanbul} alt="" width="400px" />
                    </div>
                    <div>
                        <h3>
                            {language === 'UZ' ? ' Istanbul'
                                : language === 'RU' ? 'Стамбул'
                                    : ' Istanbul'}
                        </h3>
                        <div className="res-btn">
                            <div className='trail-btn'>
                                <h4>
                                    {language === 'UZ' ? 'Turkiya'
                                        : language === 'RU' ? 'Турция'
                                            : 'Turkey   '}
                                </h4>
                                <button>
                                    {language === 'UZ' ? 'Batafsil ma\'lumot'
                                        : language === 'RU' ? 'Узнать Больше'
                                            : '   Learn More'}
                                </button>
                            </div>
                        </div>
                        <h5>
                            {language === 'UZ' ? ' Istanbul – Turkiyaning eng ko‘p aholiga ega shahri, uning madaniy, iqtisodiy va tarixiy markazi. Turkiyaning shimoli-g‘arbiy qismida joylashgan, Bosfor orqali Yevropa va Osiyo qismlariga bo‘lingan, Marmar dengizi va Qora dengizni birlashtiradi. Bu shahar dunyoda ikki qit\'ada joylashgan yagona shahardir.'
                                : language === 'RU' ? 'Стамбул - самый населенный город в Турции и его культурный, экономический и исторический центр. Расположенный в северо-западной части Турции, разделенный Босфором на европейскую и азиатскую стороны, который соединяет Мраморное море и Черное море. Этот город единственный в мире, который находится на двух континентах.'
                                    : 'Istanbul is the most populous city in Turkey and its cultural, economic, and historical center. Located in the northwestern part of Turkey, it is divided by the Bosphorus into European and Asian sides, connecting the Sea of Marmara and the Black Sea. This city is the only one in the world located on two continents.'}
                        </h5>
                        <div className='train-hr'></div>
                        <div className='train-box'>
                            <h6>
                                {language === 'UZ' ? '67,41 million kishi'
                                    : language === 'RU' ? ' 67.41 млн. человек'
                                        : '67.41 million people'}
                            </h6>
                            <h6>
                                {language === 'UZ' ? ' 551,500 km²'
                                    : language === 'RU' ? ' 551,500 км²'
                                        : ' 551,500 km²'}
                            </h6>
                            <h6>
                                425,600$
                            </h6>
                        </div>

                        <div className='train-hr'></div>
                        <div className='need'>
                            {language === 'UZ' ? 'Yo‘riqnomalar kerakmi?'
                                : language === 'RU' ? 'Нужны указания?'
                                    : 'Do you need directions?'}
                        </div>
                    </div>
                </div>
                <div className='trail'>
                    <div>
                        <img src={dubai} alt="" width="400px" />
                    </div>
                    <div>
                        <h3>
                            {language === 'UZ' ? ' Dubay'
                                : language === 'RU' ? 'Дубай'
                                    : 'Dubai'}
                        </h3>
                        <div className="res-btn">
                            <div className='trail-btn'>
                                <h4>
                                    {language === 'UZ' ? 'BAA'
                                        : language === 'RU' ? 'ОАЕ'
                                            : 'UAE'}
                                </h4>
                                <button>
                                    {language === 'UZ' ? 'Batafsil ma\'lumot'
                                        : language === 'RU' ? 'Узнать Больше'
                                            : '   Learn More'}
                                </button>
                            </div>
                        </div>
                        <h5>
                            {language === 'UZ' ? ' Dubay – Birlashgan Arab Amirliklaridagi shahar va emirlik bo‘lib, o‘zining hashamatli do‘konlari, zamonaviy arxitekturasi va jonli tungi hayoti bilan mashhur. Burj Xalifa, 830 metr balandlikdagi minorasi shahar osmono‘par binolariga ega. Uning poyonida Dubay favvorasi joylashgan bo‘lib, uning suvlari va yorug‘ligi musiqa ritmiga mos ravishda o‘zgaradi. Sun\'iy orollarda joylashgan "Atlantis, Palm" mehmonxonasi akvapark va dengiz hayvonlari bog‘iga ega.'
                                : language === 'RU' ? 'Дубай - город и эмират в Объединенных Арабских Эмиратах, известный своими роскошными магазинами, ультрасовременной архитектурой и оживленной ночной жизнью. Бурдж Халифа, башня высотой 830 м, владеет небоскребами города. У ее основания находится фонтан Дубая, струи и свет которого корректируются под музыку. На искусственных островах в море находится отель "Атлантис, Пальм", с аквапарком и парком морских животных.'
                                    : 'Dubai is a city and emirate in the United Arab Emirates, known for its luxury shops, ultramodern architecture, and vibrant nightlife. The Burj Khalifa, a tower 830 meters tall, dominates the city\'s skyscrapers. At its base is the Dubai Fountain, whose jets and lights are synchronized with music. On artificial islands in the sea stands the "Atlantis, Palm" hotel, featuring a water park and a marine animal park.'}
                        </h5>
                        <div className='train-hr'></div>
                        <div className='train-box'>
                            <h6>
                                {language === 'UZ' ? '8,66 million kishi'
                                    : language === 'RU' ? ' 8,66 млн. человек'
                                        : '8,66 million people'}
                            </h6>
                            <h6>
                                {language === 'UZ' ? ' 41,290 km²'
                                    : language === 'RU' ? ' 41,290 км²'
                                        : ' 41,290 km²'}
                            </h6>
                            <h6>
                                1,100,200$
                            </h6>
                        </div>

                        <div className='train-hr'></div>
                        <div className='need'>
                            {language === 'UZ' ? 'Yo‘riqnomalar kerakmi?'
                                : language === 'RU' ? 'Нужны указания?'
                                    : 'Do you need directions?'}
                        </div>
                    </div>
                </div>
                <div className='trail'>
                    <div>
                        <img src={antalya} alt="" width="400px" />
                    </div>
                    <div>
                        <h3>
                            {language === 'UZ' ? 'Antalya'
                                : language === 'RU' ? 'Анталья'
                                    : 'Antalya'}
                        </h3>
                        <div className="res-btn">
                            <div className='trail-btn'>
                                <h4>
                                    {language === 'UZ' ? 'Turkiya'
                                        : language === 'RU' ? 'Турция'
                                            : 'Turkey   '}
                                </h4>
                                <button>
                                    {language === 'UZ' ? 'Batafsil ma\'lumot'
                                        : language === 'RU' ? 'Узнать Больше'
                                            : '   Learn More'}
                                </button>
                            </div>
                        </div>
                        <h5>
                            {language === 'UZ' ? '  Antaliya – Turkiyaning eng tez o‘sayotgan shahri bo‘lib, dunyoning turli burchaklaridan kelgan sayohatchilar uning ajoyib plyajlari va an\'anaviy turk madaniyatining noyob uyg‘unligini kashf etishadi. Bolalar Plyaj parkini yoqtirishadi, bu yerda Akvalend (tog‘ni sevuvchilar uchun orzu) va Delfinariy (delfinlar, dengiz arslonlari va oq kitlar uchun uy) mavjud. Shuningdek, shaharning eski markazini o‘rganib, Adriyan darvozasiga qarashni unutmang.'
                                : language === 'RU' ? 'Анталья - самый быстрорастущий город в Турции, и туристы со всего мира открывают для себя его фантастическое сочетание великолепных пляжей и традиционной турецкой культуры. Дети полюбят Пляжный парк, где есть Акваленд (мечта любителя горок) и Дельфинарий (дом для дельфинов, морских львов и белых китов). Обязательно исследуйте старый центр города и посмотрите на Ворота Адриана.'
                                    : 'Antalya is the fastest-growing city in Turkey, and tourists from all over the world are discovering its fantastic blend of magnificent beaches and traditional Turkish culture. Children will love the Beach Park, which features AquaLand (a dream for roller coaster enthusiasts) and a Dolphinarium (home to dolphins, sea lions, and white whales). Be sure to explore the old town and check out Hadrian\'s Gate.'}
                        </h5>
                        <div className='train-hr'></div>
                        <div className='train-box'>
                            <h6>
                                {language === 'UZ' ? '44,48 million kishi'
                                    : language === 'RU' ? ' 44,48 млн. человек'
                                        : '44,48 million people'}
                            </h6>
                            <h6>
                                {language === 'UZ' ? ' 275,400 km²'
                                    : language === 'RU' ? ' 275,400 км²'
                                        : ' 275,400 km²'}
                            </h6>
                            <h6>
                                $946,000
                            </h6>
                        </div>

                        <div className='train-hr'></div>
                        <div className='need'>
                            {language === 'UZ' ? 'Yo‘riqnomalar kerakmi?'
                                : language === 'RU' ? 'Нужны указания?'
                                    : 'Do you need directions?'}
                        </div>
                    </div>
                </div>
                <div className='trail'>
                    <div>
                        <img src={dubai} alt="" width="400px" />
                    </div>
                    <div>
                        <h3>
                            {language === 'UZ' ? ' Sharm-el-Sheyx'
                                : language === 'RU' ? 'Шарм-эль-Шейх'
                                    : 'Sharm-el-Sheikh'}
                        </h3>
                        <div className="res-btn">
                            <div className='trail-btn'>
                                <h4>
                                    {language === 'UZ' ? 'Misr'
                                        : language === 'RU' ? 'Египет'
                                            : 'Egypt'}
                                </h4>
                                <button>
                                    {language === 'UZ' ? 'Batafsil ma\'lumot'
                                        : language === 'RU' ? 'Узнать Больше'
                                            : '   Learn More'}
                                </button>
                            </div>
                        </div>
                        <h5>
                            {language === 'UZ' ? 'Sharm-el-Shayx - Sinay yarim orolida sayyohlik faolligining markazi bo‘lib, dunyodagi eng yaxshi sayozlovchi joylar shu yerda joylashgan. Ayniqsa, Ras-Muhammed milliy bog‘ining suv osti mo‘jizalari, bu shaharni butunlay yangi darajaga ko‘taradi. Shaharda sayozlovchilar uchun joylar va cho‘kib ketgan kemalar mavjud bo‘lib, ular butun dunyodan ilg‘or va havaskor sayozlovchilarni jalb qiladi, ularga Qizil dengizning noyob dengiz hayotini kashf etish imkoniyatini beradi.'
                                : language === 'RU' ? 'Шарм-эль-Шейх - центр туристической активности на полуострове Синаи, и здесь находятся лучшие места для дайвинга в мире. Особенно подводные чудеса национального парка Рас-Мухаммед, которые подняли город Шарм на совершенно новый уровень. В городе есть места для дайвинга и затонувшие корабли, которые привлекают продвинутых и любителей дайвинга со всего мира, чтобы открыть для себя уникальную морскую жизнь в глубинах Красного моря.'
                                    : ' Sharm El Sheikh is the center of tourist activity on the Sinai Peninsula, and it is home to some of the best diving spots in the world. Especially the underwater wonders of Ras Mohammed National Park, which have taken the city of Sharm to a whole new level. The city features diving spots and sunken ships, attracting both advanced divers and enthusiasts from all over the world to discover the unique marine life beneath the Red Sea.'}
                        </h5>
                        <div className='train-hr'></div>
                        <div className='train-box'>
                            <h6>
                                {language === 'UZ' ? '67.41 million kishi'
                                    : language === 'RU' ? ' 67.41 млн. человек'
                                        : '67.41million people'}
                            </h6>
                            <h6>
                                {language === 'UZ' ? ' 551,500 km²'
                                    : language === 'RU' ? ' 551,500 км²'
                                        : ' 551,500 km²'}
                            </h6>
                            <h6>
                                $425,600
                            </h6>
                        </div>
                        <div className='train-hr'></div>
                        <div className='need'>
                            {language === 'UZ' ? 'Yo‘riqnomalar kerakmi?'
                                : language === 'RU' ? 'Нужны указания?'
                                    : 'Do you need directions?'}
                        </div>
                    </div>
                </div>
                <div className="hrr">
                </div>
            </section>
        </>
    )
}

export default Destination