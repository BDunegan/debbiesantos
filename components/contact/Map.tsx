"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import dynamic from "next/dynamic";

// Dynamically import the MapContainer component to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  margin-top: ${({ theme }) => theme.space.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

// Office coordinates (replace with actual coordinates)
const OFFICE_LOCATION = {
  lat: 30.6280, // Replace with actual latitude
  lng: -96.3344, // Replace with actual longitude
  address: "123 Therapy Street, Suite 456, Anytown, ST 12345"
};

export default function Map() {
  return (
    <MapWrapper>
      <MapContainer
        center={[OFFICE_LOCATION.lat, OFFICE_LOCATION.lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[OFFICE_LOCATION.lat, OFFICE_LOCATION.lng]}>
          <Popup>
            <strong>Debbie Santos Counseling</strong>
            <br />
            {OFFICE_LOCATION.address}
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
} 