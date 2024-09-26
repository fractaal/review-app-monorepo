export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen font-[family-name:var(--font-geist-sans)] p-0 m-0">
      <main className="min-h-full min-w-full row-span-2 flex justify-center items-center ">
        <div className="ring-1 ring-white/50 rounded-xl min-h-96 min-w-72 p-8">
          <div className="text-2xl font-black">Log in</div>
          <br />
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="text-black"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="text-black"
            ></input>
          </div>
          <button className="bg-slate-900 p-2 rounded-xl my-4 hover:bg-slate-800 active:bg-slate-950">
            Log in
          </button>
        </div>
      </main>
    </div>
  );
}
