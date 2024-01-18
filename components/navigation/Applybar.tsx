"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

const Applybar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="fixed left-0 bottom-0 w-screen bg-white border-t border-border">
      <div className="max-w-screen-md flex flex-row justify-between gap-2 items-center px-12 py-3 mx-auto">
        <button
          onClick={handleClick}
          className={cn("px-4 py-3 border rounded-xl ", "text-black")}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_286_698)">
              <path
                d="M15.0709 18.2959L9.92807 13.1531L4.78522 18.2959V2.86738C4.78522 2.52638 4.92068 2.19936 5.16179 1.95824C5.40291 1.71712 5.72993 1.58167 6.07093 1.58167H13.7852C14.1262 1.58167 14.4533 1.71712 14.6943 1.95824C14.9354 2.19936 15.0709 2.52638 15.0709 2.86738V18.2959Z"
                stroke="currentColor"
                fill={active ? "currentColor" : "none"}
              />
            </g>
          </svg>
        </button>
        <Link
          href="/my"
          className="w-full flex justify-center items-center self-stretch text-white font-bold rounded-xl bg-primary"
        >
          Request
        </Link>
      </div>
    </nav>
  );
};

export default Applybar;
