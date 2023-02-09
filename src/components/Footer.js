import img from '../asset/logo.png';

function Footer() {
  return (
        <footer className='bg-[#A0BAC3] sm:py-10 py-8 font-Lowan'>
            <section className='max-w-[1400px] mx-auto flex sm:flex-row flex-col items-center justify-between 2xl:px-0 px-6 sm:space-y-0 space-y-5'>

            <div className='flex-1 sm:text-left text-center'>
                <p className={style.text}>По всем вопросам, связанным с торжеством, <br/> обращайтесь к нашему организатору <br/> Марии: +7 911-837-1391</p>
            </div>
            <div className='flex-1'>
                <img src={img} className="mx-auto w-[240px]" />
            </div>
            <div className='flex-1 text-center sm:text-end'>
                <p className={style.text}>Tel: +03948938473847</p>
                <p className={style.text}>Email: yourmail@example.com</p>
            </div>
            </section>

        </footer>
  )
}

const style = {
    text: 'font-medium text-white sm:text-lg'
}

export default Footer