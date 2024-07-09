

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Googlemap = () => {
  const center = [12.9881, 80.2470]; 

  return (
    <MapContainer
      center={center}
      zoom={15} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      />
      <Marker position={center}>
        <Popup>
          Rajiv Gandhi Salai, Taramani, Chennai 600113 <br /> This is where I want to be!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Googlemap;
