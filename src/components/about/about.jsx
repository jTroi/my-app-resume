import React from "react";
import styleAbout from './about.module.css'

const About = () => {
  return(
    <div className={styleAbout.about}>
      <section>
        <h1 className={styleAbout.title}>About</h1>
        <p className={styleAbout.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quia nam nisi at enim, labore hic vel quam maiores culpa, aut, eaque dolorum cum earum vero minima nostrum sint facere.
          Magnam dolorem aliquid sapiente ipsa qui sequi debitis doloribus eaque repellat culpa, recusandae dignissimos ratione consequatur vitae pariatur quaerat quam exercitationem sint, corporis dolore molestiae consequuntur officiis tempora. Voluptatibus, ut!
        </p>
      </section>
    </div>
  )
}

export default About;