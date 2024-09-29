import { create } from "zustand";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase";

interface AuthStoreState {
  token: string | null;
  loading: boolean;
  setToken: (string: string) => void;
  setLoading: (b: boolean) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  token: null,
  loading: true,
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  setLoading: (newLoading: boolean) => set(() => ({ loading: newLoading })),
}));

export const useToken = () => {
  const token = useAuthStore((state) => state.token);
  const loading = useAuthStore((state) => state.loading);

  return { token, loading };
};

const auth = getAuth(app);

auth.onAuthStateChanged(async (user) => {
  if (user) {
    console.log("User is logged in!");
    const token = await user.getIdToken();
    useAuthStore.getState().setToken(token);
    useAuthStore.getState().setLoading(false);

    fetch("/me", { headers: { Authorization: token } });
  } else {
    useAuthStore.getState().setLoading(false);
  }
});
