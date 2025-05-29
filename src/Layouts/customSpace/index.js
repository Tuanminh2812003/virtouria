import { useParams } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { GoArrowUpRight } from "react-icons/go";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import axios from "axios";
import Modal from "../../Components/Modal";

function CustomSpace() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const { prop } = useParams(); // Lấy prop từ URL
    console.log("Prop received:", prop);
    const [userData, setUserData] = useState("");
    const [khongGian, setKhongGian] = useState(null);
    const [isOwner, setIsOwner] = useState(false);

    const [showModalEditSpace, setShowModalEditSpace] = useState(false);

    const handleEditSpaceClick = () => {
            setShowModalEditSpace(true);
    };

    useEffect(() => {
        const token = Cookies.get("accessToken");

        const fetchCulture = async () => {
            try {
            const res = await axios.get("https://chisu3000.online/api/v1/culture");
            const spaces = res.data.data;
            const found = spaces.find((item) => item.slug === prop);

            if (found) {
                setKhongGian(found);

                // Nếu có token thì kiểm tra quyền sở hữu
                if (token) {
                const headers = { Authorization: `Bearer ${token}` };
                const userRes = await axios.get("https://chisu3000.online/api/v1/auth/me/", { headers });
                const user = userRes.data.data;
                setUserData(user);

                if (found.created_by === user._id) {
                    setIsOwner(true);
                }
                }
            }
            } catch (err) {
            console.error("Lỗi khi fetch dữ liệu:", err);
            Cookies.remove("accessToken");
            }
        };

        fetchCulture();
    }, [prop]);
    if (!khongGian) {
            return <div style={{ padding: "2rem", textAlign: "center" }}>Đang tải không gian...</div>;
    } else 
    return (
        <>
                    <div className="Space">
                        <div className="Space__back" style={{ backgroundImage: `url(${khongGian.path.main})` }}>
                        </div>
                        <div className="Space__overlay"></div>
                        <div className="container-main">
                            <div className="Space__inner">
                                <div className="Space__inner__disc">KHÔNG GIAN TẠO BỞI NGƯỜI DÙNG</div>
                                <div className="Space__inner__title">{khongGian.title}</div>
                                <div className="Space__inner__info">
                                    <div className="Space__inner__info__item">
                                        <div className="Space__inner__info__item__item">
                                            Tác giả
                                        </div>
                                        <div className="Space__inner__info__item__item">
                                            Mô tả
                                        </div>
                                    </div>
                                    <div className="Space__inner__info__item2">
                                        <div className="Space__inner__info__item2__item">
                                            {khongGian.created_by}
                                        </div>
                                        <div className="Space__inner__info__item2__item">
                                            {khongGian.description.vi}
                                        </div>
                                    </div>
                                </div>
                                <Link to={`https://virtual-gallery-main.vercel.app/customspace/${khongGian.slug}`} className="Space__inner__button">
                                    <div className="Space__inner__button__inner">
                                        <div className="Space__inner__button__inner__text">KHÁM PHÁ KHÔNG GIAN</div>
                                        <div className="Space__inner__button__inner__icon">
                                            <MdArrowOutward/>
                                        </div>
                                    </div>
                                </Link>
                                {isOwner ? (
                                    <div className="Space__inner__edit" onClick={handleEditSpaceClick} >Chỉnh sửa không gian</div>
                                ) : (<></>)}
                            </div>
                        </div>
                    </div>
                                {/* Render từng phần của description */}
                                {/* {descriptionParts.map((part, index) => (
                                    <div key={index} className="Space__inner__des">
                                        {part.trim()}
                                    </div>
                                ))} */}
                    <div className="home__section4">
                                        <div className="container-main">
                                            <div className="home__section4__inner">
                                                <div className="home__section4__inner__title">
                                                    BÌNH LUẬN
                                                </div>
                                                <div className="home__section4__inner__disc">
                                                    Hãy để lại bình luận và đánh giá của bạn về không gian và các chương trình tour này. Chúng tôi rất mong nhận được ý kiến đóng góp từ bạn để cải thiện và mang đến trải nghiệm tốt hơn cho cộng đồng.
                                                    
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
            <Modal isVisible={showModalEditSpace} onClose={() => setShowModalEditSpace(false)}>
                <div className="modalRegister__title">
                    Sửa không gian
                </div>
                {/* <form className="modalRegister__form" onSubmit={}>
                    
                </form> */}
            </Modal>
        </>
    );
}

export default CustomSpace;
