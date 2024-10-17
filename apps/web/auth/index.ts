import { create } from "zustand";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase";

interface AuthStoreState {
  token: string | null;
  loading: boolean;
  setToken: (string: string | null) => void;
  setLoading: (b: boolean) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  token: null,
  loading: true,
  setToken: (newToken) => set(() => ({ token: newToken })),
  setLoading: (newLoading) => set(() => ({ loading: newLoading })),
}));

export const useToken = () => {
  const token = useAuthStore((state) => state.token);
  const loading = useAuthStore((state) => state.loading);

  return { token, loading };
};

const auth = getAuth(app);

auth.onAuthStateChanged(async (user) => {
  if (user) {
    console.log("Firebase provided token, verifying with server...");
    const token = await user.getIdToken();

    const verificationResult = await fetch("/me", {
      headers: { Authorization: token },
    });

    console.log(verificationResult);

    const state = useAuthStore.getState();

    if (verificationResult.ok) {
      console.log("Verification ok!");
      state.setToken(token);
      state.setLoading(false);
    } else {
      console.log("Verification failed, wiping token");
      state.setToken(null);
      state.setLoading(false);
    }
  } else {
    useAuthStore.getState().setToken(null);
    useAuthStore.getState().setLoading(false);
  }
});
