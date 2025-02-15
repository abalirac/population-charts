import { Country } from "@/types/types";
import axiosInstance from "../config/axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getCountries = async (): Promise<Country[]> => {
  const response = await axiosInstance.get(
    `${API_URL}/all?fields=name,population,region`
  );
  const Countries = response.data;

  return Countries;
};

const countryService = {
  getCountries,
};

export default countryService;
