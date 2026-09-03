import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { NavLink, Navigate, useNavigate } from "react-router-dom"
import { IoLogoGoogle } from "react-icons/io"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod/v3"
import { useForm } from "react-hook-form"
import { useAuth } from "@/hooks/auth/useAuth"

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "The email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "The password is required")
    .min(6, "The password must be at least 6 characters long"),
  rememberMe: z.boolean().optional(),
})

type LoginFormData = z.infer<typeof loginSchema>

function LoginContent() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  async function onSubmit(data: LoginFormData) {
    // chamada de login aqui
    console.log(data)
    try {
      await login({
        email: data.email,
        password: data.password,
      })

      navigate("/demands")
    } catch (error) {}
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <header>
              <h2 className="font-semibold text-2xl text-center">
                Welcome back to Constru-flow
              </h2>
              <FieldDescription className="text-center">
                Please enter your credentials to access your account.
              </FieldDescription>
            </header>

            <FieldGroup>
              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  variant="filled"
                  placeholder="Ex: john.doe@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field data-invalid={!!errors.password}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  variant="filled"
                  placeholder="Ex: your password"
                  type="password"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                />
                {errors.password && (
                  <FieldError>{errors.password.message}</FieldError>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <NavLink
                to="/forgot-password"
                className="text-sm text-primary font-semibold hover:underline"
              >
                Forgot your password?
              </NavLink>
            </FieldGroup>

            <Field
              orientation="horizontal"
              className="w-full flex justify-between"
            >
              <FieldLabel htmlFor="rememberMe" className="flex w-full flex-1">
                Remember sign in details
              </FieldLabel>
              <Switch id="rememberMe" size="lg" {...register("rememberMe")} />
            </Field>

            <FieldGroup>
              <Button
                size="lg"
                type="submit"
                variant="secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Entrando..." : "Log in"}
              </Button>
            </FieldGroup>

            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-muted-foreground text-sm">OU</span>
              <Separator className="flex-1" />
            </div>

            <FieldGroup>
              <Button variant="filled" size="lg">
                <IoLogoGoogle />
                Continuues with Google
              </Button>
            </FieldGroup>

            <FieldGroup>
              <Field
                orientation="horizontal"
                className="w-full flex justify-center"
              >
                <FieldDescription>
                  Don't have an account?{" "}
                  <NavLink to="/signup" className="font-semibold">
                    {" "}
                    Sign up
                  </NavLink>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}

export default LoginContent
