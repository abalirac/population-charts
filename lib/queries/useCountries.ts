import { useQuery } from "@tanstack/react-query";
import { usePopulationFilter } from "@/lib/store/usePopulationFilter";
import CountryService from "@/lib/api/countryService";

export const useCountries = (continent?: string) => {
  const minPopulation = usePopulationFilter((state) => state.minPopulation);
  console.log(minPopulation);

  return useQuery({
    queryKey: ["countries", continent, minPopulation],
    queryFn: async () => {
      const countries = await CountryService.getCountries();

      return countries.filter(
        (country) =>
          country.population >= minPopulation &&
          (!continent || country.region.toLocaleLowerCase() === continent)
      );
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
