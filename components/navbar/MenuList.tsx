import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuListProps {
  continents: string[];
}

const MenuList: React.FC<MenuListProps> = ({ continents }) => {
  const pathname = usePathname();

  const currentPathStyle = (pathName: string) => {
    return pathname === pathName
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white";
  };

  return (
    <>
      <Link
        href="/"
        className={`rounded-md px-3 py-2 text-sm font-medium ${currentPathStyle("/")}`}
      >
        World
      </Link>
      {continents.map((continent) => (
        <Link
          key={continent}
          href={`/continent/${continent.toLowerCase()}`}
          className={`rounded-md px-3 py-2 text-sm font-medium ${currentPathStyle(
            `/continent/${continent.toLowerCase()}`
          )}`}
        >
          {continent}
        </Link>
      ))}
    </>
  );
};

export default MenuList;
