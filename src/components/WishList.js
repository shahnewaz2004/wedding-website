import React from 'react'

function WishList() {
  return (
    <div className='my-20 w-[1140px] mx-auto'>
        <h1 className='font-Tangerine text-center text-6xl tracking-wide text-[#181818] mb-12 font-semibold'>Wish list</h1>
        <div className='grid grid-cols-3 gap-5'>
            <div className={styles.textBox}>
            Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.
            </div>
            <div className={styles.textBox}>
            Нам будет приятно, если на нашу свадьбу вместо цветов ты возьмешь с собой свое прекрасное настроение и по желанию бутылочку вина. Дома мы создадим бар воспоминаний об этом прекрасном дне и людях, которые разделили его с нами.
            </div>
            <div className={styles.textBox}>
                Мы будем рады, если при публикации фото или видео с торжества в instagram, вы отметите нас двоих, чтобы мы могли сохранить все воспоминания и впечатления наших гостей!
                <br/> @_irsw_      @nikitkashumeyko

            </div>
        </div>
    </div>
  )
}


const styles = {
    textBox: 'bg-[#ffecf0] p-8 font-Inter text-[15px] leading-[1.8rem] text-center text-[#4b4b4b]'
}

export default WishList