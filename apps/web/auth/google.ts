import { app } from "@/firebase";
import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  browserLocalPersistence,
} from "firebase/auth";

const auth: Auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

const provider = new GoogleAuthProvider();

export const useFirebaseGoogleAuth = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return { signInWithGoogle };
};
