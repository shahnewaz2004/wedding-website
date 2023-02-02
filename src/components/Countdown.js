import {useEffect, useState} from 'react';
import line from '../asset/line.png';

function Countdown() {

    const [countdownDate, setCountdownDate] = useState(new Date('08/03/2023').getTime());
    const [state, setState] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  
    useEffect(() => {
      setInterval(() => setNewTime(), 1000);
    }, []);
  
    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
        const distanceToDate = countdownDate - currentTime;
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };


    const Box = ({time, text}) => {
        return (
            <div className='text-[#2f4b42] font-Poppins  h-36 w-44 border-double border-4 border-gray-400 flex flex-col gap-y-1 justify-center'>
                <p className='text-3xl font-semibold'>{time}</p>
                <p className=''>{text}</p>
            </div>
        )
    }

  return (
    <div className='bg-[#F3EFED] text-center py-10 my-20'>
        <h1 className='font-Cormorant text-[45px] tracking-wide text-[#2f4b42] font-semibold'>WE ARE GETTING MARRIED</h1>
        <img src={line} alt="" className='mx-auto block opacity-30' />
        <p className='w-[40%] text-[#2f4b42] mx-auto text-center font-Poppins text-lg leading-tight'>Мы создадим нашу семью через…</p>
        <div className='flex gap-16 justify-center py-8'>
            <Box time={state.days} text='DAYS' />
            <Box time={state.hours} text='HOURS' />
            <Box time={state.minutes} text='MINUTES' />
            <Box time={state.seconds} text='SECONDS' />
        </div>
    </div>
  )
}

export default Countdown