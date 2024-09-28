import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import admin from "firebase-admin";
import { app } from "@/firebase/server";

export const useProtectedRoute = async () => {
  const token = cookies().get("auth-token")?.value;

  if (!token) {
    console.log("No token exists, redirecting back to login");
    return redirect("/");
  }

  // At this point we have some token and need to verify it
  const auth = admin.auth(app);

  try {
    const decodedToken = await auth.verifyIdToken(token);
    console.log(decodedToken);
  } catch (e) {
    console.log("Error decoding id token - redirecting to login (", e, ")");
    return redirect("/");
  }
};
