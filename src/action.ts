"use server";

import { signUpSchemaType } from "./components/auth/SignUpForm";
import { signIn } from "../auth";
import { prisma } from "./prisma";

export async function handleCredentialsSignIn(formData: any) {
    try {
        
        await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false,
        });
        return {
            success: true,
            message: "Logged In Successfully"
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Invalid Credentials",
        };
    }
}

export async function handleSignUp(data: signUpSchemaType) {
    try {
        console.log(data);

        await prisma.user.create({
            data: {
                email: data.email,
                mobileNumber: data.phone,
                password: data.password, // Consider hashing the password before storing
            },
        });
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function authorize(credentials: any) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: credentials.email,
                password: credentials.password, // Consider using password hashing instead of storing plain text
            },
        });
        return user || null;
    } catch (error) {
        console.error("Authorization Error:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}