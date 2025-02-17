import { MenuList } from "./MenuList";
import PopulationFilter from "./PopulationFilter";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

export const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  return (
    <>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MenuList />
          <PopulationFilter />
        </div>
      </div>
    </>
  );
};
