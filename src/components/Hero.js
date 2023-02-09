import React from 'react'
import border from '../asset/border.json';
import Lottie from 'lottie-react';
import backgroundVideo from '../asset/video.mp4';


function Hero() {
  return (
    <section className='lg:h-screen w-[100%] bg-cover bg-no-repeat mb-20 text-white relative'>
      <div className='absolute top-0 left-0 bg-[#00000048] w-full h-full z-[-1]'></div>
       <video autoPlay muted loop className='absolute top-0 left-0 z-[-2] w-screen h-full object-cover'>
        <source src={backgroundVideo} type="video/mp4" />
       </video>
        <div className='px-10 h-[100%] mx-auto py-10'>
          <p className='hidden lg:block font-Baskvl md:text-2xl xl:text-3xl font-semibold z-10'>Ирина & Никита</p>

          <div className='flex flex-col items-center justify-center h-[100%]'>
            <p className='font-Lowan tracking-widest text-lg mb-2 lg:mb-4 xl:mb-8'>Свадьба</p>
            <h1 className='font-Baskvl text-2xl lg:text-4xl xl:text-7xl font-semibold tracking-widest'>Ирина & Никита</h1>
            <Lottie animationData={border} loop={false} className='w-52' />
            <p className='font-Lowan text-base md:text-xl tracking-wide text-center'>Мы женимся и надеемся, что Вы разделите с нами этот день!</p>
            <div className='bg-[#D4C8B4] text-[#7E4F3C] py-2 px-10 font-Lowan text-xl tracking-wider font-semibold mt-10'>03.08.2023</div>
          </div>
        </div>
    </section>
  )
}
 
export default Hero