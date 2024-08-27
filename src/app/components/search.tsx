'use client'

import React, { useState } from 'react';
import { localities, localitiesType } from '@/data/localities';
import SuggestionList from './suggestionList';
import WeatherDetails from './weather';
import { setSelectedLocality } from '@/redux/slices/localitySlice';
import { useDispatch } from 'react-redux';

// Function to filter suggestions based on input value
const getFilteredSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  return inputValue === ''
    ? []
    : localities.filter((locality) =>
      locality.localityName.toLowerCase().includes(inputValue)
    );
};

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<localitiesType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Fetch suggestions based on the input value
    const filteredSuggestions = getFilteredSuggestions(value);
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true); // Show suggestions dropdown
  };

  const handleSuggestionClick = (locality: localitiesType) => {
    console.log(locality)
    dispatch(setSelectedLocality(locality));
    setInputValue(locality.localityName);
    setShowSuggestions(false);
  };



  return (
    <div className="mt-10 flex justify-center flex-col items-center">
      <input
        type="text"
        placeholder="Search for a locality"
        value={inputValue}
        onChange={handleInputChange}
        className="w-1/3 py-3 px-3 rounded-xl flex justify-center border"
      />
      {showSuggestions && inputValue && (
        <SuggestionList suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
      )}
    
    </div>
  );
};

export default SearchBox;
