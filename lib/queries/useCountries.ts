import { useQuery } from "@tanstack/react-query";
import { usePopulationFilter } from "@/lib/store/usePopulationFilter";
import CountryService from "../api/countryService";

export const useCountries = () => {
  const minPopulation = usePopulationFilter((state) => state.minPopulation); // ✅ Estado de Zustand dentro del hook

  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const countries = await CountryService.getCountries();
      return countries.filter((country) => country.population >= minPopulation);
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
