import admin from "firebase-admin";

let app: admin.app.App;

if (process.env.FIREBASE_SERVER_CREDENTIALS) {
  const base64 = process.env.FIREBASE_SERVER_CREDENTIALS;
  const rawJson = Buffer.from(base64, "base64").toString("utf-8");

  console.log(rawJson);

  try {
    app = admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(rawJson)),
    });
  } catch (err) {
    console.error("Firebase server credentials invalid - ", err);
  }
} else {
  console.error("Firebase server credentials don't exist!");
}

export { app };
