import React from 'react';
import hisImg from '../asset/his.png';
import herImg from '../asset/her.png';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';


function Info() {
  return (
    <div className='max-w-[1140px] mx-auto xl:px-0 sm:px-10 px-4 sm:space-y-0 space-y-10'>
        <div className='flex sm:flex-row flex-col items-center'>
            <img src={hisImg} alt="" className='w-full sm:w-[250px] md:w-[280px]' />
            <div className='bg-[#ffecf0] px-4 md:px-20 py-4 min-h-[180px] font-Lowan font-semibold leading-[1.8rem] flex items-center'>
               <div className='space-y-3'>
                    <ImQuotesLeft className='text-gray-500' />
                    <p className='text-[#4b4b4b]'>Ты делаешь меня счастливее, чем когда-либо я мог себе представить, и если ты позволишь мне, я проведу остаток своей жизни, пытаясь заставить тебя чувствовать то же самое каждый день.</p>
                    <ImQuotesRight className='text-gray-500' />
               </div>
            </div>
        </div>

        <div className='flex sm:flex-row flex-col items-center'> 
            <div className='bg-[#ffecf0] sm:order-1 order-2 px-4 md:px-20 py-4 min-h-[180px] font-Lowan font-semibold leading-[1.8rem] flex items-center'>
               <div className='space-y-3'>
                    <ImQuotesLeft className='text-gray-500' />
                    <p className='text-[#4b4b4b]'>Мы поженимся! Сегодня и всегда, за пределами завтрашнего дня, ты нужен мне рядом со мной, всегда как мой лучший друг, любовник и вечная родственная душа.</p>
                    <ImQuotesRight className='text-gray-500' />
               </div>
            </div>
            <img src={herImg} alt="" className='w-full sm:order-2 order-1 sm:w-[250px] md:w-[300px]' />
        </div>
    </div>
  )
}

export default Info