'use client'

import Modal from "./Modal";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = ({ }) => {
    const signupModal = useSignupModal();

    const content = (
        <>
            <h2 className="mb-6 text-2xl">
                Welcome to DjangoBnb, please sign up!
            </h2>

            <form className="space-y-4">
                <input type="email" className="px-4 h-[54px] w-full border border-primary/50 rounded-xl" placeholder="your email address" />

                <input type="password" className="px-4 h-[54px] w-full border border-primary/50 rounded-xl" placeholder="your password" />
                <input type="password" className="px-4 h-[54px] w-full border border-primary/50 rounded-xl" placeholder="repeat password" />

                <div className="p-5 bg-primary rounded-xl opacity-80 text-background">
                    Error Message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => {console.log("clicked")}}
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