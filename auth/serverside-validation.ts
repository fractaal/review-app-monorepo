import admin from "firebase-admin";
import { app } from "@/firebase/server";

// Requests to this endpoint should have an authorization header

export async function GET(request: Request) {
  const authToken = request.headers.get("Authorization");

  if (!authToken) {
    return new Response(null, { status: 403 });
  }

  const auth = admin.auth(app);

  try {
    await auth.verifyIdToken(authToken);

    // Successfully verified token, set response headers
    return new Response(null, {
      status: 200,
      headers: {
        "Set-Cookie": `auth-token=${authToken}; SameSite=Strict; Secure; HttpOnly`,
      },
    });
  } catch (err) {
    void err;

    console.log("Token verification failed, clearing cookie");
    return new Response(null, { status: 403, headers: {
      "Set-Cookie": `auth-token=; Max-Age=0; SameSite=Strict; Secure; HttpOnly`,
    } });
  }
}
