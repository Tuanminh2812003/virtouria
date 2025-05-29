import { GoArrowUpLeft } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import FestivalCard from "../../Components/FestivalCard";
import { useState, useEffect, useContext, Suspense } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import festivals from "../../constants/data";
import ModelCanvas from "../../Components/ModelCanvas/modelCanvas";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./Home.scss";

function Home() {

    const { language, changeLanguage } = useContext(LanguageContext);

    const [selectedIndex, setSelectedIndex] = useState(1);
    const selectedFestival = festivals[selectedIndex];

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev - 1 + festivals.length) % festivals.length);
    };

        const handleNext = () => {
        setSelectedIndex((prev) => (prev + 1) % festivals.length);
    };

    const visibleThumbnails = [
    festivals[(selectedIndex - 1 + festivals.length) % festivals.length],
    festivals[selectedIndex],
    festivals[(selectedIndex + 1) % festivals.length],
    ];
    return (
        <>
            <div className="home">
                <div className="home__section1">
                    <div className="home__section1__background">
                    </div>
                    <div className="container-main">
                        <div className="home__section1__inner">
                            <div className="home__section1__inner__disc">
                                {language === "EN" ? "EXPLORE FIVE CONTAINERS" : "KHÁM PHÁ NĂM CHÂU"}
                            </div>
                            <div className="home__section1__inner__title">
                                {language === "EN" ? "CULTURAL ESSENCE" : "TINH HOA VĂN HÓA"}
                            </div>
                            <div className="home__section1__inner__text">
                                {language === "EN" ? "Experience meticulously detailed 3D cultural products before creating them yourself when participating in Virtouria's unique tours!" : "Trải nghiệm những sản phẩm văn hóa 3D một cách tỉ mỉ trước khi trực tiếp sáng tạo khi tham gia các tour du lịch độc nhất vô nhị của Virtouria!"}
                            </div>
                            <div className="home__section1__inner__button">
                                <div className="home__section1__inner__button__back">

                                </div>
                                <div className="home__section1__inner__button__inner">
                                    <a href="/">
                                        <div className="home__section1__inner__button__inner__icon">
                                        <GoArrowUpLeft />
                                        </div>
                                        <div className="home__section1__inner__button__inner__text">
                                            {language === "EN" ? "Festival Tours" : "Tours Lễ Hội"}
                                        </div>
                                    </a>
                                    <a href="/game">
                                        <div className="home__section1__inner__button__inner__icon">
                                        <GoArrowUpLeft />
                                        </div>
                                        <div className="home__section1__inner__button__inner__text">
                                            {language === "EN" ? "Virtual Explore" : "Trải Nghiệm ảo"}
                                        </div>
                                    </a>
                                    <a href="/">
                                        <div className="home__section1__inner__button__inner__icon">
                                        <GoArrowUpLeft />
                                        </div>
                                        <div className="home__section1__inner__button__inner__text">
                                            {language === "EN" ? "Reviews" : "Review Trải Nghiệm"}
                                        </div>
                                    </a>
                                    <div className="home__section1__inner__button__inner__input">
                                        {language === "EN" ? (
                                            <>
                                                <input type="text" placeholder="Finding everything"/>
                                                <div className="home__section1__inner__button__inner__input__icon">
                                                    <IoIosSearch />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <input type="text" placeholder="Tìm kiếm mọi thứ"/>
                                                <div className="home__section1__inner__button__inner__input__icon">
                                                    <IoIosSearch />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/VIRTOURIA.png" className="home__section1__virt"/>
                </div>
                <div className="home__section2" id="home__section2">
                    <div className="container-main">
                        <div className="home__section2__inner">
                            <div className="home__section2__inner__title">
                                {language === "EN" ? "Countless Festivals" : "MUÔN VÀN LỄ HỘI"}
                            </div>
                            <div className="home__section2__inner__disc">
                                {language === "EN" ? "Immerse yourself in the vibrant atmosphere and experience unique festivals that showcase the rich local culture at every destination you visit!" : "Hòa mình vào không khí sôi động để trải nghiệm những lễ hội độc nhất vô nhị mang đậm bản sắc địa phương tại từng nơi bạn ghé qua!"}
                            </div>
                            <div className="festival-grid">
                                {festivals.map((festival, index) => (
                                    <FestivalCard
                                        key={index}
                                        image={festival.image}
                                        tall={festival.tall}
                                        title={language === "EN" ? festival.titleEN : festival.titleVN}
                                        description={language === "EN" ? festival.descriptionEN : festival.descriptionVN}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__section3">
                    <div className="container-main">
                        <div className="home__section3__inner">
                        <div className="home__section3__inner__title">
                            {language === "EN" ? "UNIQUE CULTURAL PRODUCTS" : "SẢN PHẨM VĂN HÓA ĐẶC TRƯNG"}
                        </div>
                        <div className="home__section3__inner__disc">
                            {language === "EN"
                            ? "Join a simulation game to create cultural products from local festivals and gain a deeper understanding of your destination!"
                            : "Tham gia trò chơi mô phỏng để tạo ra các sản phẩm văn hóa từ các lễ hội địa phương và hiểu sâu hơn về điểm đến của bạn!"}
                        </div>
                        <div className="home__section3__inner__content">
                            <div className="home__section3__inner__content__view">
                            {/* Canvas with styled border */}
                            <div
                                style={{
                                borderRadius: "16px",
                                overflow: "hidden",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                                border: "1px solid #ccc",
                                width: "80%",
                                height: "60vh",
                                position: "relative",
                                marginTop: "32px",
                                }}
                            >
                                <ModelCanvas style={{ width: "20vw", height: "100%" }} modelUrl={selectedFestival.model} />

                                <div className="home__section3__inner__content__view__text">
                                    <div className="home__section3__inner__content__view__text__title">
                                        {language === "EN" ? selectedFestival.titleEN : selectedFestival.titleVN}
                                    </div>
                                    <div className="home__section3__inner__content__view__text__disc">
                                        {language === "EN" ? selectedFestival.descriptionEN : selectedFestival.descriptionVN}
                                    </div>
                                </div>
                                <div className="home__section3__inner__content__view__button">
                                    <div className="home__section3__inner__content__view__button__left">
                                        <a href={selectedFestival.Web} target="_blank" rel="noopener noreferrer">
                                            <div className="home__section3__inner__content__slide__view__right__button1__text">
                                                {language === "EN" ? "Booking Now" : "Đặt tour ngay"}
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home__section3__inner__content__view__button__right">
                                        <a href={selectedFestival.Web} target="_blank" rel="noopener noreferrer">
                                            <div className="home__section3__inner__content__slide__view__right__button1__text">
                                                {language === "EN" ? "Virtual Explore" : "Trải nghiệm ảo"}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* Thumbnail slider */}
                            <div className="home__section3__inner__content__slide d-flex align-items-center gap-2 mt-3">
                            <button
                                onClick={handlePrev}
                            >
                                <IoIosArrowBack />
                            </button>

                            {visibleThumbnails.map((festival, i) => {
                                const realIndex = (selectedIndex - 1 + i + festivals.length) % festivals.length;
                                return (
                                    <div
                                    key={realIndex}
                                    className={`home__section3__inner__content__slide__item ${realIndex === selectedIndex ? "active" : ""}`}
                                    onClick={() => setSelectedIndex(realIndex)}
                                    style={{
                                        backgroundImage: `url(${festival.imageModel})`,
                                        backgroundSize: "cover",
                                        borderRadius: 16,
                                        cursor: "pointer",
                                        filter: realIndex === selectedIndex ? "none" : "grayscale(100%)",
                                        border: realIndex === selectedIndex ? "2px solid #3498db" : "2px solid transparent",
                                        transform: realIndex === selectedIndex ? "scale(1.05)" : "scale(1)",
                                        transition: "all 0.3s ease",
                                    }}
                                    />
                                );
                            })}

                            <button
                                onClick={handleNext}
                            >
                                <IoIosArrowForward />
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="home__section4">
                    <div className="container-main">
                        <div className="home__section4__inner">
                            <div className="home__section4__inner__title">
                                {language === "EN" ? "LET THE EXPERTS GIVE YOU VALUABLE ADVICE!" : "HÃY ĐỂ NHỮNG CHUYÊN GIA CHO BẠN LỜI KHUYÊN BỔ ÍCH!"}
                            </div>
                            <div className="home__section4__inner__disc">
                                {language === "EN" ? "Travel experts' reviews will greatly enhance your journey. Don't forget to ask questions and leave reviews to become an expert yourself!" : "Những đánh giá của những chuyên gia về du lịch sẽ giúp ích rất nhiều cho chuyến hành trình của bạn và đừng quên đặt câu hỏi và đánh giá để sớm trở thành chuyên gia nhé!"}
                                
                            </div>
                            <div className="home__section4__inner__content">
                                <div className="home__section4__inner__content__item">
                                    <img src="/comment.png" alt="" className="home__section4__inner__content__item__decor"/>
                                    <div className="home__section4__inner__content__item__profile">
                                        <div className="home__section4__inner__content__item__profile__left">
                                            <div className="home__section4__inner__content__item__profile__left__ava" style={{backgroundImage: "url(/Ava/a1.jpg)"}}>

                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__profile__right">
                                            <div className="home__section4__inner__content__item__profile__right__name">
                                                <div className="home__section4__inner__content__item__profile__right__name__text">
                                                    Julie Mei
                                                </div>
                                                <div className="home__section4__inner__content__item__profile__right__name__icon">
                                                    <BsFillPatchCheckFill />
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__profile__right__tag">
                                                @juliemeiii09
                                            </div>
                                            <div className="home__section4__inner__content__item__profile__right__like">
                                                <div className="home__section4__inner__content__item__profile__right__like__item">
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__number">
                                                            3979
                                                        </div>
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__icon">
                                                            <BsFillPersonFill />
                                                        </div>
                                                    </div>
                                                    <div className="home__section4__inner__content__item__profile__right__like__item">
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__number">
                                                            8668
                                                        </div>
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__icon">
                                                            <FaHeart />
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home__section4__inner__content__item__comment">
                                        <div className="home__section4__inner__content__item__comment__up" style={{backgroundImage: "url(/Tour/t1.png)"}}>
                                            <div className="home__section4__inner__content__item__comment__up__back">

                                            </div>
                                            <div className="home__section4__inner__content__item__comment__up__title">
                                                {language === "EN" ? "Quang Phu Cau Incense Village" : "Làng Hương Quảng Phú Cầu, Việt Nam"}
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__mid">
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <FaStar />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    4.0
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <CiHeart />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    619
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <IoChatbubbleOutline />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    1.1k
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__button">
                                                <div className="home__section4__inner__content__item__comment__mid__button__text">
                                                    {language === "EN" ? "See more" : "Xem thêm"}
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__button__icon">
                                                    <GoArrowUpRight />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__down">
                                            Just got back from Xuan Cau Village, and it was such a cool experience! The place is super peaceful, and the locals are really friendly. I loved walking around, checking out the traditional crafts, and trying some amazing local food. Definitely a great spot if you want...
                                        </div>
                                    </div>
                                    <div className="home__section4__inner__content__item__comment">
                                        <div className="home__section4__inner__content__item__comment__up" style={{backgroundImage: "url(/Tour/t8.png)"}}>
                                            <div className="home__section4__inner__content__item__comment__up__back">
                                                
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__up__title">
                                                {language === "EN" ? "Munich Beer Festival" : "Lễ Hội Bia Munich, Đức"}
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__mid">
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <FaStar />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    5.0
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <CiHeart />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    1.3k
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <IoChatbubbleOutline />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    1.2k
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__button">
                                                <div className="home__section4__inner__content__item__comment__mid__button__text">
                                                        {language === "EN" ? "See more" : "Xem thêm"}
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__button__icon">
                                                    <GoArrowUpRight />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__down">
                                            I back from Oktoberfest in Germany, and it was absolutely amazing! The energy was incredible, the beer was top-notch, and everyone was so enthusiastic. People were raising their glasses, singing, and dancing in traditional outfits – it felt like the whole city was cel...
                                        </div>
                                    </div>
                                </div>
                                <div className="home__section4__inner__content__item">
                                    <img src="/comment.png" alt="" className="home__section4__inner__content__item__decor"/>
                                    <div className="home__section4__inner__content__item__profile">
                                        <div className="home__section4__inner__content__item__profile__left">
                                            <div className="home__section4__inner__content__item__profile__left__ava" style={{backgroundImage: "url(/Ava/a2.jpg)"}}>

                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__profile__right">
                                            <div className="home__section4__inner__content__item__profile__right__name">
                                                <div className="home__section4__inner__content__item__profile__right__name__text">
                                                    Nhat An
                                                </div>
                                                <div className="home__section4__inner__content__item__profile__right__name__icon">
                                                    <BsFillPatchCheckFill />
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__profile__right__tag">
                                                @ngnhatan_bp
                                            </div>
                                            <div className="home__section4__inner__content__item__profile__right__like">
                                                <div className="home__section4__inner__content__item__profile__right__like__item">
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__number">
                                                            1200
                                                        </div>
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__icon">
                                                            <BsFillPersonFill />
                                                        </div>
                                                    </div>
                                                    <div className="home__section4__inner__content__item__profile__right__like__item">
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__number">
                                                            3020
                                                        </div>
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__icon">
                                                            <FaHeart />
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home__section4__inner__content__item__comment">
                                        <div className="home__section4__inner__content__item__comment__up" style={{backgroundImage: "url(/Tour/t6.png)"}}>
                                            <div className="home__section4__inner__content__item__comment__up__back">

                                            </div>
                                            <div className="home__section4__inner__content__item__comment__up__title">
                                                {language === "EN" ? "Sky Lantern Festival, Taiwan" : "Lễ Hội Thả Đèn Trời, Đài Loan"}
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__mid">
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <FaStar />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    4.0
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <CiHeart />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    321
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <IoChatbubbleOutline />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    989
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__button">
                                                <div className="home__section4__inner__content__item__comment__mid__button__text">
                                                        {language === "EN" ? "See more" : "Xem thêm"}
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__button__icon">
                                                    <GoArrowUpRight />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__down">
                                            Nhìn hàng ngàn chiếc đèn trời bay lên trong màn đêm, mang theo những ước nguyện và hy vọng, là một trải nghiệm khó quên. Bầu không khí tràn ngập sự háo hức và niềm tin, với mọi người từ khắp nơi trên thế giới cùng nhau tham gia. Nếu có cơ hội, nhất định đừng...
                                        </div>
                                    </div>
                                    <div className="home__section4__inner__content__item__comment">
                                        <div className="home__section4__inner__content__item__comment__up" style={{backgroundImage: "url(/Tour/t4.png)"}}>
                                            <div className="home__section4__inner__content__item__comment__up__back">
                                                
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__up__title">
                                                {language === "EN" ? "Elephant Racing Festival, Vietnam" : "Lễ Hội Đua Voi, Việt Nam"}
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__mid">
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <FaStar />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    4.5
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <CiHeart />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    890
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <IoChatbubbleOutline />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    1.2k
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__button">
                                                <div className="home__section4__inner__content__item__comment__mid__button__text">
                                                        {language === "EN" ? "See more" : "Xem thêm"}
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__button__icon">
                                                    <GoArrowUpRight />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__down">
                                            Mới đi Hội đua voi ở Đắk Lắk về, phải nói là quá ấn tượng! Không khí náo nhiệt, những chú voi to lớn nhưng cực kỳ dẻo dai và mạnh mẽ. Người dân địa phương thân thiện, văn hóa Tây Nguyên đậm chất truyền thống. Nếu ai muốn trải nghiệm một lễ hội độc...
                                        </div>
                                    </div>
                                </div>
                                <div className="home__section4__inner__content__item">
                                    <img src="/comment.png" alt="" className="home__section4__inner__content__item__decor"/>
                                    <div className="home__section4__inner__content__item__profile">
                                        <div className="home__section4__inner__content__item__profile__left">
                                            <div className="home__section4__inner__content__item__profile__left__ava" style={{backgroundImage: "url(/Ava/a3.jpg)"}}>

                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__profile__right">
                                            <div className="home__section4__inner__content__item__profile__right__name">
                                                <div className="home__section4__inner__content__item__profile__right__name__text">
                                                    Müller
                                                </div>
                                                <div className="home__section4__inner__content__item__profile__right__name__icon">
                                                    <BsFillPatchCheckFill />
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__profile__right__tag">
                                                @johannmuller12
                                            </div>
                                            <div className="home__section4__inner__content__item__profile__right__like">
                                                <div className="home__section4__inner__content__item__profile__right__like__item">
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__number">
                                                            1190
                                                        </div>
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__icon">
                                                            <BsFillPersonFill />
                                                        </div>
                                                    </div>
                                                    <div className="home__section4__inner__content__item__profile__right__like__item">
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__number">
                                                            2969
                                                        </div>
                                                        <div className="home__section4__inner__content__item__profile__right__like__item__icon">
                                                            <FaHeart />
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home__section4__inner__content__item__comment">
                                        <div className="home__section4__inner__content__item__comment__up" style={{backgroundImage: "url(/Tour/t2.png)"}}>
                                            <div className="home__section4__inner__content__item__comment__up__back">

                                            </div>
                                            <div className="home__section4__inner__content__item__comment__up__title">
                                                {language === "EN" ? "Bat Trang Pottery Village, Vietnam" : "Làng Gốm Bát Tràng, Việt Nam"}
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__mid">
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <FaStar />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    4.0
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <CiHeart />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    220
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <IoChatbubbleOutline />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    350
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__button">
                                                <div className="home__section4__inner__content__item__comment__mid__button__text">
                                                        {language === "EN" ? "See more" : "Xem thêm"}
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__button__icon">
                                                    <GoArrowUpRight />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__down">
                                            Das Töpfern in Bat Trang war eine wunderbare Erfahrung! Es war faszinierend zu sehen, wie geschickte Handwerker die Keramik formen, und es hat riesigen Spaß gemacht, selbst etwas zu gestalten. Eine perfekte Mischung aus Kreativität und Tradition absolut...
                                        </div>
                                    </div>
                                    <div className="home__section4__inner__content__item__comment">
                                        <div className="home__section4__inner__content__item__comment__up" style={{backgroundImage: "url(/Tour/t4.png)"}}>
                                            <div className="home__section4__inner__content__item__comment__up__back">
                                                
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__up__title">
                                                {language === "EN" ? "Elephant Racing Festival, Vietnam" : "Lễ Hội Đua Voi, Việt Nam"}
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__mid">
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <FaStar />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    4.5
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <CiHeart />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    420
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__item">
                                                <div className="home__section4__inner__content__item__comment__mid__item__icon">
                                                    <IoChatbubbleOutline />
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__item__text">
                                                    120
                                                </div>
                                            </div>
                                            <div className="home__section4__inner__content__item__comment__mid__button">
                                                <div className="home__section4__inner__content__item__comment__mid__button__text">
                                                        {language === "EN" ? "See more" : "Xem thêm"}
                                                </div>
                                                <div className="home__section4__inner__content__item__comment__mid__button__icon">
                                                    <GoArrowUpRight />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home__section4__inner__content__item__comment__down">
                                            Das Elefantenrennen-Festival in Dak Lak war einfach spektakulär! Die mächtigen Elefanten, die farbenfrohe Atmosphäre und die begeisterte Menge haben das Erlebnis unvergesslich gemacht. Ein einzigartiger Einblick in die Kultur der ethnischen Minderheiten...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;