"use client";

import { API_BASE_URL } from "@/constants";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function ValidateTokenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setIsLoggedIn, setIsFetchingLoginStatus } = useAuthStore();
  const { isError, isFetching, isPending } = useQuery({
    queryKey: ["validateToken"],
    queryFn: () => {
      return axios.get(`${API_BASE_URL}/api/auth/validate-token`, {
        withCredentials: true,
      });
    },
    retry: false, // !important
  });

  useEffect(() => {
    if (!isPending) {
      setIsFetchingLoginStatus(false);
      if (!isError) {
        setIsLoggedIn(!isError);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, [isError, isPending]);

  return <>{children}</>;
}
