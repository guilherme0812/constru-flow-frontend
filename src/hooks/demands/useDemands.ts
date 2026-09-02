import { useQuery } from '@tanstack/react-query';
import { getDemands } from "@/api/demandService"

export const useDemands = () => {
    return useQuery({
        queryKey: ['demands'],
        queryFn: getDemands,
    });
};