import {useState} from 'react';
import contactImg from '../asset/contact.jpg'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

function Contact() {
  const [number, setNumber] = useState('');

  return (
    <div className='max-w-[1000px] mx-auto flex md:flex-row flex-col items-center lg:gap-5 xl:gap-8 my-10 xl:px-0 px-4'>
        <img src={contactImg} className='sm:w-[300px]' />
        <div className='text-center px-16'>
            <h1 className=' font-Baskvl text-sm md:mt-0 mt-8 lg:text-2xl xl:text-[28px] font-medium mb-5 text-[#2f4b42]'>
            ПОДТВЕРДИТЕ ПОЖАЛУЙСТА СВОЁ ПРИСУТСТВИЕ НА ТОРЖЕСТВЕ
            </h1>
            <div className='md:px-16'>
             <div className='my-10 space-y-4'>
                <div className='w-full'>
                    <p className='text-left font-Lowan font-semibold text-[#5f5f5f] mb-2'>Имя Фамилия</p>
                    <input className='outline-none bg-transparent border border-gray-400 h-10 w-full rounded-md px-5' type="text" placeholder='Имя Фамилия' />
                </div>

                <div className='w-full'>
                    <p className='text-left font-Lowan font-semibold  text-[#5f5f5f] mb-2'>Номер телефона</p>
                    <PhoneInput value={number} onChange={value => setNumber(value)} defaultCountry='RU' addInternationalOption={false} countries={['RU']} className='outline-none border bg-transparent border-gray-400 h-10 w-full rounded-md px-5' type="text" placeholder='Номер телефона' />
                </div>

                <div className='text-[#5f5f5f] space-y-4'>
                  <p className='text-left font-Lowan font-semibold mb-2'>Подтвердите присутствие</p>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="choose" id="one" />
                    <label className='font-Lowan' htmlFor="one">Я приду</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="choose" id="two" />
                    <label className='font-Lowan' htmlFor="two">Затрудняюсь ответить</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="choose" id="three" />
                    <label className='font-Lowan' htmlFor="three">Я не смогу присутствовать </label>
                  </div>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Contact 