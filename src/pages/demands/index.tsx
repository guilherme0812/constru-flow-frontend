import DemandCard from "./components/demandCard"
import { useState } from "react"
import MapWrapper from "./components/mapWrapper"
import DemandHeader from "./components/demandHeader"
import { useDemands } from "@/hooks/demands/useDemands"
import type { DemandDataType } from "@/api/demandService"

function DemandsPage() {
  const [selectedDemand, setSelectedDemand] = useState<DemandDataType>()

  const { data } = useDemands()

  const handleSelectDemand = (demand: DemandDataType) => {
    setSelectedDemand(undefined)

    setTimeout(() => {
      setSelectedDemand(demand)
    }, 100)
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <header className="mb-4 font-bold">Filter By:</header>
          <DemandHeader />
        </div>

        <div className="col-span-4">
          <header className="mb-4 font-bold">
            {data?.length} demands found
          </header>

          <div className="flex flex-col gap-4 max-h-[calc(100vh-4.5rem)] scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent overflow-y-auto">
            {data?.map((item, index) => (
              <DemandCard
                key={index}
                handleClick={handleSelectDemand}
                demand={item as any}
              />
            ))}
          </div>
        </div>

        <div className="col-span-5 relative w-full h-full">
          {selectedDemand && <MapWrapper selectedDemand={selectedDemand} />}
        </div>
      </div>
    </>
  )
}

export default DemandsPage
