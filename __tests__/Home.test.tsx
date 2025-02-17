import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/app/page";

// Crear una instancia de QueryClient
const queryClient = new QueryClient();

describe("Home component", () => {
  it("should render the Home component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    expect(screen.getByText("Bar Chart - Population")).toBeInTheDocument();
  });
});
