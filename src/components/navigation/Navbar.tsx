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
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      name: "Who Let Us Cook?",
      path: "#about",
      icon: "line-md:question-circle-twotone",
    },
    {
      name: "Fund Our Oopses",
      path: "#tip",
      icon: "line-md:heart-twotone-half-filled",
    },
    {
      name: "Discover Our Oopses",
      path: "#projects",
      icon: "line-md:check-list-3-twotone",
    },
  ];

  const socialItems = [
    {
      name: "Github",
      icon: "line-md:github-twotone",
      path: "https://github.com/OopsApps",
    },
    {
      name: "Twitter",
      icon: "line-md:twitter-x-alt",
      path: "https://x.com/OopsAppsDev",
    },
  ];

  const handleClick = (link: string) => {
    if (link.startsWith("http")) return window.open(link, "_blank");
    return router.push(`/${link}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className={cn("fixed top-0 left-0 z-50 mx-auto p-4 w-full")}>
      <div className="flex justify-between items-center  relative p-2 border-border border-2 rounded-lg bg-main">
        <div
          onClick={() => handleClick("/")}
          className="h-8 md:h-12 w-8 md:w-12 flex gap-2 items-center cursor-pointer"
        >
          <Image
            src="/logo-512x512.png"
            alt="OopsApps Logo"
            width={512}
            height={512}
          />
          <span className="text-base md:text-3xl font-semibold flex">
            OopsApps
            <p className="text-base md:text-3xl font-semibold text-purple-900">
              .tech
            </p>
          </span>
        </div>
        <div className="hidden md:flex justify-between items-center gap-2">
          {menuItems.map((item, idx) => (
            <Button
              key={`${item}-${idx}`}
              onClick={() => handleClick(item.path)}
              className="flex items-center gap-2 active:scale-95"
            >
              <p className="min-h-4 min-w-4">
                <Icon icon={item.icon} />
              </p>
              {item.name}
            </Button>
          ))}
          <div className="flex gap-2 ml-6">
            {socialItems.map((item, idx) => (
              <Button
                key={`${item}-${idx}`}
                onClick={() => handleClick(item.path)}
                className="flex items-center gap-2 active:scale-95 h-10 w-10"
              >
                <Icon icon={item.icon} />
              </Button>
            ))}
          </div>
        </div>
        <div className="relative flex md:hidden" ref={menuRef}>
          <Button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <Icon
                icon="line-md:menu-to-close-transition"
                className="h-6 w-6"
              />
            ) : (
              <Icon icon="line-md:menu" className="h-6 w-6" />
            )}
          </Button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -right-2 top-14 w-80 rounded-2xl bg-bg border-border border-2 p-4 shadow-lg flex flex-col gap-4"
            >
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Button
                      className="w-full text-left text-lg hover:bg-gray-100"
                      onClick={() => handleClick(item.path)}
                    >
                      <Icon icon={item.icon} className="h-8 w-8" />

                      {item.name}
                    </Button>
                  </li>
                ))}
              </ul>
              <ul className="flex justify-evenly">
                {socialItems.map((item) => (
                  <li key={item.path}>
                    <Button
                      className="w-full text-left text-lg hover:bg-gray-100"
                      onClick={() => handleClick(item.path)}
                    >
                      {item.name}
                      <Icon icon={item.icon} className="h-8 w-8" />
                    </Button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
