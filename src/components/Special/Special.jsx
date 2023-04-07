import React from 'react';

const Special = ({ ring }) => {
    return (
        <div>
            <h4>Special</h4>
            <p style={{ color: "red", fontWeight: "bold" }}>Ring: {ring} <small>[using prop drilling]</small></p>
        </div>
    );
};

export default Special;