import { useAuth } from "@/hooks/auth/useAuth"
import { LuUser } from "react-icons/lu"

function UserCardInfo() {
  const { user } = useAuth()
  const name = user?.contractor?.legalName
  const email = user?.email

  return (
    <div className="flex gap-2 text-sm">
      <div className="w-12 h-12 rounded-md bg-primary text-white flex items-center justify-center">
        <LuUser className="text-xl" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-semibold">{name}</h3>
        <h4 className="text-zinc-600 truncate">{email}</h4>
      </div>
    </div>
  )
}

export default UserCardInfo
