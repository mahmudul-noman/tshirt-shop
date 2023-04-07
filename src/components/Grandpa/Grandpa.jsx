import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
// ============================================================== //

export const RingContext = createContext('Golden Ring');
export const MoneyContext = createContext();
const Grandpa = () => {
    const [money, SetMoney] = useState(0);
    const ring = 'Diamond Ring';
    return (
        <>
            <h4 style={{ color: "green" }}>Summary: Prop Drilling && Context API to pass data to a many level components</h4>
            <MoneyContext.Provider value={[money, SetMoney]}>
                <RingContext.Provider value='Golden Rings'>
                    <div className='grandpa-container'>
                        <h2>Grandpa</h2>
                        <h4>Money: {money}</h4>
                        <section className='flex'>
                            <Father ring={ring}></Father>
                            <Uncle></Uncle>
                            <Aunty ring={ring}></Aunty>
                        </section>
                    </div>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </>
    );
};

export default Grandpa;