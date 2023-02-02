import img from '../asset/logo.png';

function Footer() {
  return (
        <footer className='bg-[#A0BAC3] py-10'>
            <section className='w-[1400px] mx-auto flex items-center justify-between'>

            <div className='flex-1'>
                <p className={style.text}>По всем вопросам, связанным с торжеством, <br/> обращайтесь к нашему организатору <br/> Марии: +7 911-837-1391</p>
            </div>
            <div className='flex-1'>
                <img src={img} className="mx-auto w-[240px]" />
            </div>
            <div className='flex-1 text-end'>
                <p className={style.text}>Tel: +03948938473847</p>
                <p className={style.text}>Email: yourmail@example.com</p>
            </div>
            </section>

        </footer>
  )
}

const style = {
    text: 'font-Poppins font-medium text-white'
}

export default Footer