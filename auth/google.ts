import { app } from "@/firebase";
import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken,
  browserLocalPersistence,
} from "firebase/auth";
import { useAuthStore } from ".";

const auth: Auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

const provider = new GoogleAuthProvider();

export const useFirebaseGoogleAuth = () => {
  const { setToken } = useAuthStore();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      if (auth.currentUser) {
        const token = await getIdToken(auth.currentUser);
        setToken(token);
        fetch("/me", { headers: { Authorization: token } });
      } else {
        console.warn("current user is null despite passing sign up?");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { signInWithGoogle };
};
