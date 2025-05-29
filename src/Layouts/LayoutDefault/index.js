import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useState, useEffect, useContext } from "react";
import "../../Scss/style.scss";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal";
import Cookies from "js-cookie";
import axios from "axios";
import { set } from "lodash";

function LayoutDefault(){

        const { language, changeLanguage } = useContext(LanguageContext);

        const [showModalRegister, setShowModalRegister] = useState(false);
        const [showModalLogin, setShowModalLogin] = useState(false);
        const [showModalForget, setShowModalForget] = useState(false);
        const [showModalUser, setShowModalUser] = useState(false);
    
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [userData, setUserData] = useState("");
        const [loginError, setLoginError] = useState("");
        const [formData, setFormData] = useState({ email: "", password: "" });
        const navigate = useNavigate(); 

        useEffect(() => {
            const token = Cookies.get("accessToken");
            console.log("Token from cookies:", token);
            if (token) {
                setIsLoggedIn(true);
                axios.get("https://chisu3000.online/api/v1/auth/me/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                }).then(res => {
                setUserData(res.data.data);
                console.log("User data from API:", res.data.data);
                }).catch(() => {
                setIsLoggedIn(false);
                Cookies.remove("accessToken");
                });
            }

        }, []);
    
        const handleRegisterClick = () => {
            setShowModalRegister(true);
            setShowModalLogin(false);
            setNavToggle(prevData => !prevData);
        };
        const handleLoginClick = () => {
            setShowModalLogin(true);
            setShowModalRegister(false);
            setNavToggle(prevData => !prevData);
        };
        const handleForgetClick = () => {
            setShowModalForget(true);
            setShowModalLogin(false);
            setShowModalRegister(false);
        };
        const handleUserClick = () => {
            setShowModalUser(true);
        };
    
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };
    
        const handleLogin = async (event) => {
            event.preventDefault();
            try {
                const res = await axios.post("https://chisu3000.online/api/v1/auth/login", formData);

                // Kiểm tra mã code từ server (chỉ thành công nếu code === 200)
                if (res.data.code !== 200) {
                setLoginError("Email hoặc mật khẩu không đúng.");
                return;
                }

                const { accessToken } = res.data;

                // Lưu token và trạng thái
                Cookies.set("accessToken", accessToken, { expires: 7 });
                setIsLoggedIn(true);
                setShowModalLogin(false);

                // Lấy thông tin người dùng
                axios.get("https://chisu3000.online/api/v1/auth/me/", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                }).then(res => {
                setUserData(res.data.data);
                }).catch(() => {
                setIsLoggedIn(false);
                Cookies.remove("accessToken");
                });

                setLoginError(""); // clear lỗi nếu có
            } catch (error) {
                console.error(error);
                setLoginError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
            }
        };

        const handleRegister = async (event) => {
            event.preventDefault();
            const registerData = {
                username: event.target.username.value,
                password: event.target.password.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
            };
            try {
                await axios.post("https://chisu3000.online/api/v1/auth/signup", registerData);
                alert("Đăng ký thành công! Hãy đăng nhập.");
                setShowModalRegister(false);
                setShowModalLogin(true);
            } catch (error) {
                alert("Đăng ký thất bại: " + error?.response?.data?.message || "Lỗi không xác định.");
            }
        };
        const handleCreateSpace = async (event) => {
            event.preventDefault();
            const registerData = {
                title: `Không gian của ${userData.username}`,
                "sub-title": "",
                path: {
                main: "",
                image: [],
                video: [],
                },
                description: {
                vi: "Điền mô tả",
                en: "test",
                tw: "zxc",
                ger: "sadasd",
                },
                category_id: "67b81087669b683047ae66d6",
                created_by: userData._id,
            };
            try {
                await axios.post("https://chisu3000.online/api/v1/culture/create", registerData);
                navigate(`/customspace/khong-gian-cua-${userData.username}`);
                setShowModalUser(false);
            } catch (error) {
                alert(error?.response?.data?.message || "Lỗi không xác định.");
            }
        };

        const handleLogout = () => {
            Cookies.remove("accessToken");
            setIsLoggedIn(false);
            setUserData("");
            alert("Đã đăng xuất!");
            setShowModalUser(false);
        };

        const [navToggle, setNavToggle] = useState(false);
        const navHandler = () => {
            setNavToggle(prevData => !prevData);
        }

        const webSpace = "/customSpace/" +userData._id;
        
    return (
        <>
            <div className={`layoutDefault ${language}`}>
                <header>
                    <div className="container-main">
                        <div className="layoutDefault__header">
                            <Link to="/" className="layoutDefault__header__logo">
                                <img src="/mini.png" alt="Logo" />
                                <div className="layoutDefault__header__logo__text">
                                    VIRTOURIA
                                </div>
                            </Link>
                            <div className="layoutDefault__header__menu">
                                <div className="layoutDefault__header__menu__inner">

                                    {language === "EN" ? (
                                        <>
                                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Home
                                                </div>
                                            </NavLink>
                                            <NavLink to="/listspace" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    List Spaces
                                                </div>
                                            </NavLink>
                                            <NavLink to="/game" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Travel Game
                                                </div>
                                            </NavLink>
                                            <NavLink to="/hotevents" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Hot Events
                                                </div>
                                            </NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Trang Chủ
                                                </div>
                                            </NavLink>
                                            <NavLink to="/listspace" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Danh sách không gian
                                                </div>
                                            </NavLink>
                                            <NavLink to="/game" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Trò chơi du lịch
                                                </div>
                                            </NavLink>
                                            <NavLink to="/hotevents" className={({ isActive }) => isActive ? "active" : ""}>
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Sự kiện hot
                                                </div>
                                            </NavLink>
                                        </>
                                    )}

                                
                                </div>
                            </div>
                            <div className="layoutDefault__header__right">
                                <select className="layoutDefault__header__language" onChange={(e) => changeLanguage(e.target.value)} value={language}>
                                    <option value="EN">EN</option>  
                                    <option value="VN">VN</option>
                                </select>
                                {isLoggedIn ? (
                                    <div className="layoutDefault__header__login" onClick={handleUserClick}>
                                        <div className="layoutDefault__header__login__text">
                                            {userData.username || "User"}
                                        </div>
                                        <div className="layoutDefault__header__login__icon">
                                        <GoArrowUpRight />
                                        </div>
                                    </div>
                                    ) : (
                                    <div className="layoutDefault__header__login" onClick={handleLoginClick}>
                                        <div className="layoutDefault__header__login__text">
                                        {language === "EN" ? "Login" : "Đăng nhập"}
                                        </div>
                                        <div className="layoutDefault__header__login__icon">
                                        <GoArrowUpRight />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <div className="layoutDefault__footer">
                        <div className="home__section1__video">
                            <video autoPlay loop muted className="home__section1__video__content">
                                <source src="/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="layoutDefault__footer__back">

                        </div>
                        <div className="container-main">
                            <div className="layoutDefault__footer__inner">
                                <div className="layoutDefault__footer__inner__title">
                                    {language === "EN" ? "STAR YOUR JOURNEY" : "BẮT ĐẦU CHUYẾN HÀNH TRÌNH"}
                                </div>
                                <div className="layoutDefault__footer__inner__disc">
                                    {language === "EN" ? "Sign up to receive exciting travel deals, useful tips, and ideal destination suggestions. Don't miss the chance to explore—join the list today!" : "Đăng ký để cập nhật những ưu đãi du lịch hấp dẫn, bí quyết hữu ích và gợi ý điểm đến lý tưởng. Đừng bỏ lỡ cơ hội khám phá chỉ cần tham gia ngay danh sách hôm nay!"}
                                    
                                </div>
                                <div className="layoutDefault__footer__inner__form">
                                    <div className="layoutDefault__footer__inner__form__back">

                                    </div>
                                    <div className="layoutDefault__footer__inner__form__inner">
                                        {language === "EN" ? (
                                            <>
                                                <input type="text" placeholder="Enter your email here..." />
                                                <div className="layoutDefault__footer__inner__form__inner__button">
                                                    <div className="layoutDefault__footer__inner__form__inner__button__text">
                                                        LOGIN
                                                    </div>
                                                    <div className="layoutDefault__footer__inner__form__inner__button__icon">
                                                        <GoArrowUpRight />
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <input type="text" placeholder="Điền email của bạn tại đây..." />
                                                <div className="layoutDefault__footer__inner__form__inner__button">
                                                    <div className="layoutDefault__footer__inner__form__inner__button__text">
                                                        ĐĂNG NHẬP
                                                    </div>
                                                    <div className="layoutDefault__footer__inner__form__inner__button__icon">
                                                        <GoArrowUpRight />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layoutDefault__footer__bottom">
                            <img src="/footer.png" className="layoutDefault__footer__bottom__back"/>
                            <div className="container-main">
                                <div className="layoutDefault__footer__bottom__inner">
                                    <div className="layoutDefault__footer__bottom__inner__top">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="layoutDefault__footer__bottom__inner__top__logo">
                                                    <img src="/logo.png" />
                                                    <div className="layoutDefault__footer__bottom__inner__top__logo__text">
                                                        VIRTOURIA
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4" style={{justifyContent: "center", display: "flex"}}>
                                                <div className="layoutDefault__footer__bottom__inner__top__email">
                                                    <div className="layoutDefault__footer__bottom__inner__top__email__title">
                                                        Email
                                                    </div>
                                                    <div className="layoutDefault__footer__bottom__inner__top__email__text">
                                                        virtouriatravel@gmail.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2" style={{justifyContent: "center", display: "flex"}}>
                                                <div className="layoutDefault__footer__bottom__inner__top__email">
                                                    <div className="layoutDefault__footer__bottom__inner__top__email__title">
                                                        Base in
                                                    </div>
                                                    <div className="layoutDefault__footer__bottom__inner__top__email__text">
                                                        Ha Noi, Viet Nam
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layoutDefault__footer__bottom__inner__bottom">
                                        <div className="layoutDefault__footer__bottom__inner__bottom__copy">
                                            © 2025 VIRTOURIA . All Rights Reversed
                                        </div>
                                        <div className="layoutDefault__footer__bottom__inner__bottom__copy">
                                            <div className="layoutDefault__footer__bottom__inner__bottom__copy__item">
                                                Privacy Policy
                                            </div>
                                            <div className="layoutDefault__footer__bottom__inner__bottom__copy__item" style={{borderLeft: "1px white solid", borderRight: "1px white solid"}}>
                                                Terms of Service
                                            </div>
                                            <div className="layoutDefault__footer__bottom__inner__bottom__copy__item">
                                                Manage Cookies
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </footer>
            </div>
            <Modal isVisible={showModalRegister} onClose={() => setShowModalRegister(false)}>
                <div className="modalRegister__title">
                    ĐĂNG KÝ
                </div>
                <form className="modalRegister__form" onSubmit={handleRegister}>
                    <label className="modalRegister__form__label">Tên</label>
                    <input name="username" type="text" placeholder="Ngô Thị Hồng Nhung" className="modalRegister__form__input" />

                    <label className="modalRegister__form__label">Số điện thoại</label>
                    <input name="phone" type="text" placeholder="0123456789" className="modalRegister__form__input" />

                    <label className="modalRegister__form__label">Email</label>
                    <input name="email" type="text" placeholder="email@gmail.com" className="modalRegister__form__input" />

                    <label className="modalRegister__form__label">Mật khẩu</label>
                    <input name="password" type="password" placeholder="Nhập mật khẩu" className="modalRegister__form__input" />

                    <button className="modalRegister__form__button">Đăng ký</button>
                </form>
                <div className="modalRegister__have">
                    Bạn đã có tài khoản?
                </div>
                <div className="modalRegister__login" onClick={handleLoginClick}>
                    ĐĂNG NHẬP
                </div>
            </Modal>
            <Modal isVisible={showModalLogin} onClose={() => setShowModalLogin(false)}>
                <div className="modalRegister__title">
                    ĐĂNG NHẬP
                </div>
                <form className="modalRegister__form" onSubmit={handleLogin}>
                    <label className="modalRegister__form__label">Email đăng ký</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="hongnhung.minha@gmail.com"
                        className="modalRegister__form__input"
                        value={formData.email} // Giá trị từ state
                        onChange={handleInputChange} // Lắng nghe thay đổi
                    />
                    <label className="modalRegister__form__label">Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Nhập mật khẩu"
                        className="modalRegister__form__input"
                        value={formData.password} // Giá trị từ state
                        onChange={handleInputChange} // Lắng nghe thay đổi
                    />
                    {loginError && (
                        <div className="modalRegister__form__error">{loginError}</div>
                    )}
                    <div className="modalRegister__form__Userforget" onClick={handleForgetClick}>
                        Quên mật khẩu
                    </div>
                    <button className="modalRegister__form__button">ĐĂNG NHẬP</button>
                </form>
                <div className="modalRegister__have">
                    Bạn chưa có tài khoản?
                </div>
                <div className="modalRegister__login" onClick={handleRegisterClick}>
                    ĐĂNG KÝ TÀI KHOẢN
                </div>
            </Modal>
            <Modal isVisible={showModalForget} onClose={() => setShowModalForget(false)}>
                <div className="modalRegister__title">
                    LẤY LẠI MẬT KHẨU
                </div>
                <form className="modalRegister__form">
                    <label className="modalRegister__form__label">EMAIL BẠN ĐÃ ĐĂNG KÝ</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="hongnhung.minha@gmail.com"
                        className="modalRegister__form__input"
                    />
                    <button className="modalRegister__form__button">XÁC NHẬN EMAIL</button>
                </form>
            </Modal>
            <Modal isVisible={showModalUser} onClose={() => setShowModalUser(false)}>
                <div className="modalRegister__title">
                    {userData.username || "User"}
                </div>
                <Link to={webSpace} className="modalRegister__space" onClick={handleCreateSpace} >
                    Không gian của tôi
                </Link>
                <div className="modalRegister__logOut" onClick={handleLogout} relative="blank">
                    Đăng xuất
                </div>
            </Modal>
        </>
    )
}

export default LayoutDefault;