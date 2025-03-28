import PropertyList from "@/app/components/properties/PropertyList"

const page = ({ }) => {
    return (
        <main>
            <h1 className="my-6 text-2xl">properties</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PropertyList />
            </div>
        </main>
    )
}

export default page