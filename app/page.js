'use client'

import { useState } from 'react';

// A functional component to create a card that displays content passed as children
function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      {children}
    </div>
  );
}

// The main component for the Home page
export default function Home({ searchParams }) {
  // State for managing visibility of cards
  const [isVisible, setIsVisible] = useState(true);

  // State for managing the list of names that will be displayed on cards
  const [names, setNames] = useState(['Looking for new homes', 'Investing in REITs', 'Our Locations']);

  // Function to toggle the visibility of cards
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // Function to add a new name to the list, which will create a new card
  const handleAdd = () => {
    setNames([...names, 'New Element!']);
  };

  // Check if there is an error in searchParams and throw an error if present
  if (searchParams.error) {
    throw new Error('Error');
  }

  // Render the UI elements including greetings, cards, and buttons
  return (
    <>
      <div className="space-y-4">
        <div>Hello, User</div>
        {isVisible && names.map((name, index) => <Card key={index}>{name}</Card>)}
        <div className="flex space-x-4">
          <button onClick={handleClick}>
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}