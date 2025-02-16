"use client";
import { usePopulationFilter } from "../../lib/store/usePopulationFilter";
import { Filter } from "lucide-react";

const PopulationFilter = () => {
  const { minPopulation, setMinPopulation } = usePopulationFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPopulation(Number(e.target.value));
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Filter className="w-5 h-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        value={minPopulation === 0 ? "" : minPopulation}
        onChange={handleChange}
        type="number"
        id="filter-population"
        className="pl-10 pr-4 py-2 rounded"
        placeholder="Filter population..."
      />
    </div>
  );
};

export default PopulationFilter;
