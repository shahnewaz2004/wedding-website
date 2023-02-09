import React from 'react';
import men1 from '../asset/men1.jpg';
import men2 from '../asset/men2.jpg';
import men3 from '../asset/men3.jpg';
import men4 from '../asset/men4.jpg';
import girl1 from '../asset/girl1.jpg';
import girl2 from '../asset/girl2.jpg';
import girl3 from '../asset/girl3.jpg';

function Color() {
  return (
    <div className='max-w-[1000px] mx-auto xl:px-0 px-5'>
        <h1 className='font-Baskvl text-center text-2xl md:text-4xl tracking-wide text-[#b1a041] mb-12 font-semibold'>Дресс Код</h1>
        <p className='font-Lowan text-justify tracking-wide leading-relaxed text-[#363636]'>
          Мы очень старались сделать праздник красивым и будем рады, <br /> если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
        </p>
        <div className='flex flex-wrap gap-2 sm:gap-4 mt-5 mb-20'>
            <div className={`${styles.colorBox} bg-[#8B4513]`}></div> 
            <div className={`${styles.colorBox} bg-[#6B8E23]`}></div>
            <div className={`${styles.colorBox} bg-[#808080]`}></div> 
            <div className={`${styles.colorBox} bg-[#ADD8E6]`}></div> 
            <div className={`${styles.colorBox} bg-[#DEB887]`}></div>
            <div className={`${styles.colorBox} bg-[#FFDEAD]`}></div>
            <div className={`${styles.colorBox} bg-[#FFFFFF]`}></div> 
            <div className={`${styles.colorBox} bg-[#DCDCDC]`}></div>
        </div>

        <div>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
                    <img src={men1} alt="" className='w-full h-[380px] object-cover' />
                    <img src={men2} alt="" className='w-full h-[380px] object-cover' />
                    <img src={men3} alt="" className='w-full h-[380px] object-cover' />
                    <img src={men4} alt="" className='w-full h-[380px] object-cover' />
                    <img src={girl1} alt="" className='w-full h-[380px] object-cover' />
                    <img src={girl2} alt="" className='w-full h-[380px] object-cover sm:col-span-2' />
                    <img src={girl3} alt="" className='w-full h-[380px] object-cover' />
            </div>
        </div>
    </div>
  )
}

const styles = {
    colorBox: 'h-12 flex-1'
}


export default Color