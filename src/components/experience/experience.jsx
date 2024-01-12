import React from "react";
import styleExperience from './experience.module.css'
import Icon from "@mdi/react";
import {mdiCircle} from "@mdi/js";


const SectionExperience = (props) =>{

  return (
    <div className={styleExperience.experience}>
      <h1 className={styleExperience.title}>Experience</h1>

        <section className={styleExperience.text}>
          <section className={styleExperience.lineDecoration}>
            <Icon path={mdiCircle} className={styleExperience.svg} size={2} color="#FFC107" />
          </section>
           
            <section className={styleExperience.sectionText}>
              <h2>Middle Frontend Developer</h2>
            
              <h3>Moscow, Russia</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Veritatis ipsa, a illo explicabo laudantium ab facere quo,
                possimus, voluptatem hic corrupti consequatur maxime sunt odit 
                fugiat vel. Expedita, quam minus.Lorem ipsum dolor sit, amet 
                Lorem ipsum dolor sit, amet consectetur adipisiium ab facere quo,
                possimus, voluptatem hic corrupti consecing elit. 
                Veritatis ipsa, a illo explicabo laudantquatur maxime sunt odit 
                fugiat vel. Expedita, quam minus.consectetur adipisicing elit. 
                Veritatis ipsa, a illo explicabo laudantium ab facere quo,
                possimus, voluptatem hic corrupti consequatur maxime sunt odit 
                fugiat vel. Expedita, quam minus.
              </p>                 
            </section>
        </section>

        <section className={styleExperience.text}>
          <section className={styleExperience.lineDecoration}>
            <Icon path={mdiCircle} className={styleExperience.svg} size={2} color="#FFC107" />
          </section>
            
          <section className={styleExperience.sectionText}>  
            <h2>Middle Frontend Developer</h2>
            <h3>Moscow, Russia</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Veritatis ipsa, a illo explicabo laudantium ab facere quo,
              possimus, voluptatem hic corrupti consequatur maxime sunt odit 
              fugiat vel. Expedita, quam minus.
            </p>
          </section>
        </section>
    </div>
  )
}

export default SectionExperience;