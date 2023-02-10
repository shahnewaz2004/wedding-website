import React from 'react'

function WishList() {
  return (
    <div className='my-20 max-w-[1140px] mx-auto xl:px-0 px-4'>
        <h1 className='font-Playfair text-center text-4xl ld:text-6xl tracking-wide text-[#181818] mb-12 font-semibold'>ПОЖЕЛАНИЯ</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className={styles.textBox}>
            Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.
            </div>
            <div className={styles.textBox}>
            Нам будет приятно, если на нашу свадьбу вместо цветов ты возьмешь с собой свое прекрасное настроение и по желанию бутылочку вина. Дома мы создадим бар воспоминаний об этом прекрасном дне и людях, которые разделили его с нами.
            </div>
            <div className={styles.textBox}>
                Мы будем рады, если при публикации фото или видео с торжества в instagram, вы отметите нас двоих, чтобы мы могли сохранить все воспоминания и впечатления наших гостей!
                <br/> @_irsw_ &nbsp; @nikitkashumeyko

            </div>
        </div>
    </div>
  )
}


const styles = {
    textBox: 'bg-[#ffecf0] p-4 md:p-8 font-Lowan leading-[1.8rem] text-center text-[#4b4b4b]'
}

export default WishList