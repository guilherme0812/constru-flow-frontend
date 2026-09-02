import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useCategories } from "@/hooks/categories/useCategories"
import { useState } from "react"

function DemandHeader() {
  const [value, setValue] = useState([200, 800])

  const { data, isLoading, error } = useCategories()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading categories</p>

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
          {data?.map((item, index) => (
            <Field orientation="horizontal" key={index}>
              <Checkbox
                id="terms-checkbox"
                className="size-6"
                name="terms-checkbox"
              />
              <Label htmlFor="terms-checkbox">{item.name}</Label>
            </Field>
          ))}
        </div>
      </FieldGroup>
    </div>
  )
}

export default DemandHeader
