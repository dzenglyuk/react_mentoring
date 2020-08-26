import React from 'react';

const NumberIcon = ({ number }) => {
    return (
        <span role="img" className="anticon">
            { number }
        </span>
    );
};

export default NumberIcon;