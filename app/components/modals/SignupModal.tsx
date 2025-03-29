'use client'

import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";

const SignupModal = ({ }) => {
    const router = useRouter();
    const signupModal = useSignupModal();

    const [email, setEmail] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);

    const submitSignup = async () => {
        if (!email || !password1 || !password2) {
            setErrors(["All fields are required."]);
            return
        }

        if (password1 !== password2) {
            setErrors(["Passwords do not match."]);
            return
        }

        const formData = {
            email,
            password1,
            password2
        }

        const response = await apiService.post('/api/auth/register/', formData);

        if (response.access) {
            //handleLogin

            signupModal.close();
            router.push('/');
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors);
        }
    }

    const content = (
        <>
            <h2 className="mb-6 text-2xl">
                Welcome to DjangoBnb, please sign up!
            </h2>

            <form 
            className="space-y-4"
            action={submitSignup}
            >
                <input
                    type="email"
                    className="px-4 h-[54px] w-full border border-primary/50 rounded-xl"
                    placeholder="your email address"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="px-4 h-[54px] w-full border border-primary/50 rounded-xl" placeholder="your password"
                    onChange={(e) => setPassword1(e.target.value)}
                />
                <input
                    type="password"
                    className="px-4 h-[54px] w-full border border-primary/50 rounded-xl" placeholder="repeat password"
                    onChange={(e) => setPassword2(e.target.value)}
                />

                {errors.map((error, index) => {
                    return (
                        <div
                            className="p-5 bg-primary rounded-xl opacity-80 text-background"
                            key={`error-${index}`}
                        >
                            {error}
                        </div>
                    )
                })}

                <CustomButton
                    label="Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
    )

    return (
        <>
            <Modal
                label="sign up"
                isOpen={signupModal.isOpen}
                close={signupModal.close}
                content={content}
            />
        </>
    )
}

export default SignupModal