"use client";

import React, { useCallback, useEffect, useMemo } from "react";

import { motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery } from "@/lib/utils";

const MobileTabs = ({ planned }: { planned: Record<string, number> }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialStatus = useMemo<string | null>(() => {
    const status = searchParams.get("status");
    return status ? status : "in-progress";
  }, [searchParams]);

  const [statusTab, setStatusTab] = React.useState<string | null>(
    initialStatus
  );
  useEffect(() => {
    const status = searchParams.get("status");
    if (status) {
      setStatusTab(status);
    }
  }, [searchParams]);
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
  const updateStatus = useCallback(
    (nextStatus: string) => {
      setStatusTab(nextStatus);
      updateUrl(nextStatus);
    },
    [updateUrl]
  );
  return (
    <>
      <div className="grid grid-cols-3 ">
        {Object.entries(planned).map(([status, count]) => (
          <motion.div
            key={status}
            layoutId={`status-${status}`}
            className={`py-5 cursor-pointer relative`}
            onClick={() => updateStatus(status)}
          >
            <p
              className={`small capitalize font-bold shrink-0 text-center transition-all duration-200
            ${status === statusTab ? "" : "opacity-40"}`}
            >
              {status} <span>({count})</span>
            </p>
            {status === statusTab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-[4px] bg-pink"
                transition={{ type: "spring", stiffness: 100 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MobileTabs;
