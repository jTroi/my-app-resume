import CardPortfolio from './card/card';
import stylePortfolio from './portfolio.module.css'

const SectionPortfolio = () => {

  return(
    <div className={stylePortfolio.portfolio}>
      <h1 className={stylePortfolio.title}>PORTFOLIO</h1>
      <section className={stylePortfolio.myPortfolioCard}>
        <CardPortfolio 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
                Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
                numquam aperiam fugiat quisquam quam ex."
        /> 
        <CardPortfolio 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
                Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
                numquam aperiam fugiat quisquam quam ex."
        />         
        <CardPortfolio 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
              Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
              numquam aperiam fugiat quisquam quam ex."
        /> 
        <CardPortfolio 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
                Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
                numquam aperiam fugiat quisquam quam ex."
        />
        <CardPortfolio 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. Dignissimos, corporis. 
                Aliquam blanditiis quasi molestiae natus expedita dolores doloremque est! Adipisci animi tempora 
                numquam aperiam fugiat quisquam quam ex."
        /> 
      </section>
      <button className={stylePortfolio.btn}>Learn more</button>
    </div>
  )
};

export default SectionPortfolio;