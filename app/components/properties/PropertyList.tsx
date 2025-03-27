import PropertyListItem from "./PropertyListItem"

const properties = [
    {
        id: "1",
        name: "Property 1",
        image: "/beach_1.jpg",
        price: 40
    },
    {
        id: "2",
        name: "Property 2",
        image: "/beach_1.jpg",
        price: 39
    },
    {
        id: "3",
        name: "Property 3",
        image: "/beach_1.jpg",
        price: 75
    },
    {
        id: "4",
        name: "Property 4",
        image: "/beach_1.jpg",
        price: 50
    },
    {
        id: "5",
        name: "Property 5",
        image: "/beach_1.jpg",
        price: 90
    },
    {
        id: "6",
        name: "Property 6",
        image: "/beach_1.jpg",
        price: 55
    },
]

const PropertyList = ({}) => {
  return properties.map((item, index) => (
            <PropertyListItem item={item} key={index} />
        ))
}

export default PropertyList