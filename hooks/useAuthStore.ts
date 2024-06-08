import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  isLoggedIn: boolean;
  isFetchingLoginStatus: boolean;
};

type Actions = {
  setIsLoggedIn: (status: boolean) => void;
  setIsFetchingLoginStatus: (status: boolean) => void;
  //   decrement: (qty: number) => void
};

export const useAuthStore = create<State & Actions>()(
  immer((set) => ({
    isLoggedIn: false,
    isFetchingLoginStatus: true,
    setIsLoggedIn: (status: boolean) =>
      set((state) => {
        state.isLoggedIn = status;
      }),
    setIsFetchingLoginStatus: (status: boolean) =>
      set((state) => {
        state.isFetchingLoginStatus = status;
      }),
  }))
);
