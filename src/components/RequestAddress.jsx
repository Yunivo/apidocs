import React from 'react';

function RequestAddress({ method = "GET", url = "https://play.tailwindcss.com" }) {

    const methodColor = () => {
        switch(method) {
            case 'POST':
                return 'text-amber-600';
            case 'GET':
                return 'text-green-500';
            case 'PUT':
                return 'text-blue-400';
            case 'DELETE':
                return 'text-red-700';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="w-full py-2 bold border dark:border-zinc-700 rounded-2xl ">
            <span className={`p-3 select-none ${methodColor()}`}>{method}</span>
            <span className="border-l dark:border-zinc-700 font-mono p-3 select-all">{url}</span>
        </div>
    );
}

export default RequestAddress;