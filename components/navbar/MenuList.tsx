import { useEffect, useState } from "react";
import { useContinents } from "@/lib/queries/useContinents";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuList = () => {
  const pathname = usePathname();
  const { data: fetchedContinents = [] } = useContinents();
  const [continents, setContinents] = useState(fetchedContinents);

  useEffect(() => {
    // Solo actualizar el estado de continents si está vacío y fetchedContinents no lo está
    if (continents.length === 0 && fetchedContinents.length > 0) {
      setContinents(fetchedContinents);
    }
  }, [fetchedContinents, continents]);

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
          key={continent.name.common}
          href={`/continent/${continent.name.common.toLowerCase()}`}
          className={`rounded-md px-3 py-2 text-sm font-medium ${currentPathStyle(
            `/continent/${continent.name.common.toLowerCase()}`
          )}`}
        >
          {continent.name.common}
        </Link>
      ))}
    </>
  );
};
