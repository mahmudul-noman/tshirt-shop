import React from 'react';
import './Tshirt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// ============================================================== //
const Tshirt = ({ tshirt, handleAddToCart }) => {

    const { _id, picture, name, price } = tshirt;

    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: <span style={{ color: 'orange', fontWeight: 'bold' }}>${price}</span></p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Tshirt;