import { useQuery } from '@tanstack/react-query';
import { getCategories } from "@/api/categoryService"

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });
};

// export const useCreateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: createUser,
//     onSuccess: () => {
//       // Refetch the users list after a successful create
//       queryClient.invalidateQueries({ queryKey: ['users'] });
//     },
//   });
// };