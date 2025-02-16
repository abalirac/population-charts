"use client";

import { useParams } from "next/navigation";
import { useCountries } from "@/lib/queries/useCountries";
import { PopulationBarChart } from "@/components/PopulationBarChart";

export default function ContinentPage() {
  const { slug } = useParams();
  const { data: countries = [] } = useCountries(slug as string);

  return (
    <main className="flex items-center sm:items-start w-full p-8">
      <PopulationBarChart data={countries} />
    </main>
  );
}
