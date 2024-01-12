import styleCard from './card.module.css'

const CardPortfolio = (props) => {

  return(
    <div className={styleCard.card}>
      
      <p className={styleCard.text}> 
          { props.text}
       <a href='#' className={styleCard.link}> Learn more </a>
      </p>
  </div>
  )
};

export default CardPortfolio;