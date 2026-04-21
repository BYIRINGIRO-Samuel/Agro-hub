"use client";

import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface FarmLocation {
  name: string;
  lat: number;
  lng: number;
  farmers: number;
}

const farms: FarmLocation[] = [
  { name: "Kigali Hub",    lat: -1.9441, lng: 30.0619, farmers: 8400 },
  { name: "Musanze",       lat: -1.4990, lng: 29.6346, farmers: 5200 },
  { name: "Huye District", lat: -2.6041, lng: 29.7397, farmers: 3800 },
  { name: "Rubavu",        lat: -1.6826, lng: 29.3525, farmers: 3012 },
  { name: "Rwamagana",     lat: -1.9484, lng: 30.4345, farmers: 2140 },
  { name: "Kayonza",       lat: -1.9932, lng: 30.6535, farmers: 1980 },
];

const CENTER: LatLngExpression = [-1.94, 30.0];

export default function LeafletMap() {
  return (
    <MapContainer
      center={CENTER}
      zoom={8}
      style={{ height: "200px", width: "100%", borderRadius: "12px" }}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {farms.map((farm) => {
        const position: LatLngExpression = [farm.lat, farm.lng];
        return (
          <CircleMarker
            key={farm.name}
            center={position}
            radius={Math.sqrt(farm.farmers / 200)}
            pathOptions={{
              fillColor: "#14351a",
              fillOpacity: 0.7,
              color: "#f28b03",
              weight: 2,
            }}
          >
            <Popup>
              <strong style={{ fontSize: 12 }}>{farm.name}</strong>
              <br />
              <span style={{ fontSize: 11, color: "#14351a" }}>
                {farm.farmers.toLocaleString()} farmers
              </span>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
