"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ValidateTokenProvider from "./ValidateTokenProvider";
import AppRenderProvider from "./AppRenderProvider";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ValidateTokenProvider>
        <AppRenderProvider>{children}</AppRenderProvider>
      </ValidateTokenProvider>
    </QueryClientProvider>
  );
}
