import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger = false}) => {
    return (
        <div className={ `${ isDanger ? 'text-red-600' : '' } flex flex-col` }>
            <span className="text-2xl mb-3">{ type }</span>
            <p>{ value }</p>
        </div>
    );
};

export default DateTimeDisplay;