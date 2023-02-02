import Hero from "./components/Hero";
import Info from "./components/Info";
import Countdown from "./components/Countdown";
import Tab from "./components/Tab";
import Color from "./components/Color";
import WishList from "./components/WishList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WeedingVideo from './asset/Wedding.mp4';
import React, { useState, useEffect } from "react";

function App() {
  const [showAnimation, setAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 13000)
  })

  useEffect(() => {
    if(showAnimation) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  }, [showAnimation])
  return (
    <div className={`${showAnimation ? 'overflow-hidden' : 'overflow-auto'} h-screen`}>
      <div className={`${showAnimation ? 'top-0' : 'top-[-200vh]'} transition-all duration-1000 flex absolute pointer-events-none items-center justify-center w-screen h-screen overflow-y-hidden`}>
        <video width="100%" autoPlay muted>
          <source src={WeedingVideo}  type="video/mp4" />
        </video>
      </div>
      <div className={`${showAnimation ? 'opacity-0' : 'opacity-100'} transition-all duration-1000`}>
        <Hero />
        <Info />
        <Countdown />
        <Tab />
        <Color />
        <WishList />
        <Contact />
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
