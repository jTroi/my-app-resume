import CardPortfolio from './card/card';
import stylePortfolio from './portfolio.module.css'
import imageEx from '../../common/image/example.jpg'
import imageEx1 from '../../common/image/ex1.png'

const SectionPortfolio = () => {
const example1 = 'http://yanarusanova.ru/';

  return(
    <div className={stylePortfolio.portfolio}>
      <h1 className={stylePortfolio.title}>Портфолио</h1>
      <section className={stylePortfolio.sectionCard}>
        <CardPortfolio
          text="Страница бизнес коуча Level 2 ICF для экспертов и предпринимателей"
          link={example1}
          image={imageEx1}
        />
        <CardPortfolio
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
                Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
                numquam aperiam fugiat quisquam quam ex."
          image={imageEx}
        />
        <CardPortfolio
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
              Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
              numquam aperiam fugiat quisquam quam ex."
              image={imageEx}
        />
        <CardPortfolio
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
                Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
                numquam aperiam fugiat quisquam quam ex."
                image={imageEx}
        />
        <CardPortfolio
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
                Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
                numquam aperiam fugiat quisquam quam ex."
                image={imageEx}
        />
      </section>
      <button className={stylePortfolio.btn}>Смотреть больше</button>
    </div>
  )
};

export default SectionPortfolio;