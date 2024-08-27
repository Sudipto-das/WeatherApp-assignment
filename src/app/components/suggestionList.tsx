'use client'

import React from 'react';
import { localitiesType } from "@/data/localities";

interface SuggestionListProps {
    suggestions: localitiesType[];
    onSuggestionClick: (locality: localitiesType) => void
}

const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions, onSuggestionClick }) => {


    if (suggestions.length === 0) {
        return <div className=" text-gray-500 p-2">No suggestions found</div>;
    }

    return (
        <ul className="mt-2 w-1/3 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto fixed top-24">
            {suggestions.map((suggestion) => (
                <li
                    key={suggestion.localityId}
                    onClick={() => onSuggestionClick(suggestion)}
                    className=" px-4 py-2 hover:bg-green-100 cursor-pointer transition duration-200 ease-in-out"
                >
                    {suggestion.localityName}
                </li>
            ))}
        </ul>
    );
};

export default SuggestionList;
