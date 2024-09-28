import { app } from "@/firebase";
import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const auth: Auth = getAuth(app);
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
