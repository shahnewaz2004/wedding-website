import React from 'react';
import one from '../asset/one.jpg';
import two from '../asset/two.jpg';
import three from '../asset/three.jpg';
import four from '../asset/four.jpg';
import five from '../asset/five.jpg';

function Color() {
  return (
    <div className='w-[1000px] mx-auto'>
        <h1 className='font-Poppins text-center text-4xl tracking-wide text-[#b1a041] mb-12 font-semibold'>Дресс Код</h1>
        <p className='font-Inter text-justify text-[15px] tracking-wide leading-relaxed text-[#363636]'>
        Мы очень старались сделать праздник красивым и будем рады, <br /> если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
        </p>
        <div className='flex gap-4 mt-5 mb-20'>
            <div className={`${styles.colorBox} bg-[#612E2D]`}></div>
            <div className={`${styles.colorBox} bg-[#92584D]`}></div>
            <div className={`${styles.colorBox} bg-[#AB8181]`}></div>
            <div className={`${styles.colorBox} bg-[#D9A49E]`}></div>
            <div className={`${styles.colorBox} bg-[#E8BEA9]`}></div> 
        </div>

        <div>
            <div className='grid grid-cols-4 gap-4'>
                    <img src={one} alt="" className='w-full object-cover h-[200px]' />
                    <img src={two} alt="" className='w-full object-cover h-[200px]' />
                    <img src={three} alt="" className='w-full object-cover h-[200px] col-span-2' />
                    <img src={five} alt="" className='w-full object-cover h-[200px] col-span-2' />
                    <img src={four} alt="" className='w-full object-cover h-[200px] col-span-2' />
            </div>
        </div>
    </div>
  )
}

const styles = {
    colorBox: 'h-12 flex-1'
}


export default Color