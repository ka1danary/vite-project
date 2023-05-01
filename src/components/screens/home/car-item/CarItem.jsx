import styles from "../home.module.css";
import PropTypes from 'prop-types';

const CarItem = (props) => {

    return (
        <div key={props.value.id} className={styles.item}>
            <div className={styles.image}
                 style ={{
                     backgroundImage: `url(${props.value.image})`
                 }}/>
            <div className={styles.info}>
                <h2>{props.value.name}</h2>
                <p>{new Intl.NumberFormat('en-Us', {
                    style: 'currency',
                    currency:'USD',
                    currencyDisplay:'narrowSymbol',
                }).format(props.value.price)}</p>
                <button>Read more</button>
            </div>
            <PropTypes/>
        </div>
    );
};


export default CarItem;