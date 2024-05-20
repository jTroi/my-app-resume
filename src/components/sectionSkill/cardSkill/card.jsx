import Icon from '@mdi/react';
import styleCard from './card.module.css'

const CardSkill = (props) => {

  return(
    <div className={styleCard.cardBody}>
      <Icon path={props.icon} size={3} />
      <h3>{props.name}</h3>
    </div>
  )
};

export default CardSkill;