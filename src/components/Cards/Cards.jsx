import Card from "../Card/Card";
import styles from './Cards.module.css'

const Cards = (props) => {
 
  return (
    <div className={styles.div}>
      {props.characters.map((pj) => (
        <Card
          key={pj.id}
          id={pj.id}
          name={pj.name}
          species={pj.species}
          onClose={props.onClose}
          gender={pj.gender}
          status={pj.status}
          image={pj.image}
          origin={pj.origin.name}
        />
      ))}
    </div>
  );
};

export default Cards;







