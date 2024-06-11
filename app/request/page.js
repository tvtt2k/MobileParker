import React from "react";
import MapComponent from "./RequestComponents/MapComponent";
import Lorm from "./RequestComponents/Lorm";

export const metadata = {
  title: "Mobile home dummy markers",
  description : "This page shows dummy markers for mobile homes in the state of North Carolina.",
}

export default function RequestPage() {  
  
  return (
    <div className="flex">
      <div className="w-1/5">
        <Lorm />
      </div>
      <div className="w-4/5">
        <MapComponent />
      </div>
    </div>
  );

}