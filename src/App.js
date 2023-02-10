import Hero from "./components/Hero";
import Info from "./components/Info";
import Countdown from "./components/Countdown";
import Tab from "./components/Tab";
import Color from "./components/Color";
import WishList from "./components/WishList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WeddingVideo from './asset/Wedding.mp4';

function App() {
  return (
    <div>
      <div id="ring-animation" className="bg-white z-[1000] pointer-events-none flex fixed items-center justify-center  w-full h-screen">
        <video autoPlay muted>
          <source src={WeddingVideo} type="video/mp4" />
        </video>
      </div>
      <div>
        <Hero />
          <div className="bg-body bg-cover">
            <Info />
            <Countdown /> 
            <Tab />
            <Color />
            <WishList />
            <Contact />
            <Footer /> 
        </div>
      </div>
    </div>
  );
}

export default App;
