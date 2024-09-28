"use client";

import Button from "@/components/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFirebaseGoogleAuth } from "@/auth/google";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle } = useFirebaseGoogleAuth();

  const handleGoogleLogin = async () => {
    console.log("I was clicked!");
    setLoading(true);
    await signInWithGoogle();
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen font-[family-name:var(--font-geist-sans)] p-0 m-0">
      <main className="min-h-full min-w-full row-span-2 flex justify-center items-center ">
        <div className="ring-1 dark:ring-slate-900 ring-slate-200 rounded-xl min-h-96 min-w-72 p-8 shadow-xl">
          <section className="-space-y-2">
            <h6 className="text-base font-mono">Log in to</h6>
            <h1 className="text-4xl font-black font-mono">REVIEW_APP</h1>
            <br />
            <h6 className="text-base font-mono w-1/2">
              The best app to ever exist{" "}
              <i>(That totally doesn&apos;t need a new name)</i>
            </h6>
          </section>
          <br />
          <div className="flex flex-col gap-4">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                className="text-black bg-slate-100 p-2 rounded-xl dark:bg-slate-900"
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="text-black bg-slate-100 p-2 rounded-xl dark:bg-slate-900"
              ></input>
            </form>
            <div className="flex flex-nowrap justify-between">
              <Button>Log in</Button>
              <Button onClick={() => handleGoogleLogin()} loading={loading}>
                <FontAwesomeIcon icon={faGoogle} className="mr-4" />
                Log in with Google
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
