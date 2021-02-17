import React from 'react';

const Icon = ({ name }) => {
    return (
        <span className="icon-indicator">
            <i className={name} />
        </span>
    )
}

export default Icon;