import Image from "next/image"

export const reservations = [
  {
      id: "1",
      name: "Property 1",
      image: "/beach_1.jpg",
      nights: 2,
      Total: 40,
      checkIn: "2023-06-01",
      checkOut: "2023-06-02"
  },
  {
      id: "2",
      name: "Property 2",
      image: "/beach_1.jpg",
      nights: 2,
      Total: 39,
      checkIn: "2023-06-01",
      checkOut: "2023-06-02"
  },
  {
      id: "3",
      name: "Property 3",
      image: "/beach_1.jpg",
      nights: 2,
      Total: 75,
      checkIn: "2023-06-01",
      checkOut: "2023-06-02"
  },
  {
      id: "4",
      name: "Property 4",
      image: "/beach_1.jpg",
      nights: 2,
      Total: 50,
      checkIn: "2023-06-01",
      checkOut: "2023-06-02"
  },
  {
      id: "5",
      name: "Property 5",
      image: "/beach_1.jpg",
      nights: 2,
      Total: 90,
      checkIn: "2023-06-01",
      checkOut: "2023-06-02"
  },
  {
      id: "6",
      name: "Property 6",
      image: "/beach_1.jpg",
      nights: 2,
      Total: 55,
      checkIn: "2023-06-01",
      checkOut: "2023-06-02"
  },
]

const page = ({}) => {
  return (
    <main>
        <h1 className="my-6 text-2xl">
          My Reservations
        </h1>

        <div className="space-y-4">
          {reservations.map((reservation) => (
            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-primary/50 rounded-2xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl -z-10">
                <Image 
                  src={reservation.image}
                  fill
                  alt="Property"
                  className="hover:scale-110 object-cover transition h-full w-full overflow-hidden"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 space-y-3">
              <h2 className="mb-4 text-xl">
                {reservation.name}
              </h2>

              <p><strong>Check in Date:</strong> {reservation.checkIn}</p>
              <p><strong>Check out Date:</strong> {reservation.checkOut}</p>

              <p><strong>Number of nights:</strong> {reservation.nights}</p>
              <p><strong>Total Price:</strong> ${reservation.Total}</p>

              <div className="cursor-pointer py-4 px-6 bg-primary text-background rounded-xl mt-6 hover:bg-primary-hover transition inline-block">
                Go to Property
              </div>
            </div>
          </div>
          ))}
        </div>
    </main>
  )
}

export default page