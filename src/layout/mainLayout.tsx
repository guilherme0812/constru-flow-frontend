import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="bg-slate-100 min-h-screen h-full">
      <Outlet />
    </div>
  )
}
