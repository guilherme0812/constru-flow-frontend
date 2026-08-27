import Paper from "@/components/ui/paper"
import DemandCard from "./components/demandCard"

const demands = [
  {
    id: "a1b2c3d4-1111-4a5b-8c9d-e0f1a2b3c4d5",
    contractorId: "5d863884-523c-4f74-8db9-cf89c2c4fc0f",
    title: "Structural Renovation of Downtown Office Building",
    description:
      "Full structural renovation including reinforced concrete repair, facade restoration, and seismic retrofitting for a 12-story commercial building. Includes scaffolding, waterproofing, and compliance with updated building codes.",
    categoryId: "b2c3d4e5-2222-4b6c-9d0e-f1a2b3c4d5e6",
    worksiteLocation: "1200 Market Street, San Francisco, CA 94102",
    locationLat: 37.7793,
    locationLng: -122.4193,
    estimatedStartDate: "2026-11-15",
    executionPeriodDays: 180,
    budgetRange: "$850,000 - $1,200,000",
    requiredDocuments: [
      "Structural Engineering License",
      "Liability Insurance",
      "OSHA Certification",
    ],
    applicationDeadline: "2026-10-20T23:59:00.000Z",
    status: "published",
    createdAt: "2026-08-26T06:44:36.252Z",
  },
  {
    id: "c3d4e5f6-3333-4c7d-8e9f-a1b2c3d4e5f6",
    contractorId: "5d863884-523c-4f74-8db9-cf89c2c4fc0f",
    title: "Residential Roofing Replacement - Maple Grove Estates",
    description:
      "Complete tear-off and replacement of asphalt shingle roofing for 24 single-family homes in a residential development. Includes gutter installation, ventilation upgrades, and 10-year warranty on materials.",
    categoryId: "d4e5f6a7-4444-4d8e-9f0a-b2c3d4e5f6a7",
    worksiteLocation: "Maple Grove Estates, Austin, TX 78745",
    locationLat: 30.2241,
    locationLng: -97.7794,
    estimatedStartDate: "2026-09-10",
    executionPeriodDays: 45,
    budgetRange: "$120,000 - $180,000",
    requiredDocuments: ["Roofing Contractor License", "Liability Insurance"],
    applicationDeadline: "2026-09-01T23:59:00.000Z",
    status: "published",
    createdAt: "2026-08-20T14:12:09.512Z",
  },
  {
    id: "e5f6a7b8-5555-4e9f-8a0b-c3d4e5f6a7b8",
    contractorId: "5d863884-523c-4f74-8db9-cf89c2c4fc0f",
    title: "Electrical Infrastructure Upgrade - Riverside Logistics Hub",
    description:
      "Design and installation of new electrical infrastructure for a 45,000 sq ft warehouse facility, including 3-phase power distribution, LED lighting retrofit, backup generator integration, and fire alarm system wiring.",
    categoryId: "f6a7b8c9-6666-4f0a-9b1c-d4e5f6a7b8c9",
    worksiteLocation: "4500 Riverside Parkway, Columbus, OH 43215",
    locationLat: 39.9622,
    locationLng: -83.0007,
    estimatedStartDate: "2027-01-05",
    executionPeriodDays: 90,
    budgetRange: "$310,000 - $450,000",
    requiredDocuments: [
      "Master Electrician License",
      "Workers Compensation Insurance",
      "NFPA 70E Certification",
    ],
    applicationDeadline: "2026-12-10T23:59:00.000Z",
    status: "published",
    createdAt: "2026-08-24T09:30:45.887Z",
  },
  {
    id: "a7b8c9d0-7777-4a1b-9c2d-e5f6a7b8c9d0",
    contractorId: "5d863884-523c-4f74-8db9-cf89c2c4fc0f",
    title: "HVAC System Installation - Sunset Medical Center Expansion",
    description:
      "Installation of a complete HVAC system for a new 3-wing medical center expansion, including cleanroom-grade air filtration, ductwork, and climate control zoning compliant with healthcare facility standards.",
    categoryId: "b8c9d0e1-8888-4b2c-9d3e-f6a7b8c9d0e1",
    worksiteLocation: "780 Sunset Boulevard, Phoenix, AZ 85004",
    locationLat: 33.4519,
    locationLng: -112.0687,
    estimatedStartDate: "2026-12-01",
    executionPeriodDays: 120,
    budgetRange: "$540,000 - $700,000",
    requiredDocuments: [
      "HVAC Contractor License",
      "Healthcare Facility Compliance Certificate",
      "Liability Insurance",
    ],
    applicationDeadline: "2026-11-05T23:59:00.000Z",
    status: "draft",
    createdAt: "2026-08-22T17:05:11.203Z",
  },
  {
    id: "c9d0e1f2-9999-4c3d-8e4f-a7b8c9d0e1f2",
    contractorId: "5d863884-523c-4f74-8db9-cf89c2c4fc0f",
    title: "Site Grading and Foundation Work - Pinehill Business Park",
    description:
      "Excavation, land grading, and reinforced concrete foundation work for a new 3-building business park development, including soil compaction testing and stormwater drainage system installation.",
    categoryId: "d0e1f2a3-0000-4d4e-9f5a-b8c9d0e1f2a3",
    worksiteLocation: "9800 Pinehill Road, Charlotte, NC 28273",
    locationLat: 35.1868,
    locationLng: -80.942,
    estimatedStartDate: "2026-10-20",
    executionPeriodDays: 75,
    budgetRange: "$620,000 - $890,000",
    requiredDocuments: [
      "General Contractor License",
      "Environmental Compliance Permit",
      "Liability Insurance",
    ],
    applicationDeadline: "2026-09-25T23:59:00.000Z",
    status: "published",
    createdAt: "2026-08-18T11:47:33.664Z",
  },
]

function DemandsPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <header className="mb-4 font-bold">Filter By:</header>
        </div>

        <div>
          <header className="mb-4 font-bold">
            {demands.length} demands founds
          </header>

          <div className="flex flex-col gap-4 max-h-[calc(100vh-4.5rem)] scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent overflow-y-auto">
            {demands.map((item, index) => (
              <DemandCard key={index} demand={item as any} />
            ))}
          </div>
        </div>

        <div className="bg-gray-500"></div>
      </div>
    </>
  )
}

export default DemandsPage
