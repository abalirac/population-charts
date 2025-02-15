import MenuList from "./MenuList";
import PopulationFilter from "./PopulationFilter";

interface DesktopMenuProps {
  continents: string[];
}

export const DesktopMenu = ({ continents }: DesktopMenuProps) => {
  return (
    <div className="hidden md:block">
      <div className="flex items-baseline ml-10 space-x-4">
        <MenuList continents={continents} />
        <PopulationFilter />
      </div>
    </div>
  );
};
