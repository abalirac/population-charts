import { useMemo } from "react";
import { useCountries } from "./useCountries";

export function useContinents() {
  const { data: countries, isLoading, error } = useCountries();

  // Extrae la lista de continentes de forma memoizada para evitar recalcular en cada render
  const continents = useMemo(() => {
    if (!countries) return [];

    return [...new Set(countries.map((country) => country.region))];
  }, [countries]);

  return { data: continents, isLoading, error };
}
