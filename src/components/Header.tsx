import LeafLogo from '../assets/leaf_logo_2.png'
import LeafLogoNegative from '../assets/leaf_logo_negative_2.png'
import '../sass/_header.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
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

    window.addEventListener('scroll', checkIsScrolled);
    window.addEventListener('resize', checkIsMobile);

    if (isMobile) {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header' && isOpen ? 'lf-header lf-header-white' : 'lf-header'}>
                <div className="lf-header__container">
                    <a className="lf-header__image" href="#"><img src={(isScrolled || isOpen) ? LeafLogoNegative : LeafLogo} alt="Logo"></img></a>
                    <a className="lf-header__button" onClick={ () => handleClick(!isOpen) }><FontAwesomeIcon icon={faChevronDown} beat style={(isOpen || isScrolled) ? {color: "#000000", height: 40, width: 40} : {color: "#ffffff", height: 40, width: 40}} /></a>
                </div>
                {isOpen && <nav className="lf-header__nav">
                    <a href="#about">Quem Somos?</a>
                    <a href="#services">Serviços</a>
                    <a href="#contact">Contacte-nos</a>
                </nav>}
            </div>
        );
    }
    else {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header'}>
                <a className="lf-header__image" href="#"><img src={isScrolled ? LeafLogoNegative : LeafLogo} alt="Logo"></img></a>
                <nav className="lf-header__nav">
                    <a href="#about">Quem Somos?</a>
                    <a href="#services">Serviços</a>
                    <a href="#contact">Contacte-nos</a>
                </nav>
            </div>
        );
    }
}
export default Header