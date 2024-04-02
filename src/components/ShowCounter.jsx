import React from 'react';
import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <div className="countdown-link flex justify-center border border-b rounded-lg p-12 font-bold text-5xl gap-2 align-center">
                <DateTimeDisplay value={ days } type={ 'Days' } isDanger={ days <= 3 }/>
                <span className="mt-10">:</span>
                <DateTimeDisplay value={ hours } type={ 'Hours' }/>
                <span className="mt-10">:</span>
                <DateTimeDisplay value={ minutes } type={ 'Mins' }/>
                <span className="mt-10">:</span>
                <DateTimeDisplay value={ seconds } type={ 'Sec' }/>
            </div>
        </div>
);
};

export default ShowCounter;