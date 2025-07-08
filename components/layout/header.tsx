import { Button } from "@/components/ui/button";
import { Stethoscope, Menu } from "lucide-react";
import Link from "next/link";
import { UnavailableTooltip } from "../unavailable-tooltip";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Stethoscope className="h-8 w-8 text-lime-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Dentistly</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="/#features" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="ml-6 hidden md:flex gap-2">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <UnavailableTooltip>
            <span tabIndex={0} className="inline-block">
              <Button size="sm" className="bg-lime-500 hover:bg-lime-600 young-serif-regular" disabled>
                Start Free
              </Button>
            </span>
          </UnavailableTooltip>
        </div>
        <Button variant="ghost" size="sm" className="ml-4 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}