import React from 'react';
import men1 from '../asset/men1.jpg';
import men2 from '../asset/men2.jpg';
import men3 from '../asset/men3.jpg';
import girl1 from '../asset/girl1.jpg';
import girl2 from '../asset/girl2.jpg';
import girl3 from '../asset/girl3.jpg';

import girlColor from '../asset/girl-color.png';
import menColor from '../asset/men-color.png';


function Color() {
  return (
    <div className='max-w-[1000px] mx-auto xl:px-0 px-5'>
        <h1 className='font-Playfair text-center text-2xl md:text-4xl tracking-wide mb-12 font-semibold'>DRESS CODE</h1>
        <p className='font-Lowan text-center tracking-wide leading-relaxed text-[#363636]'>
          Мы очень старались сделать праздник красивым и будем рады, <br /> если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
        </p>
        <div className='flex justify-between sm:flex-row flex-col items-center gap-2 sm:gap-4 mt-5 mb-10'>
            <img src={girlColor} className="xl:order-1 order-2 w-[250px] md:w-[450px]"/>
            <img src={menColor} className="xl:order-2 order-1 w-[140px] md:w-[260px]"/>
        </div>

        <div className='flex sm:flex-row flex-col justify-between relative xl:left-28 2xl:px-0 lg:px-10'>
              
              <div className='relative xl:space-y-0 space-y-8 xl:order-1 order-2'>
                  <img src={girl1} alt="" className='w-full h-[380px] object-cover relative xl:z-[5]' />
                  <img src={girl2} alt="" className='w-full h-[380px] object-cover  xl:absolute top-[15%] right-[90%]' />
                  <img src={girl3} alt="" className='w-full h-[380px] object-cover z-10 xl:relative top-[-100px] left-16' />
              </div>

              <div className='relative space-y-8  xl:order-2 order-1'> 
                <p className='xl:absolute sm:text-left text-center sm:w-auto w-max sm:mx-0 mx-auto font-Lowan top-10 text-lg left-[-90%]'>Можете вдохновиться <br /> этими подсказками</p>
                <img src={men1} alt="" className='w-full h-[350px] object-cover' />
                <img src={men2} alt="" className='w-full h-[350px] object-cover xl:absolute top-[15%] right-[90%]' />
                <img src={men3} alt="" className='w-full h-[350px] object-cover z-10 relative' />
              </div> 
        </div>
    </div>
  )
}

const styles = {
    colorBox: 'h-12 flex-1'
}


export default Color