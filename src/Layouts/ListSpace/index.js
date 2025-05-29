import "./ListSpace.scss";
import { FaSearch } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import festivals from "../../constants/data";

function ListSpace() {

    // Trạng thái từ khóa tìm kiếm
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <>
            <div className="ListSpace">
                <div className="container-main">
                    <div className="ListSpace__inner">
                        <div className="ListSpace__inner__header">
                            <div className="ListSpace__inner__header__title">
                                DANH SÁCH KHÔNG GIAN
                            </div>
                            <div className="ListSpace__inner__header__find">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm không gian"
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                />
                                <div className="ListSpace__inner__header__find__icon">
                                    <FaSearch />
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="khonggian" id="khonggiantrungbay" defaultChecked />
                        <input type="radio" name="khonggian" id="khonggiansangtao" />
                        <div className="ListSpace__inner__tab">
                            <label htmlFor="khonggiantrungbay" className="ListSpace__inner__tab__item1">
                                KHÔNG GIAN DU LỊCH
                            </label>
                            <label htmlFor="khonggiansangtao" className="ListSpace__inner__tab__item2">
                                KHÔNG GIAN TẠO BỞI NGƯỜI DÙNG
                            </label>
                        </div>
                        <div className="ListSpace__inner__content">
                            <div className="row" id="row1">
                                {festivals.map((festivals) => (
                                    <Link to={festivals.Web} className="col-md-6" key={festivals.id}>
                                        <div className="ListSpace__inner__content__box">
                                            <div className="ListSpace__inner__content__box__title">
                                                {festivals.titleVN}
                                            </div>
                                            <div className="ListSpace__inner__content__box__info">
                                                <div className="ListSpace__inner__content__box__info__item">
                                                    <div className="ListSpace__inner__content__box__info__item__item">
                                                        Tác giả
                                                    </div>
                                                    <div className="ListSpace__inner__content__box__info__item__item">
                                                        Mô tả
                                                    </div>
                                                </div>
                                                <div className="ListSpace__inner__content__box__info__item2">
                                                    <div className="ListSpace__inner__content__box__info__item2__item">
                                                        {festivals.author}
                                                    </div>
                                                    <div className="ListSpace__inner__content__box__info__item2__item">
                                                        {festivals.descriptionVN}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="ListSpace__inner__content__box__image"
                                                style={{
                                                    backgroundImage: `url(${festivals.image})`,
                                                }}
                                            ></div>
                                            <div className="ListSpace__inner__content__box__button">
                                                <Link to={festivals.Web}>
                                                    <div className="ListSpace__inner__content__box__button__text">
                                                        CHI TIẾT
                                                    </div>
                                                    <div className="ListSpace__inner__content__box__button__icon">
                                                        <MdArrowOutward />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="row" id="row2">
                            <Link to={`/custom`} className="col-md-6">
                                        <div className="ListSpace__inner__content__box">
                                            <div className="ListSpace__inner__content__box__title">
                                                Không gian sáng tạo
                                            </div>
                                            <div className="ListSpace__inner__content__box__info">
                                                <div className="ListSpace__inner__content__box__info__item">
                                                    <div className="ListSpace__inner__content__box__info__item__item">
                                                        Tự tạo không gian cho riêng bạn
                                                    </div>
                                                    <div className="ListSpace__inner__content__box__info__item__item">
                                                        
                                                    </div>
                                                </div>
                                                <div className="ListSpace__inner__content__box__info__item2">
                                                    <div className="ListSpace__inner__content__box__info__item2__item">
                                                        
                                                    </div>
                                                    <div className="ListSpace__inner__content__box__info__item2__item">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="ListSpace__inner__content__box__image"
                                                style={{
                                                    backgroundImage: `url("/KhongGian/kgcustom.jpg")`,
                                                }}
                                            ></div>
                                            <div className="ListSpace__inner__content__box__button">
                                                <Link to={``}>
                                                    <div className="ListSpace__inner__content__box__button__text">
                                                        CHI TIẾT
                                                    </div>
                                                    <div className="ListSpace__inner__content__box__button__icon">
                                                        <MdArrowOutward />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListSpace;
