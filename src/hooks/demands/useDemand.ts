import { useQuery } from '@tanstack/react-query'
import { getDemand } from "@/api/demandService"

export const useDemand = (id: string) => {
    return useQuery({
        queryKey: ['demand', id],
        queryFn: () => getDemand(id),
    })
}