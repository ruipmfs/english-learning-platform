import LeafLogo from '../assets/leaf_logo.png'
import '../sass/_header.scss'

const Header = () => {
    return (
        <div className="lf-header">
            <img className="lf-header__image" src={LeafLogo} alt="Logo"></img>
        </div>
    );
}
export default Header