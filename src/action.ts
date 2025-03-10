"use server";

import { signUpSchemaType } from "./components/auth/SignUpForm";
import { signIn } from "../auth";
import { db } from "./db";
import * as schema from "./db/schema";

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
        await db.insert(schema.users).values({
            email: data.email,
            mobileNumber: data.phone,
            password: data.password,
        })
    }
    catch (error) {
        console.log(error);
    }
}

export async function autherize(credentials: any) {
    const user = await db.query.users.findFirst({
        where(fields, operators) {
            return operators.eq(fields.email, credentials.email) && operators.eq(fields.password, credentials.password);    
        },
    });
    if (user) {
        return user;
    } else {
        return null;
    }
}