import LeafLogo from '../assets/leaf_logo_2.png'
import LeafLogoNegative from '../assets/leaf_logo_negative_2.png'
import '../sass/_header.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PortugalIcon from '../assets/icon-portugal.png';
import UKIcon from '../assets/icon-uk.png';
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
    const checkIsMobile = () => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }

    const [isOpen, handleClick] = useState(false);
    const [isPortuguese, setIsPortuguese] = useState(true);

    window.addEventListener('scroll', checkIsScrolled);
    window.addEventListener('resize', checkIsMobile);

    console.log("aqui" + isMobile)

    if (isMobile) {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header' && isOpen ? 'lf-header lf-header-white' : 'lf-header'}>
                <div className="lf-header__container">
                    <a className="lf-header__image" href="#"><img src={(isScrolled || isOpen) ? LeafLogoNegative : LeafLogo} alt="Logo"></img></a>
                    <a className="lf-header__button" onClick={ () => handleClick(!isOpen) }><FontAwesomeIcon icon={faChevronDown} beat style={(isOpen || isScrolled) ? {color: "#000000", height: 40, width: 40} : {color: "#ffffff", height: 40, width: 40}} /></a>
                </div>
                {isOpen && <nav className="lf-header__nav">
                    <a href="#about">{ isPortuguese ? "O que é a LEAF?" : "What is LEAF?"}</a>
                    <a href="#services">Serviços</a>
                    <a href="#contact">Contacte-nos</a>
                    <a className="lf-header__nav-lang" onClick={() => { changeLanguage(); setIsPortuguese(!isPortuguese); }}><img src={isPortuguese ? PortugalIcon : UKIcon} alt="" /></a>
                </nav>}
            </div>
        );
    }
    else {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header'}>
                <a className="lf-header__image" href="#"><img src={isScrolled ? LeafLogoNegative : LeafLogo} alt="Logo"></img></a>
                <nav className="lf-header__nav">
                    <a href="#about">{ isPortuguese ? "O que é a LEAF?" : "What is LEAF?"}</a>
                    <a href="#services">{ isPortuguese ? "Serviços" : "Services"}</a>
                    <a href="#contact">{ isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                    <a className="lf-header__nav-lang" onClick={() => { changeLanguage(); setIsPortuguese(!isPortuguese); }}><img src={isPortuguese ? PortugalIcon : UKIcon} alt="" /></a>
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