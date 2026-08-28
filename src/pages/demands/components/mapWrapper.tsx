import { MapContainer, TileLayer } from "react-leaflet"
import type { Demand } from "./demandCard"

function MapWrapper({ selectedDemand }: { selectedDemand: Demand }) {
  return (
    <div className="absolute z-10 h-full w-full bg-gray-300">
      <MapContainer
        className="h-full w-full"
        center={[selectedDemand.locationLat, selectedDemand.locationLng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default MapWrapper
