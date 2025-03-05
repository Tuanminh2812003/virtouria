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
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function Home() {

    const { language, changeLanguage } = useContext(LanguageContext);

    const festivalsVN = [
        { image: "/Tour/t1.png", title: "Làng Hương Quảng Phú Cầu, Việt Nam", description: "Nơi lưu giữ nghệ thuật làm hương truyền thống hàng trăm năm, không chỉ mang hương thơm đặc trưng mà còn tạo nên những khung cảnh rực rỡ đầy màu sắc..." },
        { image: "/Tour/t2.png", title: "Làng Gốm Bát Tràng, Việt Nam", description: "Một làng nghề truyền thống hơn 700 năm, nổi tiếng với các sản phẩm gốm tinh xảo, bền đẹp.", tall: true },
        { image: "/Tour/t3.png", title: "Lễ Hội Khinh Khí Cầu, Đài Loan", description: "Hàng trăm khinh khí cầu bay lơ lửng trên bầu trời tạo nên cảnh tượng tuyệt đẹp." },
        { image: "/Tour/t4.png", title: "Lễ Hội Đua Voi, Việt Nam", description: "Sự kiện truyền thống của người M’Nông, tôn vinh sức mạnh của voi Tây Nguyên.", tall: true },
        { image: "/Tour/t5.png", title: "Lễ Hội Hóa Trang, Đức", description: "Lễ hội hóa trang lớn nhất Châu Âu với những bộ trang phục kỳ lạ và vui nhộn.", tall: true },
        { image: "/Tour/t7.png", title: "Lễ Hội Đua Vịt Cao Su, Đức", description: "Hàng ngàn con vịt cao su được thả xuống dòng sông trong cuộc đua vui nhộn.", tall: true },
        { image: "/Tour/t6.png", title: "Lễ Hội Thả Đèn Trời, Đài Loan", description: "Một lễ hội truyền thống hàng trăm năm tại làng Thập Phần." },
        { image: "/Tour/t8.png", title: "Lễ Hội Bia Munich, Đức", description: "Sự kiện bia lớn nhất thế giới với hơn 6 triệu người tham gia mỗi năm." }
    ];

    const festivalsEN = [
        { image: "/Tour/t1.png", title: "Quang Phu Cau Incense Village, Vietnam", description: "A place that preserves the centuries-old art of making incense, not only carrying its distinctive fragrance but also creating vibrant and colorful scenes." },
        { image: "/Tour/t2.png", title: "Bat Trang Pottery Village, Vietnam", description: "A traditional craft village with over 700 years of history, famous for its exquisite and durable ceramic products.", tall: true },
        { image: "/Tour/t3.png", title: "Hot Air Balloon Festival, Taiwan", description: "Hundreds of hot air balloons floating in the sky create a breathtaking spectacle." },
        { image: "/Tour/t4.png", title: "Elephant Racing Festival, Vietnam", description: "A traditional event of the M’Nong people, honoring the strength of Central Highland elephants.", tall: true },
        { image: "/Tour/t5.png", title: "Carnival Festival, Germany", description: "The largest carnival in Europe, featuring unique and fun costumes.", tall: true },
        { image: "/Tour/t7.png", title: "Rubber Duck Race Festival, Germany", description: "Thousands of rubber ducks are released into the river in a fun-filled race.", tall: true },
        { image: "/Tour/t6.png", title: "Sky Lantern Festival, Taiwan", description: "A centuries-old traditional festival in Shifen Village, where thousands of lanterns light up the night sky." },
        { image: "/Tour/t8.png", title: "Munich Beer Festival, Germany", description: "The world's largest beer festival, attracting over 6 million participants each year." }
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
                                    <a href="/">
                                        <div className="home__section1__inner__button__inner__icon">
                                        <GoArrowUpLeft />
                                        </div>
                                        <div className="home__section1__inner__button__inner__text">
                                            {language === "EN" ? "Play 3D Game" : "Trải Nghiệm 3D"}
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
                <div className="home__section2">
                    <div className="container-main">
                        <div className="home__section2__inner">
                            <div className="home__section2__inner__title">
                                {language === "EN" ? "Countless Festivals" : "MUÔN VÀN LỄ HỘI"}
                            </div>
                            <div className="home__section2__inner__disc">
                                {language === "EN" ? "Immerse yourself in the vibrant atmosphere and experience unique festivals that showcase the rich local culture at every destination you visit!" : "Hòa mình vào không khí sôi động để trải nghiệm những lễ hội độc nhất vô nhị mang đậm bản sắc địa phương tại từng nơi bạn ghé qua!"}
                            </div>
                            <div className="festival-grid">
                                {language === "EN"
                                    ? festivalsEN.map((festival, index) => (
                                        <FestivalCard key={index} {...festival} />
                                    ))
                                    : festivalsVN.map((festival, index) => (
                                        <FestivalCard key={index} {...festival} />
                                    ))
                                }
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
                                                Làng Hương Quảng Phú Cầu, Việt Nam
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
                                                Lễ Hội Biaa Munich, Đức
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
                                                Lễ Hội Thả Đèn Trời, Đài Loan
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
                                                Lễ Hội Đua Voi Đăk Lăk, Việt Nam
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
                                                Làng Gốm Bát Tràng, Việt Nam
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
                                                Lễ Hội Đua Voi Đăk Lăk, Việt Nam
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