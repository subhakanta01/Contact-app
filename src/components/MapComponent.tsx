// src/components/MapComponent.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MapComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['countriesData'],
    queryFn: async () => {
      const res = await axios.get('https://disease.sh/v3/covid-19/countries');
      return res.data;
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((country: any) => (
        <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
