'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';



function RequestAddress({ method = "GET", url = "https://play.tailwindcss.com" }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const divRef = useRef(null);

    const methodColor = useMemo(() => {
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
    }, [method]);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !divRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full flex py-2 bold border dark:border-zinc-700 rounded-2xl relative">
            <div className={`pl-3 pr-3 pt-1 pb-1 select-none ${methodColor}`}>{method}</div>
            <div ref={divRef} onClick={() => setIsOpen(!isOpen)} className="border-l dark:border-zinc-700 font-mono pl-3 pr-3 pt-1 pb-1 overflow-x-auto whitespace-nowrap scrollbar-thin">
                {url}
            </div>
            {isOpen &&
                <div ref={dropdownRef} className="dropdown-content absolute bg-black text-white dark:ring-1 dark:ring-white/10 border border-zinc-800 mt-12 rounded-2xl shadow-2xl p-4 w-full select-all break-words max-h-[100px] overflow-auto z-20">
                    {url}
                </div>
            }
        </div>
    );
}

export default RequestAddress;


