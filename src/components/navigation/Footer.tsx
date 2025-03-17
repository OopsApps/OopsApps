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

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-secondaryBlack text-main py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">OopsApps</h2>
          <p className="text-sm text-main mt-1">
            Creating problems for solutions™
          </p>
        </div>

        <div className="flex space-x-5 mt-6 md:mt-0">
          <a
            href="https://github.com/oopsapps"
            target="_blank"
            className="hover:text-white transition"
          >
            <Icon icon="line-md:github-twotone" className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/oopsappsdev"
            target="_blank"
            className="hover:text-white transition"
          >
            <Icon icon="line-md:twitter-x-alt" className="h-5 w-5" />
          </a>
          <a
            href="mailto:support@oopsapps.tech"
            className="hover:text-white transition"
          >
            <Icon icon="line-md:email-alt-twotone" className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-main">
        <p>
          © {new Date().getFullYear()} OopsApps. Built with
          <Icon
            icon="line-md:heart-twotone-half-filled"
            className="inline-block h-4 w-4 text-red-500"
          />
          by Laith.
        </p>
      </div>
    </footer>
  );
}
