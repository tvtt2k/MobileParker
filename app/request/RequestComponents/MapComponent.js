"use client";
import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow} from '@react-google-maps/api';

export default function MapComponent() {
    const containerStyle = {
        width: "100%",
        height: "90vh",
      }
      
      const options = {
        mapId: "db28cfbb49624320",
        mapTypeControl: false,
      }

      const center = {
        lat: 36.14789801243495,
        lng: -80.71384859540537,
      }

      const positions =[
        {
          lat: 36.14789801243495,
          lng: -80.71384859540537,
          name: "Mobile Home Alpha",
          info: "This is Mobile Home Alpha where residents demographics is between 60-90 years old.",
          imgUrl: "https://images.unsplash.com/photo-1626519703518-a93de50cc9f7?q=80&w=3351&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          features: ["Elderly Friendly", "Quiet Area", "Pet Friendly"],
        },
        {
          lat: 35.221301475920875,
          lng: -80.76684206643607,
          name: "Mobile Home Beta",
          info: "This is Mobile Home Beta with a focus on sustainability and green living.",
          imgUrl: "https://plus.unsplash.com/premium_photo-1669393967816-de1fa123a839?q=80&w=3290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          features: ["Sustainability", "Energy Efficient", "Green Spaces"],
        },
        {
          lat: 36.04839065938496,
          lng: -79.80854084533152,
          name: "Mobile Home Gamma",
          info: "This is Mobile Home Gamma with a focus on community and socializing.",
          imgUrl: "https://images.unsplash.com/photo-1550096141-7263640aa48c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          features: ["Community Center", "Social Events", "Pet Friendly"],
        },
        {
          lat: 35.966067394210924,
          lng: -78.92232424141253,
          name: "Mobile Home Delta",
          info: "This is Mobile Home Delta with a focus on health and wellness.",
          imgUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          features: ["Health Center", "Wellness Programs", "Quiet Area"],
        },
        {
          lat: 34.85124842905499,
          lng: -76.54159516180715,
          name: "Mobile Home Epsilon",
          info: "This is Mobile Home Epsilon with a focus on education and learning.",
          imgUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
          features: ["Educational Programs", "Green Spaces", "Youth Activities"],
        },
      ]
      
      const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:"AIzaSyD_DUQVlgvn11rY4KH8jLOASs54gUZjmTI",
      })
      const [selectedPosition, setSelectedPosition] = useState(null);

      const pinIcon = {
        url: "/assets/pin.png",
        scaledSize: {width:50,height:50},
      }

      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            options={options}
            center={center}
            zoom={8}
          >
{positions.map((position, index) => (
    <MarkerF
        position={position}
        icon={pinIcon}
        onClick={() => setSelectedPosition(position)}
    />
))}
            {selectedPosition && (
                <InfoWindow
                    position={selectedPosition}
                    onCloseClick={() => setSelectedPosition(null)}
                >
          <div className="flex items-center space-x-4 p-2"> 
              <img src={selectedPosition.imgUrl} alt="Mobile Home" className="w-14 h-14 rounded-full" />
              <div className="flex flex-col">
                  <h2 className="text-xl font-bold">{selectedPosition.name}</h2>
                  <p>{selectedPosition.info}</p>
              </div>
          </div>
                </InfoWindow>
            )}

            <></>
          </GoogleMap>
      ) : (<>
      </>
    );
}