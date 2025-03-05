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
import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

interface SupportCardProps {
  title: string;
  href: string;
  description: string;
  buttonTitle: string;
  icon: string;
}

export default function SupportCard({
  title,
  href,
  description,
  buttonTitle,
  icon,
}: Readonly<SupportCardProps>) {
  return (
    <Card className="flex flex-col justify-between items-center p-4 space-y-10">
      <CardTitle className="flex flex-col items-center justify-center ">
        <Icon icon={icon} width={64} />
        <h3 className="text-3xl text-center">{title}</h3>
      </CardTitle>
      <CardDescription className="text-center">{description}</CardDescription>
      <Button variant="neutral">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <h5 className="text-center">{buttonTitle}</h5>
        </a>
      </Button>
    </Card>
  );
}
