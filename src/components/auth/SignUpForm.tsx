'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordVisiblity from "@/components/shared/PasswordVisiblity";
import { handleSignUp } from "@/action";

const signUpSchema = z
    .object({
        email: z.string().email({
            message: "Invalid email",
        }),
        phone: z.string().min(10, {message: 'Invalid Phone Number'}),
        password: z.string().min(8, {
            message: `
At least 8 chars ::\n
> Contains at least one digit\n
> Contains at least one lower alpha char and one upper alpha char\n
> Contains at least one char within a set of special chars (@#%$^ etc.)\n
> Does not contain space, tab, etc.
            `,
        }),
    })
    .refine((data) => {
        return /^[0-9+]+$/.test(data.phone);
    }, {
        message: "Invalid Phone Number",
        path: ["phone"],
    })
    .refine(
        (data) => {
            if (data.phone.startsWith("+")) {
                return data.phone.length > 10;
            }
            return data.phone.length === 10;
        },
        {
            message: "Invalid Phone Number",
            path: ["phone"],
        }
    )
    .refine(
        (data) => {
            const regex = new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
            );
            return regex.test(data.password);
        },
        {
            message: `
At least 8 chars ::\n
> Contains at least one digit\n
> Contains at least one lower alpha char and one upper alpha char\n
> Contains at least one char within a set of special chars (@#%$^ etc.)\n
> Does not contain space, tab, etc.
            `,
            path: ["password"],
        }
    );

export type signUpSchemaType = z.infer<typeof signUpSchema>;

const SignUpForm = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<signUpSchemaType>({
        resolver: zodResolver(signUpSchema),
    });
    
  return (
      <form
          onSubmit={handleSubmit(async (data) => {
              console.log(data);
              await handleSignUp(data);
          })}
          className="flex-col-center gap-[16px]"
      >
          {/* Email Input */}
          <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
              <div className="flex flex-col gap-[8px]">
                  <div
                      className={`input-container ${
                          errors.email
                              ? "input-container-error"
                              : "input-container-no-error"
                      }`}
                  >
                      <img src="/mail.svg" alt="mail-icon" />
                      <input placeholder="Email" {...register("email")} />
                  </div>
              </div>
              {errors.email && (
                  <p className="input-error-description">
                      {errors.email.message}
                  </p>
              )}
          </div>

          {/* Phone Input */}
          <div className="flex flex-col gap-[4px] w-full max-w-[500px]">
              <div className="flex flex-col gap-[8px]">
                  <div
                      className={`input-container ${
                          errors.phone
                              ? "input-container-error"
                              : "input-container-no-error"
                      }`}
                  >
                      <img src="/phone.svg" alt="phone-icon" />
                      <input
                          placeholder="Mobile Number"
                          {...register("phone")}
                      />
                  </div>
              </div>
              {errors.phone ? (
                  <p className="input-error-description">
                      {errors.phone.message}
                  </p>
              ) : (
                  <p className="input-description">
                      Provide 10-digit number or "+" followed by your
                      international number.
                  </p>
              )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
              <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
                  <div
                      className={`input-container ${
                          errors.password
                              ? "input-container-error"
                              : "input-container-no-error"
                      }`}
                  >
                      <img src="/lock-icon.svg" alt="lock-icon" />
                      <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...register("password")}
                      />
                      <PasswordVisiblity
                          showPassword={showPassword}
                          setShowPassword={setShowPassword}
                      />
                  </div>
              </div>
              {errors.password ? (
                  <div className="input-error-description">
                      {errors.password.message &&
                          errors.password.message
                              .split("\n")
                              .map((line, i) => <p key={i}>{line}</p>)}
                  </div>
              ) : (
                  <p className="input-description">
                      Must contains One Uppercase Letter, One Special Character,
                      and One Number and minimum 8 length long
                  </p>
              )}
          </div>

          {/* Submit Button */}
          <Button
              type="submit"
              className="w-full py-[10px] text-lg h-[44px] font-semibold rounded-[2px]"
              disabled={isSubmitting}
          >
              {isSubmitting && (
                  <img
                      src="/Loader.svg"
                      alt="spinner"
                      className="w-[25px] rotate"
                  />
              )}
              {isSubmitting ? "" : "Sign Up"}
          </Button>
      </form>
  );
}

export default SignUpForm