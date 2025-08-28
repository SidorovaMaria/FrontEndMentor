"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";

import { motion, useReducedMotion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery } from "@/lib/utils";

const MobileTabs = ({ planned }: { planned: Record<string, number> }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shouldReduce = useReducedMotion();
  const statuses = useMemo(() => Object.keys(planned), [planned]);
  const initialStatus = useMemo<string | null>(() => {
    const status = searchParams.get("status");
    return status ?? "in-progress";
  }, [searchParams]);

  const [statusTab, setStatusTab] = React.useState<string | null>(
    initialStatus
  );
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const setTabRef =
    (idx: number): React.RefCallback<HTMLButtonElement> =>
    (el) => {
      tabRefs.current[idx] = el;
    };

  useEffect(() => {
    const status = searchParams.get("status");
    if (status && status !== statusTab) setStatusTab(status);
  }, [searchParams, statusTab]);

  const updateUrl = useCallback(
    (nextStatus: string) => {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "status",
        value: nextStatus,
      });
      router.replace(newUrl);
    },
    [router, searchParams]
  );
  const setActiveTab = useCallback(
    (nextStatus: string, focus = false) => {
      setStatusTab(nextStatus);
      updateUrl(nextStatus);
      if (focus) {
        const index = statuses.indexOf(nextStatus);
        if (index !== -1 && tabRefs.current[index]) {
          tabRefs.current[index]?.focus();
        }
      }
    },
    [statuses, updateUrl]
  );
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const current = statuses.indexOf(statusTab || "");
      if (current === -1) return;
      let nextIndex = current;
      switch (e.key) {
        case "ArrowRight":
        case "Right":
          nextIndex = (current + 1) % statuses.length;
          e.preventDefault();
          break;
        case "ArrowLeft":
        case "Left":
          nextIndex = (current - 1 + statuses.length) % statuses.length;
          e.preventDefault();
          break;
        case "Home":
          nextIndex = 0;
          e.preventDefault();
          break;
        case "End":
          nextIndex = statuses.length - 1;
          e.preventDefault();
          break;
        default:
          return;
      }
      const next = statuses[nextIndex];
      setActiveTab(next, true);
    },
    [statuses, statusTab, setActiveTab]
  );
  return (
    <div
      role="tablist"
      aria-label="Roadmap statuses"
      className="grid grid-cols-3"
      onKeyDown={onKeyDown}
    >
      {statuses.map((status, i) => {
        const selected = status === statusTab;
        return (
          <div key={status} className=" relative">
            <button
              ref={setTabRef(i)}
              role="tab"
              id={`tab-${status}`}
              aria-selected={selected}
              aria-controls={`panel-${status}`}
              tabIndex={selected ? 0 : -1}
              type="button"
              onClick={() => setActiveTab(status)}
              className={`w-full py-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-pink/50 `}
            >
              <span
                className={`small capitalize font-bold block text-center transition-opacity duration-200 ${
                  selected ? "" : "opacity-40"
                }`}
              >
                {status} <span className="sr-only">status,</span>
                <span aria-hidden>({planned[status]})</span>
                <span className="sr-only">({planned[status]} items)</span>
              </span>
            </button>

            {selected && (
              <motion.div
                layoutId="underline"
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-[4px] bg-pink rounded-[10px]"
                transition={
                  shouldReduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 200, damping: 40 }
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileTabs;
