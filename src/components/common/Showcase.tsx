/*
 *   Copyright (c) 2025 Laith Alkhaddam aka Iconical or Sleepyico.
 *   All rights reserved.

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

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { projects } from "@/constants/products";

export default function Showcase() {
  return (
    <div className="max-w-md mx-auto py-10 space-y-6">
      {projects.map((project) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="rounded-2xl hover:shadow-shadow hover:translate-x-0 hover:translate-y-0">
            <CardHeader>
              <CardTitle className="text-2xl">{project.name}</CardTitle>
              <CardDescription className="text-base font-normal">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={`${feature}-${idx}`} className="font-semibold flex gap-2 items-start mb-2">
                    <Icon icon="line-md:check-all" className="mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 w-full">
                <span className="flex items-center justify-center font-semibold mb-2">
                  {project.note}
                </span>
                {project.links.demo && (
                  <Button asChild className="w-full">
                    <Link href={project.links.demo}>
                      Check out the demo
                      <Icon
                        icon="line-md:arrow-right"
                        className="ml-2 h-8 w-8"
                      />
                    </Link>
                  </Button>
                )}
                <div className="mt-4 flex gap-4">
                  <Button asChild className="w-full">
                    <a href={project.links.github} target="_blank">
                      <Icon
                        icon="line-md:github-twotone"
                        className="mr-2 h-6 w-6"
                      />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild className="w-full">
                    <a href={project.links.docker} target="_blank">
                      <Icon icon="mdi:docker" className="mr-2 h-6 w-6" /> Docker
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
