"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) setisRouting(true);
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div
      style={{ left: "20%" }}
      className=" absolute py-7 z-[50] -bottom-20 w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white"
    >
        {isRouting && <Transition/>}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              nav.name ? "text-purple-800" : "text-white"
            } `}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
