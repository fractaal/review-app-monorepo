"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faMoneyBill,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import useRipple from "@/hooks/useRipple";

export default function ReviewPost({
  className = "" as string,
  children = null as React.ReactNode,
}) {
  const baseClasses =
    "bg-zinc-50 dark:bg-slate-950 cursor-pointer rounded-xl ring-1 dark:ring-white/20 ring-black/20 p-4 mx-1 transition-all duration-150 dark:shadow-white/20 hover:shadow-lg hover:scale-[1.01]";
  const combinedClasses = `${baseClasses} ${className}`;

  const { theme } = useTheme();

  const [ripple, event] = useRipple({
    color: theme === "light" ? "rgba(0, 0, 0, 0.3)" : "rgba(255,255,255, 0.3)",
  });

  void children;

  return (
    <div ref={ripple} onPointerDown={event} className={combinedClasses}>
      <section className="w-full h-48 flex flex-col justify-between">
        <div>
          <h1 className="text-xl tracking-tighter font-black">Headline</h1>
          <h2 className="text-lg font-medium -mt-2 tracking-tighter">
            Place or item or name
          </h2>
        </div>

        <div className="mb-2 flex items-end justify-between tracking-tighter">
          <h2 className="text-red-500">
            <FontAwesomeIcon icon={faPenNib} /> <b>Review Verdict</b>
          </h2>

          <div className="flex flex-col items-end">
            <h2>
              <FontAwesomeIcon icon={faMoneyBill} /> <b>₱400-500</b>
            </h2>

            <h2>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <b>Pabayo-Hayes Intersection</b>
            </h2>
          </div>
        </div>
      </section>
      <hr className="-mx-4 mb-4 dark:border-white/20" />
      <p className="text-white/50 tracking-wider font-black text-sm capitalize mb-2">
        REVIEW
      </p>
      <div className="text-sm">
        This is where I talk about the product. it is good. it is
        fantaaaaaaaaaaastic
      </div>
    </div>
  );
}
