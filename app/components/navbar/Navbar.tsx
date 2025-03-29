import { Icon } from "@iconify/react"
import Link from "next/link"
import SearchFilters from "./SearchFilters"
import UserNav from "./UserNav"
import AddProperty from "./AddProperty"

const Navbar = ({}) => {
  return (
    <div className="w-full fixed top-0 left-0 py-6 border-b border-primary bg-background">
        <div className="max-w-[1500px] mx-auto px-6">
            <div className="flex justify-between items-center">
                <Link href='/' className="font-bold text-primary flex items-center gap-3 text-md lg:text-2xl">
                    <Icon icon="simple-icons:airbnb" className="w-8 h-8 lg:w-12 lg:h-12" />
                    <span className="hidden md:block">DjangoBnb</span>
                </Link>

                <div className="flex space-x-6 items-center">
                    <SearchFilters />
                </div>

                <div className="flex items-center space-x-6">
                    <AddProperty />


                    <UserNav />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar