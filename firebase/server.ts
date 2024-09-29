import admin from "firebase-admin";

let app: admin.app.App;

if (process.env.FIREBASE_SERVER_CREDENTIALS) {
  const base64 = process.env.FIREBASE_SERVER_CREDENTIALS;
  const rawJson = Buffer.from(base64, "base64").toString("utf-8");

  console.log(rawJson);

  if (admin.apps.length > 0) {
    app = admin.apps[0] as admin.app.App;
    console.log("Firebase app already exists");
  } else {
    try {
      app = admin.initializeApp(
        {
          credential: admin.credential.cert(JSON.parse(rawJson)),
        },
        "server"
      );
    } catch (err) {
      console.error("Firebase server credentials invalid - ", err);
    }
  }
} else {
  console.error("Firebase server credentials don't exist!");
}

export { app };
