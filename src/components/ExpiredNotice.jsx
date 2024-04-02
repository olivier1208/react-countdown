import React from 'react';
import { TriangleAlert, InfoIcon } from 'lucide-react';

const ExpiredNotice = () => {
    return (
        <div
            className="flex flex-col gap-2 p-5 border border-red-100 mt-4 rounded-lg bg-sky-500 font-semibold align-items-center">
            <div className="mx-auto">
                <InfoIcon size={ 24 }/>
            </div>
            <p>Please select a date and time.</p>
        </div>
    );
};

export default ExpiredNotice;