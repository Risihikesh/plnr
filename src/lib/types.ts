import { z } from "zod";

export const contactUsSchema = z
  .object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    phone: z.string().nonempty({ message: "Mobile number is required" }),
    message: z.string().nonempty({ message: "Message can not be empty" }),
  })
  .refine(
    (data) => {
      return /^[A-Za-z\s]+$/.test(data.name);
    },
    {
      message: "Invalid Name",
      path: ["name"],
    }
  )
  .refine(
    (data) => {
      if (data.phone.startsWith("+")) {
        const countryCode = data.phone.slice(0, data.phone.length - 10);
        console.log(countryCode);
        return /^\+\d{1,3}$/.test(countryCode);
      }
      return true;
    },
    {
      message: "Invalid Country Code",
      path: ["phone"],
    }
  )
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
      return /^[0-9+]+$/.test(data.phone);
    },
    {
      message: "Invalid Phone Number",
      path: ["phone"],
    }
  );

export type contactUsSchemaType = z.infer<typeof contactUsSchema>;
