import Image from "next/image"

export type PropertyProps = {
    id: string,
    name: string,
    image_url: string,
    price_per_night: number
}

const PropertyListItem = ({ property }: { property: PropertyProps}) => {

  return (
    <div className="cursor-pointer">
        <div className="overflow-hidden aspect-square rounded-xl relative">
            <Image
                fill
                alt="Property"
                src={property.image_url}
                sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px" 
                className="hover:scale-110 object-cover transition h-full w-full -z-10"
            />
        </div>

        <div className="mt-2">
            <p className="text-lg font-bold">{property.name}</p>
        </div>

        <div className="mt-2">
            <p className="text-sm">${property.price_per_night} per night</p>
        </div>
    </div>
  )
}

export default PropertyListItem