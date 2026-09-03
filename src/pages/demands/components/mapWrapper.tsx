import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import type { Demand } from "./demandCard"

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

type MapWrapperProps = {
  selectedDemand: Demand
  containerClasses?: string
}

function MapWrapper({
  selectedDemand,
  containerClasses = "h-full w-full",
}: MapWrapperProps) {
  return (
    <div className={`absolute z-10 bg-gray-300 ${containerClasses}`}>
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
        <Marker
          position={[selectedDemand.locationLat, selectedDemand.locationLng]}
          icon={defaultIcon}
        >
          <Popup>{selectedDemand.title ?? "Localização da demanda"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapWrapper
