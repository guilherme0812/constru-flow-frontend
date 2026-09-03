import type { ReactNode } from "react"
import { NavLink, Outlet } from "react-router-dom"
import {
  LuBuilding,
  LuFileCheck,
  LuMessageCircle,
  LuNewspaper,
  LuPlus,
} from "react-icons/lu"
import UserCardInfo from "@/components/ui/userCardInfo"

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <>
        {/* <Header /> */}
        <main className=" h-screen h-full md:p-4 grid grid-cols-[auto_1fr] gap-4 overflow-hidden">
          <div className="min-w-60 flex flex-col gap-4 pr-2 border-r-2">
            <div className="flex flex-col gap-4">
              <UserCardInfo />

              <div className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-150 px-4 py-3 font-semibold rounded-md text-sm flex gap-3 items-center text-white">
                <LuPlus />
                Create
              </div>
            </div>

            <NavLink
              to="/demands"
              className={({ isActive }) =>
                `transition-all duration-150 px-4 py-3 font-semibold rounded-md text-sm flex gap-3 items-center hover:bg-zinc-300 ${isActive ? "bg-[#E3E8E9]" : ""}`
              }
            >
              <LuBuilding /> Demands
            </NavLink>

            <NavLink
              to="/contracts"
              className={({ isActive }) =>
                `transition-all duration-150 px-4 py-3 font-semibold rounded-md text-sm flex gap-3 items-center hover:bg-zinc-300 ${isActive ? "bg-[#E3E8E9] hover:bg-zinc-300" : ""}`
              }
            >
              <LuFileCheck /> Applications
            </NavLink>

            <NavLink
              to="/contracts"
              className={({ isActive }) =>
                `transition-all duration-150 px-4 py-3 font-semibold rounded-md text-sm flex gap-3 items-center hover:bg-zinc-300 ${isActive ? "bg-[#E3E8E9] " : ""}`
              }
            >
              <LuMessageCircle /> Messages
            </NavLink>

            <NavLink
              to="/contracts"
              className={({ isActive }) =>
                `transition-all duration-150 px-4 py-3 font-semibold rounded-md text-sm flex gap-3 items-center hover:bg-zinc-300 ${isActive ? "bg-[#E3E8E9] " : ""}`
              }
            >
              <LuNewspaper /> Contracts
            </NavLink>
          </div>

          <div className="flex flex-col gap-4">
            <Outlet />
          </div>
        </main>
        {/* <Footer /> */}
      </>
    </>
  )
}

export default AuthLayout
