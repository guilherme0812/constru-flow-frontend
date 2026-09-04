import { useDemand } from "@/hooks/demands/useDemand"
import { formatDate, getDaysUntilDeadline } from "@/lib/utils"
import { useParams } from "react-router-dom"
import { statusConfig } from "./utils"
import { useAuth } from "@/hooks/auth/useAuth"
import { Calendar, Clock, MapPin, Wallet } from "lucide-react"
import MapWrapper from "./components/mapWrapper"
import { IoStar, IoStarOutline } from "react-icons/io5"
import { Button } from "@/components/ui/button"
import { LuFileSliders } from "react-icons/lu"
import CreateApplicationDialog from "./components/createApplicationDialog"
import { useState } from "react"

function DemandDetailPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { id } = useParams<{ id: string }>()
  const { user } = useAuth()

  const { data: demand, isLoading } = useDemand(id as string)

  if (isLoading) {
    return <div>Loading ..</div>
  }
  if (!demand) {
    return <div>Loading ..</div>
  }

  const status = statusConfig[demand?.status]
  const daysLeft = getDaysUntilDeadline(demand?.applicationDeadline)
  const isUrgent = daysLeft > 0 && daysLeft <= 30

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8 flex flex-col gap-8 max-h-[calc(100vh-4.5rem)] scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent overflow-y-auto">
        <header className="rounded-xl shrink-0 h-125 w-full bg-blue-200 bg-[url('/src/assets/images/construction.jpg')] bg-center bg-cover relative overflow-hidden">
          <div className="bg-black/40 absolute w-full h-full p-4 text-white flex flex-col justify-center">
            <div className="max-w-100">
              <h1 className="text-3xl font-bold">{demand?.title}</h1>
            </div>

            <div>
              <div className="inline-flex bg-secondary px-3 py-1 rounded-4xl text-sm mt-4 font-semibold">
                {demand?.category?.name}
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="flex gap-2 items-center">
            <div className="h-12 w-12 bg-slate-700 rounded-full"></div>
            <div>
              <h4 className="text-sm font-semibold leading-2 mb-2">
                {demand?.contractor?.legalName}
              </h4>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((item, index) => {
                  if (demand?.contractor.averageRating >= index + 1) {
                    return <IoStar className="text-yellow-600" />
                  } else {
                    return <IoStarOutline />
                  }
                })}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold">Description</h2>
          <p className="text-sm leading-6">{demand?.description}</p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-4">Details</h2>

          <div className="grid grid-cols-3 text-sm gap-4">
            <div className="bg-background shadow p-4 flex flex-col gap-4 rounded-xl">
              <div>
                <h5 className="font-semibold">Budge</h5>
              </div>
              <div className="flex items-center gap-1">
                <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="font-medium text-foreground">
                  {demand.budgetRange}
                </span>
              </div>
            </div>

            <div className="bg-background shadow p-4 flex flex-col gap-4 rounded-xl">
              <div>
                <h5 className="font-semibold">Start date</h5>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="font-medium text-foreground">
                  Starts {formatDate(demand.estimatedStartDate)}
                </span>
              </div>
            </div>

            <div className="bg-background shadow p-4 flex flex-col gap-4 rounded-xl">
              <div>
                <h5 className="font-semibold">Execution</h5>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="font-medium text-foreground">
                  {demand.executionPeriodDays} days
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <header>
            <h2 className="text-lg font-bold mb-4">Location</h2>
          </header>

          <div className="p-4 bg-background rounded-xl shadow">
            <div className="flex items-center gap-2 text-sm ">
              <MapPin />
              <div>
                <h5 className="font-semibold">{demand?.worksiteLocation}</h5>

                <div className="text-xs">
                  {demand?.locationLat},{demand?.locationLng}
                </div>
              </div>
            </div>

            <div className="relative w-full h-80 mt-4 rounded-xl overflow-hidden">
              <MapWrapper selectedDemand={demand} />
            </div>
          </div>
        </section>
      </div>

      <div className="col-span-4 ">
        <div className="bg-background p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-muted-foreground">
              Apply for this tender
            </h3>

            <span
              className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.className}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
              {status.label}
            </span>
          </div>

          <div>
            <span className="font-bold text-lg">{demand?.budgetRange}</span>
          </div>

          <div className="my-4">
            <h4 className="font-semibold">Required documents</h4>
            <div className="flex flex-col gap-2 mt-1">
              {demand?.requiredDocuments.map((item) => (
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <LuFileSliders />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-2 mt-16">
            <span className="text-xs text-muted-foreground">
              Deadline: {formatDate(demand.applicationDeadline)}
            </span>
            {isUrgent && (
              <span className="text-xs font-medium text-amber-600">
                {daysLeft} {daysLeft === 1 ? "day" : "days"} left
              </span>
            )}
          </div>

          <Button
            variant="secondary"
            className="w-full"
            size="lg"
            onClick={() => setModalIsOpen(true)}
            disabled={user?.type == "contractor"}
          >
            Make a proposal
          </Button>

          <CreateApplicationDialog
            open={modalIsOpen}
            demand={demand}
            handleClose={() => setModalIsOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default DemandDetailPage
