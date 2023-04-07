import React from 'react';
import Special from '../Special/Special';

const Myself = ({ ring }) => {
    return (
        <div>
            <h3>Myself</h3>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;