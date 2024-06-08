"use client";

import { API_BASE_URL } from "@/constants";
import { SigninFormData } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignIpPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm<SigninFormData>();

  const {
    mutate: signUser,
    isPending,
    isError,
    isSuccess,
    error,
    data,
  } = useMutation({
    mutationFn: (body: SigninFormData) => {
      return axios.post(`${API_BASE_URL}/api/auth/login`, body, {
        withCredentials: true,
      });
    },
    onSuccess(data, variables, context) {
      // queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      router.push("/");
      reset();
    },
    onError(error, variables, context) {
      // console.log(error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    signUser(data);
  });

  return (
    <form className="max-w-[500px] mx-auto mt-10" onSubmit={onSubmit}>
      <div className="text-center">
        <h3 className="text-2xl font-bold">Sign in to your Account</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 mt-6">
        <div className="relative sm:col-span-2">
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-amber-700 outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email?.message && (
            <p className=" absolute -bottom-5 px-2 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative sm:col-span-2">
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder="Password"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-amber-700 outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </div>
          {errors.password?.message && (
            <p className=" absolute -bottom-5 px-2 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {isError ? (
        <div className="text-red-500 font-bold text-center">
          {/* @ts-ignore */}
          {error.response.data.message}
        </div>
      ) : null}
      {isSuccess ? (
        <div className="text-green-500 font-bold text-center">
          {data.data.message ? data.data.message : "Signed in successfully"}
        </div>
      ) : null}

      <button
        type="submit"
        className=" rounded-md mt-8 px-8 py-3 mx-auto block text-sm bg-amber-700 text-white hover:bg-amber-900"
      >
        {isPending ? "Processing" : "Submit"}
      </button>

      <p className="text-sm mt-6 text-center">
        New here?{" "}
        <Link
          href="/sign-up"
          className="text-amber-700 font-semibold hover:underline ml-1"
        >
          Signup here
        </Link>
      </p>
    </form>
  );
}
