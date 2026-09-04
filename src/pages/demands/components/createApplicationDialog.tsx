import type { DemandDataType } from "@/api/demandService"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCreateApplication } from "@/hooks/applications/useCreateApplication"
import { useAuth } from "@/hooks/auth/useAuth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod/v3"

const createApplicationSchema = z.object({
  proposedAmount: z.coerce.number().min(1, "The proposedAmount is required"),
  proposedDurationDays: z.coerce.number(),
  termsAndConditions: z.string().optional(),
})

type createApplicationFormData = z.infer<typeof createApplicationSchema>

type CreateApplicationProps = {
  open: boolean
  handleClose: () => void
  demand: DemandDataType
}
function CreateApplicationDialog({
  open,
  demand,
  handleClose,
}: CreateApplicationProps) {
  const { user } = useAuth()
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<createApplicationFormData>({
    resolver: zodResolver(createApplicationSchema),
    defaultValues: {
      proposedAmount: 0,
      proposedDurationDays: 0,
      termsAndConditions: "",
    },
  })

  const { mutateAsync: createApplication } = useCreateApplication()

  async function onSubmit(data: createApplicationFormData) {
    try {
      if (user?.type == "provider") {
        createApplication({
          demandId: demand.id,
          providerId: user?.id as string,
          proposedAmount: data.proposedAmount,
          proposedDurationDays: data.proposedDurationDays,
          termsAndConditions: data.termsAndConditions || "",
        })

        handleClose()
      } else {
        throw new Error("Only providers can apply to demands")
      }
    } catch (error: any) {
      throw new Error("Failed to fetch resource", {
        cause: error,
      })
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={(bool) => !bool && handleClose()}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader className="mb-4">
              <DialogTitle>Apply for tender</DialogTitle>
              <DialogDescription>Fill in the fields below.</DialogDescription>
            </DialogHeader>

            <FieldGroup className="mb-4">
              <Field data-invalid={!!errors.proposedAmount}>
                <FieldLabel htmlFor="email">Proposed amount</FieldLabel>
                <Input
                  id="proposedAmount"
                  variant="filled"
                  placeholder="Ex: 100000"
                  aria-invalid={!!errors.proposedAmount}
                  type="number"
                  {...register("proposedAmount")}
                />
                {errors.proposedAmount && (
                  <FieldError>{errors.proposedAmount.message}</FieldError>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup className="mb-4">
              <Field data-invalid={!!errors.proposedDurationDays}>
                <FieldLabel htmlFor="email">proposed durationd days</FieldLabel>
                <Input
                  id="proposedDurationDays"
                  variant="filled"
                  placeholder="Ex: 100000"
                  aria-invalid={!!errors.proposedDurationDays}
                  type="number"
                  {...register("proposedDurationDays")}
                />
                {errors.proposedDurationDays && (
                  <FieldError>{errors.proposedDurationDays.message}</FieldError>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field data-invalid={!!errors.termsAndConditions}>
                <FieldLabel htmlFor="email">Terms and conditions</FieldLabel>
                <Textarea
                  id="termsAndConditions"
                  //   variant="filled"
                  placeholder=""
                  aria-invalid={!!errors.termsAndConditions}
                  {...register("termsAndConditions")}
                />
                {errors.proposedAmount && (
                  <FieldError>{errors?.termsAndConditions?.message}</FieldError>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup className="mt-4">
              <Button
                variant="secondary"
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                Apply now
              </Button>
            </FieldGroup>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateApplicationDialog
