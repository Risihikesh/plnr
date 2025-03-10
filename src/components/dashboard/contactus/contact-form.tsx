"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactUsSchemaType, contactUsSchema } from "@/lib/types";

declare const grecaptcha: any;

export function ContactForm() {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<contactUsSchemaType>({
    resolver: zodResolver(contactUsSchema),
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      setRecaptchaLoaded(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = async (data: contactUsSchemaType) => {
    try {
      if (typeof grecaptcha === "undefined") {
        setRecaptchaError(true);
        return;
      }

      const captchaResult = grecaptcha.getResponse();
      if (!captchaResult) {
        setRecaptchaError(true);
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/contact-us/${captchaResult}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const resJson = await response.json();
      toast({
        description: resJson.message,
        variant: response.ok ? "default" : "danger",
      });

      if (response.ok) {
        formRef.current?.reset();
        grecaptcha.reset();
      }
    } catch (error) {
      toast({ description: "Error sending message", variant: "danger" });
      console.error("Error sending message", error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Send us a message
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="font-[500] text-[14px]">
            Name
          </label>
          <div className="flex flex-col gap-[5px]">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-3 h-[34px] py-2 border border-gray-300 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="font-[500] text-[14px]">
            Email Address
          </label>
          <div className="flex flex-col gap-[5px]">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full h-[34px] px-3 py-2 border border-gray-300 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent"
              {...register("email")}
            />
            {errors.email && (
              <p className="input-error-description">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="font-[500] text-[14px]">
            Mobile Number
          </label>
          <div className="flex flex-col gap-[5px]">
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full px-3 h-[34px] py-2 border border-gray-300 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="input-error-description">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="font-[500] text-[14px]">
            How can we help you out?
          </label>
          <div className="flex flex-col gap-[5px]">
            <textarea
              placeholder="How can we help you out?"
              rows={4}
              className="w-full px-3 h-[110px] py-2 border border-gray-300 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="input-error-description">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {recaptchaLoaded && (
          <div className="flex flex-col gap-[5px]">
            <div className="h-[78px]">
              <div
                className="g-recaptcha"
                data-sitekey="6Le2W7cqAAAAAGdKEH8Rn3nq5t9Tb47EAhDDmTGl"
              ></div>
            </div>
            {recaptchaError && (
              <p className="input-error-description">
                Please verify you are not a robot
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-24 px-4 py-2 bg-azure46 text-white rounded hover:bg-[#0093e9] transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </form>
  );
}
