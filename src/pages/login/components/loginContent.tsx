import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { NavLink } from "react-router-dom"
import { IoLogoGoogle } from "react-icons/io"

function LoginContent() {
  return (
    <div>
      <form>
        <FieldGroup>
          <FieldSet>
            <header>
              <h2 className="font-semibold text-2xl text-center">
                Welcome back to Contru-flow
              </h2>
              <FieldDescription className="text-center">
                Please enter your credentials to access your account.
              </FieldDescription>
            </header>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Email
                </FieldLabel>
                <Input
                  variant="filled"
                  placeholder="Ex: john.doe@example.com"
                  required
                />
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Password
                </FieldLabel>
                <Input
                  variant="filled"
                  placeholder="Ex: your password"
                  required
                  type="password"
                />
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
              <FieldLabel htmlFor="2fa" className="flex w-full flex-1">
                Remember sign in details
              </FieldLabel>
              <Switch id="2fa" size="lg" />
            </Field>

            <FieldGroup>
              <Button size="lg">Log in</Button>
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
