"use client";

import "./animations.css";
import { CSSTransition } from "react-transition-group";
import { BarLoader } from "react-spinners";
import { useTheme } from "next-themes";
import useRipple from "@/hooks/useRipple";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Button({
  children,
  loading,
  onClick,
  link,
}: {
  children?: React.ReactNode;
  loading?: boolean;
  link?: string;
  onClick?: () => void;
}) {
  const { theme } = useTheme();
  const router = useRouter();

  const [ripple, event] = useRipple({
    color: theme === "light" ? "rgba(0, 0, 0, 0.3)" : "rgba(255,255,255, 0.3)",
  });

  const nodeRef = useRef(null);

  const _onClick = () => {
    if (loading) return;

    if (link) {
      return router.push(link);
    }

    if (onClick) {
      return onClick();
    }
  };

  return (
    <button
      ref={ripple}
      onClick={() => _onClick()}
      onPointerDown={event}
      className="relative overflow-hidden border-[1px] border-black/20 dark:border-white/20 transition-all duration-300 hover:scale-105 active:scale-90 w-fit px-4 dark:bg-slate-900 dark:text-white p-2 rounded-xl my-4 dark:hover:bg-slate-800 dark:active:bg-slate-950 bg-slate-100 hover:bg-slate-200"
    >
      <CSSTransition
        in={loading}
        timeout={500}
        nodeRef={nodeRef}
        classNames="fade"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center dark:bg-slate-900 bg-slate-100"
        >
          <BarLoader color={theme === "light" ? "black" : "white"} />
        </div>
      </CSSTransition>
      {children}
    </button>
  );
}
