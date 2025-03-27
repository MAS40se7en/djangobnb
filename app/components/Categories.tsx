import { Icon } from "@iconify/react"

const category = [
    {
        name: "Pools",
        icon: "fluent:swimming-pool-24-regular"
    },
    {
        name: "Villas",
        icon: "material-symbols:villa-outline-rounded"
    },
    {
        name: "Cabins",
        icon: "material-symbols:cabin-rounded"
    },
    {
        name: "Beach",
        icon: "material-symbols:beach-access-outline-rounded"
    }
]

const Categories = ({ }) => {
    return (
        <div className="flex items-center justify-between w-1/2 mx-auto">
            {category.map((item, index) => (
                <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div className="pb-4 flex flex-col items-center space-y-2 hover:border-b-2 opacity-60 hover:opacity-100 border-primary/70">
                    <Icon icon={item.icon} className="w-10 h-10" />
                    <p className="text-sm">{item.name}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Categories