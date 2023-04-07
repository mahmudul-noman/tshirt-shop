import React from 'react';

const Friend = ({ ring }) => {
    return (
        <div>
            <h4>Friend</h4>
            <p style={{ color: "red", fontWeight: "bold" }}>Ring: {ring} <small>[using prop drilling]</small></p>
        </div>
    );
};

export default Friend;