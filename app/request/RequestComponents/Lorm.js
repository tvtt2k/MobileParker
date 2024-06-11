"use client"
import React, { useState } from "react";

export default function Lorm() {
    const [filters, setFilters] = useState({
        "Elderly Friendly": false,
        "Quiet Area": false,
        "Pet Friendly": false,
        "Sustainability": false,
        "Energy Efficient": false,
        "Green Spaces": false,
        "Community Center": false,
        "Social Events": false,
        "Health Center": false,
        "Wellness Programs": false,
        "Educational Programs": false,
        "Youth Activities": false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: checked
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMarkers(filters); // Function to update markers based on selected filters
    };

    return (
        <form className="flex flex-col p-5 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
            <div className="text-lg font-semibold text-gray-700 mb-4">
                Filter Mobile Home Features
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(filters).map(filter => (
                    <label key={filter} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name={filter}
                            checked={filters[filter]}
                            onChange={handleCheckboxChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="text-gray-700 text-sm">{filter}</span>
                    </label>
                ))}
            </div>
            
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md w-full">
                Search
            </button>
        </form>
    );
}
