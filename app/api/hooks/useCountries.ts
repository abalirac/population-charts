import { useQuery } from "@tanstack/react-query";
import CountryService from "@/app/api/services/CountryService";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: CountryService.getCountries,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
