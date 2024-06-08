"use client";
import { API_BASE_URL } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: () => {
      return axios.post(
        `${API_BASE_URL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      router.push("/");
    },
    onError(error, variables, context) {
      console.log("logout error: ", error);
    },
  });
  return (
    <button
      className="bg-blue-100 hover:bg-blue-200 flex items-center transition-all font-semibold rounded-md px-5 py-3 text-amber-700"
      onClick={logout}
      disabled={isPending}
    >
      Sign Out
    </button>
  );
}
