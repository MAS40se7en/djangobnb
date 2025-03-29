import { Icon } from "@iconify/react"

const SearchFilters = ({}) => {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between lg:border border-primary/50 rounded-full transition-all">
      <div className="hidden lg:block">
          <div className="flex flex-row items-center justify-between">
              <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-primary/20">
                <p className="text-xs font-semibold">Where</p>
                <p className="text-sm">Wanted location</p>
              </div>
              <div className="h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-primary/20">
                <p className="text-xs font-semibold text-nowrap">Check in</p>
                <p className="text-sm">Add dates</p>
              </div>
              <div className="h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-primary/20">
                <p className="text-xs font-semibold text-nowrap">Check out</p>
                <p className="text-sm">Add dates</p>
              </div>
              <div className="h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-primary/20">
                <p className="text-xs font-semibold text-nowrap">Who</p>
                <p className="text-sm">Add guests</p>
              </div>
          </div>
      </div>

      <div className="p-2">
        <div className="p-2 lg:p-4 bg-primary rounded-full text-background hover:bg-primary-hover">
          <Icon icon="gravity-ui:magnifier" width="20" height="20" />
        </div>
      </div>
    </div>
  )
}

export default SearchFilters