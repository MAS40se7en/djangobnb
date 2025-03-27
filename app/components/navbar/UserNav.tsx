import { Icon } from "@iconify/react"

const UserNav = ({}) => {
  return (
    <div className="p-2 relative inline-block border border-primary/20 rounded-full">
        <button className="flex items-center">
        <Icon icon="material-symbols:menu-rounded" width="24" height="24" />
        <Icon icon="cuida:user-outline" width="24" height="24" />
        </button>
    </div>
  )
}

export default UserNav