import React from 'react';
import Table from './tables/Table';;

// the component will display the card for the table
export default function Card() {
    return (
        <>
            <div className="w-full sm:w-[90%] p-5 border-2 border-gray-300 rounded-3xl mx-auto my-5">
                <Table />
            </div>
        </>
    );
}
