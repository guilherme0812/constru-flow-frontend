import { MapPin, Calendar, Wallet, Clock } from "lucide-react"

interface Demand {
  id: string
  title: string
  description: string
  worksiteLocation: string
  estimatedStartDate: string
  executionPeriodDays: number
  budgetRange: string
  requiredDocuments: string[]
  applicationDeadline: string
  status: "published" | "draft" | "closed"
}

const statusConfig = {
  published: {
    label: "Open",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  draft: {
    label: "Draft",
    className: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
  },
  closed: {
    label: "Closed",
    className: "bg-red-50 text-red-700 border-red-200",
    dot: "bg-red-500",
  },
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function getDaysUntilDeadline(deadline: string) {
  const diff = new Date(deadline).getTime() - Date.now()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export default function DemandCard({ demand }: { demand: Demand }) {
  const status = statusConfig[demand.status]
  const daysLeft = getDaysUntilDeadline(demand.applicationDeadline)
  const isUrgent = daysLeft > 0 && daysLeft <= 30

  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <span
            className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.className}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
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
  )
}
