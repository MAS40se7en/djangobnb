'use client'

import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = ({ }) => {
    const loginModal = useLoginModal();

    const content = (
        <>
            <h2 className="mb-6 text-2xl">
                Welcome to DjangoBnb, please login!
            </h2>

            <form className="space-y-4">
                <input type="email" className="px-4 h-[54px] w-full border border-primary/50 rounded-xl" placeholder="your email address" />

                <input type="password" className="px-4 h-[54px] w-full border border-primary/50 rounded-xl" placeholder="your password" />

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
                label="Login"
                isOpen={loginModal.isOpen}
                close={loginModal.close}
                content={content}
            />
        </>
    )
}

export default LoginModal