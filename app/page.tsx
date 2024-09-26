"use client";

import Button from "@/components/Button";

export default function Home() {
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
                className="text-black bg-slate-100 p-4 rounded-xl dark:bg-slate-950"
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="text-black bg-slate-100 p-4 rounded-xl dark:bg-slate-950"
              ></input>
            </form>
            <Button />
          </div>
        </div>
      </main>
    </div>
  );
}
