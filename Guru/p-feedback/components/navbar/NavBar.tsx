"use client";
import { getCountedPlannedFeedbacks, getStatusColor } from "@/lib/data-utils";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "../ui/Badge";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/utils";
import { UI_CategoryFilter } from "@/data";

const NavBar = ({ planned }: { planned: Record<string, number> }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openMenu, setOpenMenu] = useState(false);

  const initialSelected = useMemo<string>(() => {
    const tag = searchParams.get("tag");
    return tag ? tag : "";
  }, [searchParams]);
  const [selectedCategories, setSelectedCategories] =
    React.useState<string>(initialSelected);

  useEffect(() => {
    const tag = searchParams.get("tag");
    const next = tag ? tag : "";
    if (next !== selectedCategories) {
      setSelectedCategories(next);
    }
  }, [searchParams, selectedCategories]);

  const updateUrl = useCallback(
    (nextTag: string) => {
      let newUrl;
      if (nextTag.length) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "tag",
          value: nextTag,
        });
      } else {
        newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["tag"],
        });
      }

      router.replace(newUrl);
    },
    [searchParams, router]
  );
  const clearAll = useCallback(() => {
    setSelectedCategories("");
    updateUrl("");
  }, [updateUrl]);

  const toggleCategory = useCallback(
    (category: string) => {
      setSelectedCategories((prev) => {
        const has = prev === category.toLowerCase();
        const next = has ? "" : category.toLowerCase();
        updateUrl(next);
        return next;
      });
    },
    [updateUrl]
  );

  return (
    <>
      <nav className="w-[255px] h-[178px] lg:flex-col md:gap-[10px] lg:gap-6 hidden md:flex ">
        {/* Logo */}
        <div className="radial-gradient relative text-white rounded-[10px] overflow-hidden pl-6 pb-6 w-full h-full flex flex-col items-start justify-end shrink-0 max-w-[223px]">
          <h2>Frontend Mentor</h2>
          <p className="opacity-75 regular ">Feedback App</p>
          <span className="absolute bg-[#fbb57a] rounded-full w-[192px] h-[192px] top-3/4 left-3/4 blur-xl" />
          <span className="absolute bg-[#7AD8FB] rounded-full w-[192px] h-[192px] bottom-3/4 right-3/4 blur-xl" />
        </div>
        <section
          className="bg-white w-full max-w-[223px] p-6 md:pr-4 
      rounded-[10px] flex flex-wrap gap-2 shrink-0 md:pb-9 lg:pb-auto"
        >
          <Badge
            role="button"
            aria-pressed={selectedCategories.length === 0}
            tabIndex={0}
            onClick={clearAll}
            onKeyDown={(e) => (e.key === "Enter" || e.key === "") && clearAll()}
            variant={selectedCategories.length === 0 ? "active" : "default"}
          >
            All
          </Badge>
          {UI_CategoryFilter.map((category) => {
            const active = selectedCategories.includes(category.toLowerCase());
            return (
              <Badge
                key={category}
                role="button"
                aria-pressed={active}
                tabIndex={0}
                onClick={() => {
                  toggleCategory(category.toLowerCase());
                }}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === "") &&
                  toggleCategory(category.toLowerCase())
                }
                variant={active ? "active" : "default"}
              >
                {category}
              </Badge>
            );
          })}
        </section>
        <section className="bg-white flex flex-col p-6 py-4.5 rounded-[10px] gap-6 w-full! shrink-0  max-w-[223px] ">
          <div className="flex items-center justify-between ">
            <h3 className="text-[#3A4374]">Roadmap</h3>
            <Link href="/roadmap">
              <span className="text-[#4661E6] small hover:text-[#8397F8] underline transition-all duration-200">
                View
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-2">
            {Object.entries(planned).map(([status, count]) => (
              <div
                key={status}
                className={`flex w-full items-center justify-between`}
              >
                <p className="regular capitalize text-[#647196]">
                  <span
                    className="w-2 h-2 rounded-full  inline-block mr-2"
                    style={{ backgroundColor: getStatusColor(status) }}
                  />
                  {status}
                </p>

                <p className="body font-bold">{count}</p>
              </div>
            ))}
          </div>
        </section>
      </nav>
      <>
        <header className="h-[72px] radial-gradient flex items-center justify-between px-6 text-white relative overflow-hidden md:hidden">
          <div className="flex gap-0 flex-col relative z-10">
            <h1
              role="h1"
              className="font-bold text-[15px] leading-[22px] tracking-[-0.19px]"
            >
              Frontend Mentor
            </h1>
            <p className="font-medium small opacity-75">Feebdack Board</p>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            {!openMenu ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 180 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Menu
                  onClick={() => setOpenMenu(!openMenu)}
                  className="cursor-pointer"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <X
                  onClick={() => setOpenMenu(!openMenu)}
                  className="cursor-pointer"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <span className="absolute bg-[#fbb57a] rounded-full w-[192px] h-[192px] top-2/4 left-5/6 blur-xl z-5" />
          <span className="absolute bg-[#7AD8FB] rounded-full w-[192px] h-[192px] bottom-2/4 right-5/6 blur-xl z-5" />
        </header>
        <AnimatePresence>
          {openMenu && (
            <>
              <motion.div
                onClick={() => setOpenMenu(!openMenu)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-black/50 absolute w-screen h-screen"
              />
              <motion.nav
                initial={{ translateX: 271, opacity: 0 }}
                animate={{
                  translateX: 0,
                  opacity: 1,
                }}
                exit={{
                  translateX: 200,
                  opacity: 0,
                }}
                transition={{ duration: 0.4, type: "tween" }}
                className="absolute top-[72px]  right-0 w-[271px] z-50 bg-[#F7F8FD] h-screen p-5 flex flex-col gap-6 items-center justify-start"
              >
                <section
                  className="bg-white! w-full max-w-[223px] p-6 md:pr-4 
      rounded-[10px] flex flex-wrap gap-2 shrink-0 md:pb-9 lg:pb-auto"
                >
                  <Badge
                    role="button"
                    aria-pressed={selectedCategories.length === 0}
                    tabIndex={0}
                    onClick={clearAll}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === "") && clearAll()
                    }
                    variant={
                      selectedCategories.length === 0 ? "active" : "default"
                    }
                  >
                    All
                  </Badge>
                  {UI_CategoryFilter.map((category) => {
                    const active = selectedCategories.includes(
                      category.toLowerCase()
                    );
                    return (
                      <Badge
                        key={category}
                        role="button"
                        aria-pressed={active}
                        tabIndex={0}
                        onClick={() => {
                          toggleCategory(category);
                        }}
                        onKeyDown={(e) =>
                          (e.key === "Enter" || e.key === "") &&
                          toggleCategory(category)
                        }
                        variant={active ? "active" : "default"}
                      >
                        {category}
                      </Badge>
                    );
                  })}
                </section>
                <section className="bg-white flex flex-col p-6 py-4.5 rounded-[10px] gap-6 w-full! shrink-0  max-w-[223px] ">
                  <div className="flex items-center justify-between ">
                    <h3 className="text-[#3A4374]">Roadmap</h3>
                    <Link href="/roadmap">
                      <span className="text-[#4661E6] small hover:text-[#8397F8] underline transition-all duration-200">
                        View
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    {Object.entries(planned).map(([status, count]) => (
                      <div
                        key={status}
                        className={`flex w-full items-center justify-between`}
                      >
                        <p className="regular capitalize text-[#647196]">
                          <span
                            className="w-2 h-2 rounded-full  inline-block mr-2"
                            style={{ backgroundColor: getStatusColor(status) }}
                          />
                          {status}
                        </p>

                        <p className="body font-bold">{count}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </>
    </>
  );
};

export default NavBar;
