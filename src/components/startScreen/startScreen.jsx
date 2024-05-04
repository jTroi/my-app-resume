import React from "react";
import s from './startScreen.module.css'
import urlImg from '../../common/image/12.png'

const StartScreen = () => {


  return(
    <section className={s.fullScreen}>

      <div className={s.greetingText}>
        <div className={s.text}>
          <h2>Привет! Я <span className={s.title}> Frontend-разработчик</span></h2>
          
          <h2 className={s.subtitle}>
            Мой опыт создания сайтов более 3&nbsp;лет
          </h2>
        </div>
        <a href="https://t.me/jTroi_dev" className={s.link}>Связаться со мной</a>
      </div>

      <div className={s.imageSection}>
           <img
            src={urlImg}
            alt="Man Developer"
            className={s.image}  
          /> 
      </div>

    </section>
  )
}

export default StartScreen;