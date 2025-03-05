import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useState, useEffect, useContext } from "react";
import "../../Scss/style.scss";
import { LanguageContext } from "../../context/LanguageContext";

function LayoutDefault(){

    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <>
            <div className={`layoutDefault ${language}`}>
                <header>
                    <div className="container-main">
                        <div className="layoutDefault__header">
                            <Link to="/" className="layoutDefault__header__logo">
                                <img src="/logo.png" alt="Logo" />
                                <div className="layoutDefault__header__logo__text">
                                    VIRTOURIA
                                </div>
                            </Link>
                            <div className="layoutDefault__header__menu">
                                <div className="layoutDefault__header__menu__inner">

                                    {language === "EN" ? (
                                        <>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Home
                                                </div>
                                            </a>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Tours
                                                </div>
                                            </a>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    3D Products
                                                </div>
                                            </a>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Travel Game
                                                </div>
                                            </a>
                                            <Link to="/login">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Hot Events
                                                </div>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Trang Chủ
                                                </div>
                                            </a>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Đặt Tours
                                                </div>
                                            </a>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Sản Phẩm 3D
                                                </div>
                                            </a>
                                            <a href="/">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    Game Du Lịch
                                                </div>
                                            </a>
                                            <Link to="/login">
                                                <div className="layoutDefault__header__menu__back">
                                                </div>
                                                <div className="layoutDefault__header__menu__text">
                                                    E-Magazine
                                                </div>
                                            </Link>
                                        </>
                                    )}

                                
                                </div>
                            </div>
                            <div className="layoutDefault__header__right">
                                <select className="layoutDefault__header__language" onChange={(e) => changeLanguage(e.target.value)} value={language}>
                                    <option value="VN">VN</option>
                                    <option value="EN">EN</option>
                                </select>
                                <div className="layoutDefault__header__login">
                                    <div className="layoutDefault__header__login__text">
                                        {language === "EN" ? "Login" : "Đăng nhập"}
                                    </div>
                                    <div className="layoutDefault__header__login__icon">
                                        <GoArrowUpRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <div className="layoutDefault__footer">
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
            {/* <div className="layoutDefault VN">
                <header>
                    <div className="container-main">
                        <div className="layoutDefault__header">
                            <Link to="/" className="layoutDefault__header__logo">
                                <img src="/logo.png" alt="Logo" />
                                <div className="layoutDefault__header__logo__text">
                                    VIRTOURIA
                                </div>
                            </Link>
                            <div className="layoutDefault__header__menu">
                                <div className="layoutDefault__header__menu__inner">
                                    <a href="/">
                                        <div className="layoutDefault__header__menu__back">
                                        </div>
                                        <div className="layoutDefault__header__menu__text">
                                            Trang Chủ
                                        </div>
                                    </a>
                                    <a href="/">
                                        <div className="layoutDefault__header__menu__back">
                                        </div>
                                        <div className="layoutDefault__header__menu__text">
                                            Đặt Tours
                                        </div>
                                    </a>
                                    <a href="/">
                                        <div className="layoutDefault__header__menu__back">
                                        </div>
                                        <div className="layoutDefault__header__menu__text">
                                            Sản Phẩm 3D
                                        </div>
                                    </a>
                                    <a href="/">
                                        <div className="layoutDefault__header__menu__back">
                                        </div>
                                        <div className="layoutDefault__header__menu__text">
                                            Game Du Lịch
                                        </div>
                                    </a>
                                    <Link to="/login">
                                        <div className="layoutDefault__header__menu__back">
                                        </div>
                                        <div className="layoutDefault__header__menu__text">
                                            E-Magazine
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="layoutDefault__header__right">
                                <select className="layoutDefault__header__language" name="language">
                                    <option value="vn">VN</option>
                                    <option value="en">EN</option>
                                </select>
                                <div className="layoutDefault__header__login">
                                    <div className="layoutDefault__header__login__text">
                                        Đăng nhập
                                    </div>
                                    <div className="layoutDefault__header__login__icon">
                                        <GoArrowUpRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <div className="layoutDefault__footer">
                        <div className="layoutDefault__footer__back">

                        </div>
                        <div className="container-main">
                            <div className="layoutDefault__footer__inner">
                                <div className="layoutDefault__footer__inner__title">
                                    BẮT ĐẦU CHUYẾN HÀNH TRÌNH
                                </div>
                                <div className="layoutDefault__footer__inner__disc">
                                    Đăng ký để cập nhật những ưu đãi du lịch hấp dẫn, bí quyết hữu ích và gợi ý điểm đến lý tưởng. Đừng bỏ lỡ cơ hội khám phá chỉ cần tham gia ngay danh sách hôm nay!
                                </div>
                                <div className="layoutDefault__footer__inner__form">
                                    <div className="layoutDefault__footer__inner__form__back">

                                    </div>
                                    <div className="layoutDefault__footer__inner__form__inner">
                                        <input type="text" placeholder="Điền email của bạn tại đây..." />
                                        <div className="layoutDefault__footer__inner__form__inner__button">
                                            <div className="layoutDefault__footer__inner__form__inner__button__text">
                                                Đăng ký
                                            </div>
                                            <div className="layoutDefault__footer__inner__form__inner__button__icon">
                                                <GoArrowUpRight />
                                            </div>
                                        </div>
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
            </div> */}
        </>
    )
}

export default LayoutDefault;