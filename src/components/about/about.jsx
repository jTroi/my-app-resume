import React from "react";
import s from './about.module.css'
import macBook from '../../common/image/macbook.jpg'

const About = () => {
  return(
    <div className={s.about}>
      <h1 className={s.title}>Обо мне</h1>
        <div className={s.description}>
          <section className={s.text}>
            <p>
              Здравствуйте! Меня зовут Константин, и&nbsp;я&nbsp;являюсь опытным веб-разработчиком с&nbsp;более чем трёхлетним стажем работы. За&nbsp;это время мне довелось работать над различными проектами, начиная от&nbsp;небольших сайтов-визиток и&nbsp;заканчивая крупными корпоративными порталами.
            </p>
            <p>
              Я&nbsp;стремлюсь создавать качественные и&nbsp;инновационные решения, учитывая все требования заказчика. Моё главное преимущество&nbsp;&mdash; это умение работать в&nbsp;команде и&nbsp;находить общий язык с&nbsp;другими специалистами, такими как дизайнеры, маркетологи и&nbsp;SEO-специалисты.
            </p>
            <p>
              Я&nbsp;всегда открыт к&nbsp;новым вызовам и&nbsp;готов взяться за&nbsp;проекты любой сложности. Если у&nbsp;вас есть какие-то вопросы или предложения, пожалуйста, свяжитесь со&nbsp;мной. Буду рад обсудить возможности сотрудничества!
            </p>
          </section>
          <section className={s.image}>
            <img
              src={macBook}
              alt="macBook"
            />
          </section>
        </div>
    </div>
  )
}

export default About;