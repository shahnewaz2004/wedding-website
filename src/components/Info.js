import React from 'react';
import img from '../asset/dummy.jpg';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';


function Info() {
  return (
    <div className='w-[1140px] mx-auto'>
        <div className='flex items-center'>
            <img src={img} alt="" className='w-[300px]' />
            <div className='bg-[#ffecf0] px-20 h-[200px] min-h-[180px] font-Poppins font-semibold leading-[1.8rem] flex items-center'>
               <div className='space-y-3 text-[15px]'>
                    <ImQuotesLeft className='text-gray-500' />
                    <p className='text-[#4b4b4b]'>Ты делаешь меня счастливее, чем когда-либо я мог себе представить, и если ты позволишь мне, я проведу остаток своей жизни, пытаясь заставить тебя чувствовать то же самое каждый день.</p>
                    <ImQuotesRight className='text-gray-500' />
               </div>
            </div>
        </div>

        <div className='flex items-center'> 
            <div className='bg-[#ffecf0] text-[15px] px-20 h-[200px] min-h-[180px] font-Poppins font-semibold leading-[1.8rem] flex items-center'>
               <div className='space-y-3'>
                    <ImQuotesLeft className='text-gray-500' />
                    <p className='text-[#4b4b4b]'>Мы поженимся! Сегодня и всегда, за пределами завтрашнего дня, ты нужен мне рядом со мной, всегда как мой лучший друг, любовник и вечная родственная душа.</p>
                    <ImQuotesRight className='text-gray-500' />
               </div>
            </div>
            <img src={img} alt="" className='w-[300px]' />
        </div>
    </div>
  )
}

export default Info