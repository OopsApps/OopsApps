/*
 *   Copyright (c) 2025 Laith Alkhaddam aka Iconical or Sleepyico.
 *   All rights reserved.
5
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const router = useRouter();

  const handleClick = (link: string) => {
    if (link.startsWith("http")) return window.open(link, "_blank");
    return router.push(`/${link}`);
  };

  return (
    <nav className={cn("w-full pt-[1%] fixed top-0 left-0 z-50")}>
      <div className="flex justify-between items-center max-w-[98%] mx-auto px-6 relative p-2 border-border border-2 rounded-lg bg-main">
        <div
          onClick={() => handleClick("/")}
          className="h-12 w-12 flex gap-2 items-center cursor-pointer"
        >
          <Image
            src="/logo-512x512.png"
            alt="OopsApps Logo"
            width={512}
            height={512}
          />
          <span className="text-3xl font-semibold flex">
            OopsApps
            <p className="text-3xl font-semibold text-purple-900">.tech</p>
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button
            onClick={() => handleClick("#about")}
            className="flex items-center gap-2 active:scale-95"
          >
            <p className="min-h-4 min-w-4">
              <Icon icon="line-md:question-circle-twotone" />
            </p>
            Who Let Us Cook?
          </Button>
          <Button
            onClick={() => handleClick("#tip")}
            className="flex items-center gap-2 active:scale-95"
          >
            <p className="min-h-4 min-w-4">
              <Icon icon="line-md:heart-twotone-half-filled" />
            </p>
            Fund Our Oopses
          </Button>
          <Button
            onClick={() => handleClick("https://github.com/OopsApps")}
            className="flex items-center gap-2 active:scale-95 ml-8 h-10 w-10"
          >
            <Icon icon="line-md:github-twotone" />
          </Button>
          <Button
            onClick={() => handleClick("https://x.com/OopsAppsDev")}
            className="flex items-center gap-2 active:scale-95 h-10 w-10"
          >
            <Icon icon="line-md:twitter-x-alt" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
