"use client"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode, useState, useRef, useEffect } from "react";

interface UnavailableTooltipProps {
  children: ReactNode;
  message?: string;
}

export function UnavailableTooltip({ children, message = "Currently unavailable. Please check back soon!" }: UnavailableTooltipProps) {
  const triggerRef = useRef<HTMLSpanElement>(null);

  // Helper to detect mobile (simple: width <= 768px)
  const isMobile = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 768px)").matches;

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      alert(message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isMobile && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      alert(message);
    }
  };

  if (isMobile) {
    return (
      <span
        ref={triggerRef}
        tabIndex={0}
        style={{ cursor: "not-allowed" }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {children}
      </span>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          ref={triggerRef}
          tabIndex={0}
          style={{ cursor: "not-allowed" }}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent>{message}</TooltipContent>
    </Tooltip>
  );
}
