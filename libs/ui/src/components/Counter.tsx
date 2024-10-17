"use client";

import { create } from "zustand";

const useCounterStore = create<{
  value: number;
  increment: () => void;
  decrement: () => void;
}>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
}));

export default function Counter() {
  const { value, increment, decrement } = useCounterStore();
  return (
    <div>
      {value}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
