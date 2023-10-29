import './App.scss'
import BackgroundVid from './assets/background2.mp4'
import Header from "./components/Header";

function App() {
  return (
      <div className="lf-homepage">
          <video autoPlay loop muted playsInline className="lf-homepage__background-vid">
              <source src={BackgroundVid} type="video/mp4"></source>
          </video>
          <Header />
      </div>
  )
}
export default App
