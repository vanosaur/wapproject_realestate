"use client";
import "app/utils/fixLeafletIcon";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ properties }) => {
  const defaultPosition = [19.0760, 72.8777]; // Default to Mumbai

  return (
    <MapContainer
      center={defaultPosition}
      zoom={11}
      scrollWheelZoom={true}
      className="h-full w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((property) => (
        <Marker key={property.id} position={[property.lat, property.lng]}>
          <Popup>
            <strong>{property.title}</strong><br />
            {property.location}<br />
            ₹{property.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
