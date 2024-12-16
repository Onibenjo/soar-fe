import React from "react";
import { cn } from "../../lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  title: string;
  className?: string;
  addonEnd?: React.ReactNode;
};
export const Container = ({
  children,
  title,
  className,
  addonEnd,
}: ContainerProps) => {
  return (
    <div
      className="space-y-5 grid"
      style={{
        gridTemplateRows: "auto minmax(0, 1fr)",
      }}>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        {addonEnd}
      </div>
      <div
        className={cn("bg-white rounded-3xl p-4 overflow-y-auto", className)}>
        {children}
      </div>
    </div>
  );
};
