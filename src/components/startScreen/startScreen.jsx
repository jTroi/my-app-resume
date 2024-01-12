import React from "react";
import styleStartScreen from './startScreen.module.css'
import urlImg from '../../image/12.png'

const StartScreen = () => {


  return(
    <section className={styleStartScreen.fullScreen}>
      <div className={styleStartScreen.fullScreenBody}>
        <h2>Привет! Я <span className={styleStartScreen.nameTitle}> Константин</span></h2>
        
        <h2 className={styleStartScreen.p}>
        Web Application Developer &amp;&nbsp; Development Consultant
        </h2>

        <a href="#" className={styleStartScreen.link}>Связаться со мной</a>
      </div>

      <div className={styleStartScreen.imageBody}>
        {/* <section> */}
           <img
            src={urlImg}
            alt="Man Developer"
            className={styleStartScreen.image}  
          /> 
        {/* </section>+ */}
       
      </div>

      
    </section>
  )
}

export default StartScreen;