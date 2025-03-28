import Image from "next/image"

type ItemProps = {
    id: string,
    name: string,
    image: string,
    price: number
}

const PropertyListItem = ({ item }: { item: ItemProps}) => {
  return (
    <div className="cursor-pointer">
        <div className="overflow-hidden aspect-square rounded-xl relative">
            <Image
                fill
                alt="Property"
                src={item.image}
                sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px" 
                className="hover:scale-110 object-cover transition h-full w-full -z-10"
            />
        </div>

        <div className="mt-2">
            <p className="text-lg font-bold">{item.name}</p>
        </div>

        <div className="mt-2">
            <p className="text-sm">${item.price} per night</p>
        </div>
    </div>
  )
}

export default PropertyListItem