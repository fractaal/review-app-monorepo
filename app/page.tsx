"use client";

import Button from "@/components/Button";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFirebaseGoogleAuth } from "@/auth/google";
import { useToken } from "@/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/firebase";
import { useRouter } from "next/navigation";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { BarLoader } from "react-spinners";

export default function Login() {
  const [googleLoading, setGoogleLoading] = useState(false);
  const { signInWithGoogle } = useFirebaseGoogleAuth();
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/home");
      }
      unsubscribe();
    });
  });

  const handleGoogleLogin = async () => {
    console.log("I was clicked!");
    setGoogleLoading(true);
    await signInWithGoogle();
    setTimeout(() => setGoogleLoading(false), 2000);
  };

  const { token, loading } = useToken();

  const nodeRef = useRef(null);

  const loadingPage = (
    <div className="min-h-screen  w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black font-mono">REVIEW_APP</h1>
    </div>
  );

  const loginPage = token ? null : (
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
          <span>Your token is {token ? <b>{token}</b> : <b>null</b>}</span>
          <section className="flex flex-col gap-4">
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
              <Button
                onClick={() => handleGoogleLogin()}
                loading={googleLoading}
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-4" />
                Log in with Google
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

  return (
    <SwitchTransition>
      <CSSTransition
        key={loading ? "loading" : "not loading"}
        timeout={500}
        nodeRef={nodeRef}
        classNames="fade"
      >
        <div ref={nodeRef}>{loading ? loadingPage : loginPage}</div>
      </CSSTransition>
    </SwitchTransition>
  );
}
