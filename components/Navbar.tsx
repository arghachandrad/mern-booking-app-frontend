"use client";
import { useAuthStore } from "@/hooks/useAuthStore";
import Link from "next/link";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const [showSidenav, setShowSideNav] = useState(false);

  return (
    <header className="py-4 px-4 sm:px-10 bg-black z-50 relative text-white">
      <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4 justify-between">
        <Link href="/" className="text-2xl font-bold md:text-3xl">
          Peacestay.com
        </Link>

        {isLoggedIn && (
          <ul className="hidden lg:flex items-center gap-4">
            <li>
              <Link
                href="/my-bookings"
                className="block font-semibold transition-all text-white hover:text-amber-700"
              >
                My Bookings
              </Link>
            </li>
            <li>
              <Link
                href="/my-hotels"
                className="block font-semibold transition-all text-white hover:text-amber-700"
              >
                My Hotels
              </Link>
            </li>
          </ul>
        )}

        {showSidenav && (
          <div className="lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0">
            <button
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={() => setShowSideNav(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:!flex lg:ml-12 lg:space-x-6 max-lg:space-y-6 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <Link
                  href="/"
                  className="text-2xl font-bold md:text-3xl text-amber-700"
                >
                  Peacestay.com
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="max-lg:border-b max-lg:py-2 px-3 ">
                    <Link
                      href="/my-bookings"
                      className="block font-semibold transition-all text-amber-700"
                    >
                      My Bookings
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:py-2 px-3 ">
                    <Link
                      href="/my-hotels"
                      className="block font-semibold transition-all text-amber-700"
                    >
                      My Hotels
                    </Link>
                  </li>
                  <li>
                    <SignOutButton />
                  </li>
                </>
              )}
            </ul>
          </div>
        )}

        <div className="flex">
          {!isLoggedIn && (
            <Link
              href="/sign-in"
              className="bg-blue-100 hover:bg-blue-200 flex items-center transition-all font-semibold rounded-md px-5 py-3 text-amber-700"
            >
              Login
            </Link>
          )}
          {isLoggedIn && <SignOutButton />}
          <button
            onClick={() => setShowSideNav(true)}
            className="lg:hidden ml-7"
          >
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
