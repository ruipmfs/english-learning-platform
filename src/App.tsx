import './App.scss';
import BackgroundVid from './assets/background2.mp4';
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {TypeAnimation} from "react-type-animation";

function App() {
  return (
    <div className="lf-homepage">
        <video autoPlay loop muted playsInline className="lf-homepage__background-vid">
            <source src={BackgroundVid} type="video/mp4"></source>
        </video>
        <Header />
        <div className="lf-homepage__container">
            <TypeAnimation className="lf-homepage__container__type-animation"
                style={{ whiteSpace: 'pre-line', height: '420', display: 'block' }}
                sequence={[
                    `Live\nEnglish\nAnd\nFly`,
                    2000,
                    '',
                ]}
                repeat={Infinity}
            />
        </div>
        <a href="#about" className="lf-homepage__button"><FontAwesomeIcon icon={faChevronDown} beat style={{color: "#ffffff", height: 50, width: 50}} /></a>
        <div className="lf-about" id="about">
            <h1>Quem Somos?</h1>
        </div>
        <div className="lf-services" id="services">
            <h1>Serviços</h1>
        </div>
        <div className="lf-prices" id="prices">
            <h1>Preçário</h1>
        </div>
    </div>
  )
}
export default App
