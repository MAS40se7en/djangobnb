import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"

const page = ({}) => {
  return (
    <main>
        <div className="w-full h-[64vh] overflow-hidden rounded-xl relative -z-10">
            <Image 
                src="/beach_1.jpg"
                fill
                alt="Property"
                className="object-cover w-full h-full"
            />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 py-6 pr-6">
                <h1 className="mb-4 text-4xl">Property name</h1>
                <span className="mb-6 block text-lg text-primary/50">4 guests · 2 bedrooms · 1 bath</span>

                <hr />

                <div className="py-6 flex items-center space-x-4">
                    <Image 
                        src="/profile_pic_1.jpg"
                        alt="Property owner"
                        width={50}
                        height={50}
                        className="w-16 h-16 rounded-full"
                    />

                    <p><strong>John Doe is your host</strong></p>
                </div>

                <hr/>

                <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nihil provident odio cumque aperiam quas, facere molestias iusto laudantium adipisci non at exercitationem architecto nulla atque quis quibusdam praesentium minus?
                </p>
            </div>

            <ReservationSidebar />
        </div>
    </main>
  )
}

export default page