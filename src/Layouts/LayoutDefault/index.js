import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import "../../Scss/style.scss";

function LayoutDefault(){
    return (
        <>
            <div className="layoutDefault">
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
                                <div className="layoutDefault__header__language">
                                    <div className="layoutDefault__header__language__text">
                                        VN
                                    </div>
                                    <div className="layoutDefault__header__language__icon">
                                        <FaCaretDown />
                                    </div>
                                </div>
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
                            <img src="/footer.png" />
                            <div className="container-main">
                                <div className="layoutDefault__footer__bottom__inner">
                                    <div className="layoutDefault__footer__bottom__inner__top">
                                        <div className="layoutDefault__footer__bottom__inner__top__logo">
                                            <img src="/logo.png" />
                                            <div className="layoutDefault__footer__bottom__inner__top__logo__text">
                                                VIRTOURIA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </footer>
            </div>
        </>
    )
}

export default LayoutDefault;