import type { DemandDataType } from "@/api/demandService"
import { useAuth } from "@/hooks/auth/useAuth"
import { formatDate, getDaysUntilDeadline } from "@/lib/utils"
import { MapPin, Calendar, Wallet, Clock } from "lucide-react"
import { NavLink } from "react-router-dom"
import { statusConfig } from "../utils"

type DemandCardType = {
  demand: DemandDataType
  handleClick(demand: DemandDataType): void
}

export default function DemandCard({ demand, handleClick }: DemandCardType) {
  const status = statusConfig[demand.status]
  const daysLeft = getDaysUntilDeadline(demand.applicationDeadline)
  const isUrgent = daysLeft > 0 && daysLeft <= 30

  const { user } = useAuth()

  return (
    <NavLink to={`/demands/${demand.id}`}>
      <div
        role="button"
        onMouseEnter={() => handleClick(demand)}
        className="group hover:cursor-pointer relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-1.5">
              {user?.id == demand.contractorId && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium">
                  Mine
                </span>
              )}

              <span
                className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.className}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                {status.label}
              </span>
            </div>

            <h3 className="text-base font-semibold leading-snug text-foreground">
              {demand.title}
            </h3>
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {demand.description}
        </p>

        <div className="h-px bg-border" />

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="truncate text-foreground">
              {demand.worksiteLocation}
            </span>
          </div>
          <div className="flex items-start gap-2 ">
            <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="font-medium text-foreground">
              {demand.budgetRange}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-foreground">
              Starts {formatDate(demand.estimatedStartDate)}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-foreground">
              {demand.executionPeriodDays} days
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs text-muted-foreground">
            Deadline: {formatDate(demand.applicationDeadline)}
          </span>
          {isUrgent && (
            <span className="text-xs font-medium text-amber-600">
              {daysLeft} {daysLeft === 1 ? "day" : "days"} left
            </span>
          )}
        </div>
      </div>
    </NavLink>
  )
}
