import LeafLogo from '../assets/leaf_logo_3_slogan.png'
import LeafLogoMobile from '../assets/leaf_logo_3.png'
import LeafLogoNegative from '../assets/leaf_logo_3_slogan_negative.png'
import LeafLogoNegativeMobile from '../assets/leaf_logo_3_negative.png'
import '../sass/_header.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { toggleLanguage } from '../store';

interface HeaderProps {
    changeLanguage: () => void;
}

// @ts-ignore
const Header: React.FC<HeaderProps> = ({ changeLanguage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const checkIsScrolled = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true)
        }
        else {
            setIsScrolled(false)
        }
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [hasSlogan, setHasSlogan] = useState(window.innerWidth >= 1400);
    const checkIsMobile = () => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }

    const checkHasSlogan = () => {
        if (window.innerWidth >= 1400) {
            setHasSlogan(true)
        }
        else {
            setHasSlogan(false)
        }
    }

    const [isOpen, handleClick] = useState(false);
    const [isPortuguese, setIsPortuguese] = useState(true);

    window.addEventListener('scroll', checkIsScrolled);
    window.addEventListener('resize', checkHasSlogan);
    window.addEventListener('resize', checkIsMobile);

    if (isMobile) {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header' && isOpen ? 'lf-header lf-header-white' : 'lf-header'}>
                <div className="lf-header__container">
                    <a className="lf-header__image" href="#"><img src={(isScrolled || isOpen) ? LeafLogoNegativeMobile : LeafLogoMobile} alt="Logo"></img></a>
                    <a className="lf-header__button" onClick={ () => handleClick(!isOpen) }><FontAwesomeIcon icon={faChevronDown} beat style={(isOpen || isScrolled) ? {color: "#000000", height: 40, width: 40} : {color: "#ffffff", height: 40, width: 40}} /></a>
                </div>
                {isOpen && <nav className="lf-header__nav">
                    <a href="#about" onClick={ () => handleClick(!isOpen) }>{ isPortuguese ? "O que é a LEAF?" : "What is LEAF?"}</a>
                    <a href="#services" onClick={ () => handleClick(!isOpen) }>Serviços</a>
                    <a href="#newsletter" onClick={ () => handleClick(!isOpen) }>Newsletter</a>
                    <a href="#contact" onClick={ () => handleClick(!isOpen) }>Contacte-nos</a>
                    <div className="lf-header__nav-lang">
                        <button className="lf-bold" onClick={() => { changeLanguage(); setIsPortuguese(true); }}>PT</button>
                        <span>|</span>
                        <button className="lf-bold" onClick={() => { changeLanguage(); setIsPortuguese(false); }}>EN</button>
                    </div>
                </nav>}
            </div>
        );
    }
    else {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header'}>
                {hasSlogan && <a className="lf-header__image" href="#"><img src={isScrolled ? LeafLogoNegative : LeafLogo} alt="Logo"></img></a>}
                {!hasSlogan && <a className="lf-header__image" href="#"><img src={isScrolled ? LeafLogoNegativeMobile : LeafLogoMobile} alt="Logo"></img></a>}
                <nav className="lf-header__nav">
                    <a href="#about">{ isPortuguese ? "O que é a LEAF?" : "What is LEAF?"}</a>
                    <a href="#services">{ isPortuguese ? "Serviços" : "Services"}</a>
                    <a href="#newsletter">Newsletter</a>
                    <a href="#contact">{ isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                    <div className="lf-header__nav-lang">
                        <button className="lf-bold" onClick={() => { changeLanguage(); setIsPortuguese(true); }}>PT</button>
                        <span>|</span>
                        <button className="lf-bold" onClick={() => { changeLanguage(); setIsPortuguese(false); }}>EN</button>
                    </div>
                </nav>
            </div>
        );
    }
}
// @ts-ignore
const mapStateToProps = (state) => ({
    isPortuguese: state.isPortuguese,
});

// @ts-ignore
const mapDispatchToProps = (dispatch) => ({
    changeLanguage: () => dispatch(toggleLanguage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);