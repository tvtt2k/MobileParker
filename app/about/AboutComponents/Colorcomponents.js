

"use client"
import { useState } from "react";

export default function ColorComponents() {
    // State for keeping track of the chosen color
    const [chosenColor, setChosenColor] = useState("green");
  
    // Function to toggle the color between green and blue
    function ToggleColor() {
      setChosenColor(chosenColor === "green" ? "blue" : "green");
    }
  
    // Rendering the component
    return (
      <>
        <h1 style={{ color: chosenColor, fontSize: "2rem" }}>
          This is the about page
        </h1>
        <button onClick={ToggleColor} className="bg-black text-white">
          Change Color
        </button>
      </>
    )
}