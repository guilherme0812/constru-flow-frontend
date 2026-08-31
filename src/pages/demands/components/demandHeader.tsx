import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export const WORK_CATEGORIES = [
  {
    value: "residential_construction",
    label: "Residential Construction",
    description: "Houses, condominiums, residential buildings",
    icon: "Home",
  },
  {
    value: "commercial_construction",
    label: "Commercial Construction",
    description: "Stores, malls, offices",
    icon: "Building2",
  },
  {
    value: "industrial_construction",
    label: "Industrial Construction",
    description: "Warehouses, factories, industrial plants",
    icon: "Factory",
  },
  {
    value: "road_infrastructure",
    label: "Road Infrastructure",
    description: "Roads, highways, bridges, overpasses",
    icon: "Route",
  },
  {
    value: "urban_infrastructure",
    label: "Urban Infrastructure",
    description: "Sanitation, drainage, water/sewage networks",
    icon: "Droplets",
  },
  {
    value: "public_institutional",
    label: "Public / Institutional Works",
    description: "Schools, hospitals, public buildings",
    icon: "Landmark",
  },
  {
    value: "energy",
    label: "Energy",
    description: "Substations, power grids, plants, solar energy",
    icon: "Zap",
  },
  {
    value: "earthworks_foundations",
    label: "Earthworks & Foundations",
    icon: "Mountain",
  },
  {
    value: "renovation_retrofit",
    label: "Renovation & Retrofit",
    icon: "Hammer",
  },
  {
    value: "demolition",
    label: "Demolition",
    icon: "Wrecking Ball" as string, // note: not a real Lucide icon, see below
    description: "See note below on icon alternatives",
  },
  {
    value: "landscaping_urbanization",
    label: "Landscaping & Urbanization",
    icon: "Trees",
  },
  {
    value: "port_maritime_works",
    label: "Port & Maritime Works",
    icon: "Anchor",
  },
]

function DemandHeader() {
  const [value, setValue] = useState([200, 800])

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <div>
      <div className="mt-6">
        <Input variant="filled" placeholder="Search" />
      </div>

      <Field className="w-full mt-6">
        <FieldTitle className="uppercase font-semibold">Price Range</FieldTitle>
        <Slider
          value={value}
          onValueChange={(value) => setValue(value as [number, number])}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="Price Range"
        />
        <FieldDescription className="flex justify-between mt-3">
          <div className="bg-slate-200 px-4 py-2 rounded-b-md uppercase flex gap-4">
            <span>FROM</span>
            <span className="font-semibold tabular-nums text-black">
              ${value[0]}
            </span>
          </div>
          <div className="bg-slate-200 px-4 py-2 rounded-b-md uppercase flex gap-4">
            <span>TO</span>
            <span className="font-semibold tabular-nums text-black">
              ${value[1]}
            </span>
          </div>
        </FieldDescription>
      </Field>

      <FieldGroup className="mt-6">
        <FieldTitle className="uppercase font-semibold">CATEGORIES</FieldTitle>

        <div className="flex flex-col gap-2">
          {WORK_CATEGORIES.map((item, index) => (
            <Field orientation="horizontal" key={index}>
              <Checkbox
                id="terms-checkbox"
                className="size-6"
                name="terms-checkbox"
              />
              <Label htmlFor="terms-checkbox">{item.label}</Label>
            </Field>
          ))}
        </div>
      </FieldGroup>
    </div>
  )
}

export default DemandHeader
