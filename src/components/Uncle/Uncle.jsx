import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, SetMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <h4>Money: {money}</h4>
            <button onClick={() => SetMoney(money + 1000)}>Send Money</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;