"use client"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode, useState, useRef, useEffect } from "react";

interface UnavailableTooltipProps {
  children: ReactNode;
  message?: string;
}

export function UnavailableTooltip({ children, message = "Currently unavailable. Please check back soon!" }: UnavailableTooltipProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);

  // Close tooltip on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <span
          ref={triggerRef}
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          }}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent>{message}</TooltipContent>
    </Tooltip>
  );
}
