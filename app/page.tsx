"use client";

import { PopulationBarChart } from "@/components/PopulationBarChart";
import { useContinents } from "@/lib/queries/useContinents";

export default function Home() {
  const { data: continents = [] } = useContinents();

  return (
    <main className="flex items-center sm:items-start w-full p-8">
      <PopulationBarChart data={continents} />
    </main>
  );
}
