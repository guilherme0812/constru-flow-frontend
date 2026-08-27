import type { ReactNode } from "react"

function Paper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background rounded-2xl border h-full p-4">
      {children}
    </div>
  )
}

export default Paper
