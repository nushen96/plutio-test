import React from 'react'

const Tag = ({tagText}) => {
    return (
        <div className="custom-field custom-field-single">
            <p className="color-light has-color-tag">
                <span className="field-background" />
                <span className="field-title">{tagText}</span>
            </p>
        </div>
    );
}

export default Tag;