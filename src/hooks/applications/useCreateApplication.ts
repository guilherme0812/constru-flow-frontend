import { createApplication } from "@/api/applicationService"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateApplication = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      // Refetch the users list after a successful create
      queryClient.invalidateQueries({ queryKey: ["applications"] })
    },
  })
}
