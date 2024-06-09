"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

export default function RedirectIfNotLoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuthStore();

  useLayoutEffect(() => {
    if (!isLoggedIn) {
      redirect("/");
    }
  }, [isLoggedIn]);
  return <div>{children}</div>;
}
