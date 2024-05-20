import s from './card.module.css'

const CardPortfolio = (props) => {

  return(
    <div className={s.card}
     style={{ 
          background: `url(${props.image})`,
          backgroundSize: 'contain'
        }}
    >
      <div className={s.text}>
        <p> 
          { props.text }
        </p>
          <a
            className={s.link}
            href={props.link}
          >
            Подробнее
          </a>
      </div>
  </div>
  )
};

export default CardPortfolio;