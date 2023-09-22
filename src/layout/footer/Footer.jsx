import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoilm from "../../imgs/logo.png";

function Footer() {
    return (
        <div className="ionex_hero justi">
            <div className="hero_logo1">
                <img src={logoilm} id="aboutIlmlar" className="ionex-btn order-1" alt="" />
            </div>

            <div className="d-flex flex-wrap align-items-center">
                <div className="col-lg-3 col-md-6">
                    <ul className="list-unstyled text-muted">
                        <li>
                            <a href="#aboutIlmlar">Biz haqimizda</a>
                        </li>
                        <li>
                            <a href="#forteacher">O'qituvchilar</a>
                        </li>
                        <li>
                            <a href="#forstudent">O'rganuvchilar</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <ul className="list-unstyled text-muted" style={{ width: "100%" }}>
                        <li>
                            <a href="/teacherlogin">O'qituvchi sifatida boshlash</a>
                        </li>
                        <li>
                            <a href="/login">O'rganuvchi sifatida boshlash</a>
                        </li>
                        <li>
                            <a href="/teacherregistration">O'qituvchi sifatida ro'yxatdan o'tish</a>
                        </li>
                        <li>
                            <a href="/registration">O'rganuvchi sifatida ro'yxatdan o'tish</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                    <ul className="list-unstyled">
                        <li className="domen">Murojatlar uchun:</li>
                        <li>
                            <a href="tel:+998943350531">+998 94 335 05 31</a>

                        </li>
                    </ul>
                </div>
                <div><p className="footer_p">
                    <a href="#" className="domen">
                        ilmlar.com
                    </a>{" "}
                    yangi avlod ta'lim platformasi. 2023
                </p></div>
            </div>
        </div>
    );
}

export default Footer;