import React from 'react';
import '../App.css'

const Footer = props=>{

    // console.log(props.scroll);

    return(
        <footer className="footer">
            <ul className="footer__nav">
                <li className="footer__item">
                <a className="footer__link" href="#">Berk <br />BİRİNCİOĞLU </a>
                </li>
                <li className="footer__item">
                <a className="footer__link" href="#">Batuhan <br />MANİCİ</a>
                </li>
                <li className="footer__item">
                <a className="footer__link" href="#">Yiğit<br />ÜLKÜ</a>
                </li>
                <li className="footer__item">
                <a className="footer__link" href="#">Batu <br />DİKMECİ</a>
                </li>
            </ul>
            {/* <img src="img/icon.png" alt="Logo" class="footer__logo" /> */}
            <button  className="btn--text btn--scroll-to"><a href="#" className="footer__link">Başa dön</a> &uarr;</button>
            <p className="footer__copyright">
                &copy; Copyright 2021
            </p>
        </footer>
    );
};

export default Footer;

// onClick={()=> top.scrollIntoView({behavior:'smooth'})}