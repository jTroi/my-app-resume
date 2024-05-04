import styleCard from './card.module.css'

const CardPortfolio = (props) => {

  return(
    <div className={styleCard.card}>
      <p className={styleCard.text}> 
        { props.text }
      </p>
      <div className={styleCard.gif}></div>
  </div>
  )
};

export default CardPortfolio;