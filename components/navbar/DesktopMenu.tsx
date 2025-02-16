import { MenuList } from "./MenuList";
import PopulationFilter from "./PopulationFilter";

export const DesktopMenu = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-baseline ml-10 space-x-4">
        <MenuList />
        <PopulationFilter />
      </div>
    </div>
  );
};
