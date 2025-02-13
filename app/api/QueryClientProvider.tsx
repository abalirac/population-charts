"use client";

import React, { ReactNode } from "react";

import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * Create a new instance of Tanstack QueryClient
 */
const queryClient = new QueryClient();

interface QueryClientProviderProps {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryClientProvider>
  );
};

export default QueryClientProvider;
