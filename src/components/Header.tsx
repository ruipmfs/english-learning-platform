import LeafLogo from '../assets/leaf_logo.png'
import LeafLogoNegative from '../assets/leaf_logo_negative.png'
import '../sass/_header.scss'
import { useState } from 'react';    

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

    window.addEventListener('scroll', checkIsScrolled);

    return (
        <div className={isScrolled ? 'lf-header lf-header-scrolled' : 'lf-header'}>
            <a className="lf-header__image" href="#"><img src={isScrolled ? LeafLogoNegative : LeafLogo} alt="Logo"></img></a>
            <nav className="lf-header__nav">
                <a href="#about">Quem Somos?</a>
                <a href="#services">Serviços</a>
                <a href="#contact">Contacte-nos</a>
            </nav>
        </div>
    );
}
export default Header