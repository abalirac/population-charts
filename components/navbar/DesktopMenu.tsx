import { useContinents } from "@/lib/queries/useContinents";
import { MenuList } from "./MenuList";
import PopulationFilter from "./PopulationFilter";

export const DesktopMenu = () => {
  const { data: continents = [] } = useContinents();

  return (
    <div className="hidden md:block">
      <div className="flex items-baseline ml-10 space-x-4">
        <MenuList continents={continents} />
        <PopulationFilter />
      </div>
    </div>
  );
};
