import React from 'react';
import img from '../asset/dummy.jpg';

function Tab() {
  return (
    <div className='max-w-[1000px] mx-auto my-10'>
        <hr className='border-t w-[30%] mx-auto border-black' />
        <h1 className='font-Inter text-4xl font-medium text-center text-[#181818] my-10'>План Дня</h1>

        <div className='border border-gray-400 h-[350px] p-10 flex gap-x-6'>
          <div className='flex w-[70%]'>
            <div>
              <img src={img} alt="" className='w-[180px]' />
            </div>
            <div className='flex-1 tab-content overflow-auto px-8'>
              <h3 className='text-[28px] font-Poppins font-semibold mb-5'>
              Место торжества
              </h3>
              <p className='font-Inter text-justify text-[15px] tracking-wide leading-relaxed text-[#363636]'>
              Наша свадебная церемония, словно сошедшая со страниц романа о Средневековье, пройдет в живописном саду роскошного замка Бип. После того, как мы скажем друг другу заветное «Да» (после того как мы соединим наши сердца и судьбы), мы будем рады отпраздновать это важное событие вместе с вами за праздничным столом! И обещайте, что вы возьмете с собой хорошее настроение, ведь, мы надеемся танцевать и веселиться всю ночь напролет!
              </p>
            </div>
          </div>
          <div className='w-[30%] space-y-5 tab-content overflow-auto'>
            <div className='space-y-2'>
              <h4 className='font-Poppins text-[15px] font-semibold'>Замок Бип</h4>
              <p className='font-Inter text-sm text-[#363636]'>Четверг <br /> 3 августа <br /> 16:30</p>
              <button className='px-10 py-2 text-white hover:bg-[#363636] tracking-wider transition duration-200 rounded-md bg-[#c2c2c2] font-Inter font-medium text-[13px]'>VIEW ON MAP</button>
            </div>
            <div className='space-y-2'>
              <p className='font-Inter text-sm text-[#363636]'>Мы очень Вас любим и не могли о Вас не позаботиться! Все наши гости смогут разместиться в комфортных номерах замка, а утром мы Вас будем ждать за вкусным, уютным завтраком, чтобы вместе вспомнить как это было</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 justify-between relative top-[-8px]'>
          <div className={styles.selectContainer}>
            <input type="radio" name="select" className={styles.radio}/>
            <h5 className={styles.selectHeading}> Сбор Гостей, заселение в отель </h5>
            <p className={styles.selectTime}>16:30</p>
          </div>
         
          <div className={styles.selectContainer}>
            <input type="radio" name="select" className={styles.radio}/>
            <h5 className={styles.selectHeading}> Церемония </h5>
            <p className={styles.selectTime}>17:30</p>
          </div>
         
          <div className={styles.selectContainer}>
            <input type="radio" name="select" className={styles.radio}/>
            <h5 className={styles.selectHeading}> Праздничный ужин </h5>
            <p className={styles.selectTime}>18:30</p>
          </div>
        </div>
    </div>
  )
}


const styles = {
  selectContainer: 'flex text-center items-center flex-col px-10 cursor-pointer',
  selectHeading: 'font-Poppins font-semibold mt-5 mb-2',
  selectTime: 'font-Inter text-sm text-[#363636]'
}

export default Tab