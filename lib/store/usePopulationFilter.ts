import { create } from "zustand";

interface PopulationFilterState {
  minPopulation: number;
  setMinPopulation: (value: number) => void;
}

export const usePopulationFilter = create<PopulationFilterState>((set) => ({
  minPopulation: 0,
  setMinPopulation: (value) => set({ minPopulation: value }),
}));
