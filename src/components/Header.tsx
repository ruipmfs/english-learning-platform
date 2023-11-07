import LeafLogo from '../assets/leaf_logo.png'
import '../sass/_header.scss'

const Header = () => {
    return (
        <div className="lf-header">
            <a className="lf-header__image" href="#"><img src={LeafLogo} alt="Logo"></img></a>
            <nav className="lf-header__nav">
                <a href="#about">Quem Somos?</a>
                <a href="#services">Serviços</a>
                <a href="#prices">Preçário</a>
            </nav>
        </div>
    );
}
export default Header