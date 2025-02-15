"use client";
import { usePopulationFilter } from "../../lib/store/usePopulationFilter";

const PopulationFilter = () => {
  const { minPopulation, setMinPopulation } = usePopulationFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPopulation(Number(e.target.value));
  };

  return (
    <input
      type="number"
      value={minPopulation}
      onChange={handleChange}
      placeholder="Filtrar por población mínima"
      className="border p-2 rounded-lg"
    />
  );
};

export default PopulationFilter;
