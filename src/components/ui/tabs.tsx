"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-x-auto scrollbar-hide">
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex items-center  w-max min-w-full border-b border-gray-200",
        "whitespace-nowrap",
        className
      )}
      {...props}
    />
  </div>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center px-4 py-3 text-base font-normal transition-all",
      "text-gray-600 hover:text-gray-900",
      "data-[state=active]:text-black data-[state=active]:font-medium",
      "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
      "after:bg-transparent after:transition-colors",
      "data-[state=active]:after:bg-blue-600",
      "flex-shrink-0", // Prevent tab text from shrinking
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2", className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
