import { create } from "zustand";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase";

interface AuthStoreState {
  token: string | null;
  setToken: (string: string) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  token: null,
  setToken: (newToken: string) => set(() => ({ token: newToken })),
}));

export const useToken = () => {
  const token = useAuthStore((state) => state.token);

  return { token };
};

const auth = getAuth(app);

auth.onAuthStateChanged(async (user) => {
  if (user) {
    console.log("User is logged in!");
    const token = await user.getIdToken();
    useAuthStore.getState().setToken(token);
    fetch("/me", { headers: { Authorization: token } });
  } else {
  }
});
