import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface UnavailableTooltipProps {
  children: ReactNode;
  message?: string;
}

export function UnavailableTooltip({ children, message = "Currently unavailable. Please check back soon!" }: UnavailableTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{message}</TooltipContent>
    </Tooltip>
  );
}
