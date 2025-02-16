import { useMemo } from "react";
import { useCountries } from "./useCountries";
import { Continent } from "@/types/types";

export function useContinents() {
  const { data: countries, isLoading, error } = useCountries();

  // Extrae la lista de continentes y sus poblaciones de forma memoizada para evitar recalcular en cada render
  const continents = useMemo(() => {
    if (!countries) return [];

    const continentPopulationMap = countries.reduce(
      (acc, country) => {
        const continent = country.region;
        if (!acc[continent]) {
          acc[continent] = {
            name: { official: continent, common: continent },
            population: 0,
          };
        }
        acc[continent].population += country.population;
        return acc;
      },
      {} as { [key: string]: Continent }
    );

    return Object.values(continentPopulationMap);
  }, [countries]);

  return { data: continents, isLoading, error };
}
