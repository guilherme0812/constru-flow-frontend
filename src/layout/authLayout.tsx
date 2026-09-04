import { NavLink, Outlet } from "react-router-dom"
import {
  LuBuilding,
  LuFileCheck,
  LuLogOut,
  LuMessageCircle,
  LuNewspaper,
  LuPlus,
} from "react-icons/lu"
import UserCardInfo from "@/components/ui/userCardInfo"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/auth/useAuth"

function AuthLayout() {
  const { logout } = useAuth()
  return (
    <>
      <>
        {/* <Header /> */}
        <main className=" h-screen h-full md:p-4 grid grid-cols-[auto_1fr] gap-4 overflow-hidden">
          <div className="max-w-60 w-full pr-2 border-r-2 flex flex-col justify-between">
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <UserCardInfo />

                <div className="bg-secondary hover:bg-cyan-700 transition-all duration-150 px-4 py-3 font-semibold rounded-md text-sm flex gap-3 items-center text-white">
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
                to="/applications"
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

            <div>
              <Button className="w-full" variant="ghost" onClick={logout}>
                <LuLogOut /> Log Out
              </Button>
            </div>
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
