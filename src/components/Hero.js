import React from 'react'
import border from '../asset/hero-border.png';
import backgroundVideo from '../asset/video.mp4';
import { useState, useEffect } from 'react';

function Hero() {
  const [scroll, setScroll] = useState(0);
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  }) 

  return (
      <section className='text-white h-screen'>
           <div className='fixed top-0 left-0 bg-[#00000048] w-full h-full z-[-1]'></div>
            <video autoPlay muted loop className='fixed top-0 left-0 z-[-2] w-[100vw] h-full object-cover'>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          <div className='px-10 h-[100%] mx-auto py-10'>
            <p className='hidden lg:block font-Danette md:text-4xl xl:text-6xl z-10'>Irina & Nikita</p>
            <div className='flex flex-col items-center justify-center h-[100%]'>
              <h1 className='font-Playfair text-2xl lg:text-4xl xl:text-7xl font-semibold tracking-widest mb-10'>Ирина & Никита</h1>
              <p className='font-Playfair text-base md:text-xl tracking-wide text-center'>Мы женимся и надеемся, что Вы разделите с нами этот день!</p>
              <img src={border} className="w-[350px] my-8" />
              <div className='text-white py-2 px-10 font-Playfair text-xl sm:text-4xl tracking-wider font-semibold sm:mt-10'>3 августа 2023</div>
            </div>
          </div>
      </section>
  )
}
 
export default Hero