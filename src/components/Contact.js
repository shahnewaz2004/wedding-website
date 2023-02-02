import {useState} from 'react';
import rose from '../asset/rose.png';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

function Contact() {
  const [number, setNumber] = useState('');

  return (
    <div className='w-[1000px] mx-auto flex items-center gap-8 my-10'>
        <img src={rose} className='w-[300px]' />
        <div className='text-center px-16'>
            <h1 className='text-[28px] font-Inter font-medium mb-5 text-[#2f4b42]'>
            ПОДСТВЕРДИТЕ ПОЖАЛУЙСТА СВОЁ ПРИСУТСТВИЕ НА ТОРЖЕСТВЕ
            </h1>
            <div className='px-16'>
             <div className='my-10 space-y-4'>
                <div className='w-full'>
                    <p className='text-left font-Poppins font-semibold text-sm text-[#5f5f5f] mb-2'>Имя Фамилия</p>
                    <input className='outline-none border border-gray-400 h-10 w-full rounded-md px-5' type="text" placeholder='Имя Фамилия' />
                </div>

                <div className='w-full'>
                    <p className='text-left font-Poppins text-sm text-[#5f5f5f] mb-2'>Mobile Number</p>
                    <PhoneInput value={number} onChange={value => setNumber(value)} defaultCountry='RU' international={false} countries={['RU']} className='outline-none border border-gray-400 h-10 w-full rounded-md px-5' type="text" placeholder='Name' />
                </div>

                <div className='text-sm text-[#5f5f5f] space-y-4'>
                  <p className='text-left font-Poppins mb-2'>Chosse one of them</p>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="choose" id="one" />
                    <label className='font-Inter' htmlFor="one">Я приду</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="choose" id="two" />
                    <label className='font-Inter' htmlFor="two">Затрудняюсь ответить</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="choose" id="three" />
                    <label className='font-Inter' htmlFor="three">Я не смогу присутствовать </label>
                  </div>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Contact 