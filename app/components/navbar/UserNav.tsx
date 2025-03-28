'use client'

import { Icon } from "@iconify/react"
import { useState } from "react"
import MenuLink from "./MenuLink"
import useLoginModal from "@/app/hooks/useLoginModal"
import useSignupModal from "@/app/hooks/useSignupModal"

const UserNav = ({}) => {
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="p-2 relative inline-block border border-primary/20 rounded-full hover:bg-gray-100">
        <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer"
        >
        <Icon icon="material-symbols:menu-rounded" width="24" height="24" />
        <Icon icon="cuida:user-outline" width="24" height="24" />
        </button>

        {isOpen && (
          <div className="w-[220px] absolute top-[60px] right-0 bg-background border border-primary/50 rounded-xl shadow-md flex flex-col">
            <MenuLink
            label="Login" 
            onClick={
              () => {
                setIsOpen(false);
                loginModal.open();
              }}
            />
            <MenuLink 
            label="Sign up" 
            onClick={
              () => {
                setIsOpen(false);
                signupModal.open();
              }}
            />
          </div>
        )}
    </div>
  )
}

export default UserNav