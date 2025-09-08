const NAV_LINKS = [
  { name: "Features", url: "/#features" },
  { name: "Pricing", url: "/pricing" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];
import { Button } from "@/components/ui/button";
import { Stethoscope, Menu } from "lucide-react";
import Link from "next/link";
import { UnavailableTooltip } from "../unavailable-tooltip";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <span
            className="ml-2 text-4xl font-bold young-serif-regular bg-gradient-to-r from-lime-600 via-lime-500 to-sky-400 bg-clip-text text-transparent"
          >
            Dentistly
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          {NAV_LINKS.map(link => (
            <Link
              key={link.url}
              href={link.url}
              className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="ml-6 hidden md:flex gap-2">
          {/* <Link href={`${process.env.NEXT_PUBLIC_ACCOUNT_URL}/dashboard`} target="_blank" rel="noopener noreferrer"> */}
          <UnavailableTooltip>
            <Button variant="ghost" size="sm" disabled>
              Sign in
            </Button>
          </UnavailableTooltip>
          {/* </Link> */}
          <UnavailableTooltip>
            <span tabIndex={0} className="inline-block">
              <Button size="sm" className="bg-lime-500 hover:bg-lime-600 young-serif-regular" disabled>
                Start Free
              </Button>
            </span>
          </UnavailableTooltip>
        </div>
        {/* Mobile nav menu - moved to rightmost */}
        <div className="absolute right-4 top-0 h-16 flex items-center md:hidden">
          <div className="relative">
            <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
            <label htmlFor="mobile-menu-toggle" className="cursor-pointer flex items-center h-16">
              <Menu className="h-5 w-5" />
            </label>
            <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-100 z-50 hidden peer-checked:block animate-in fade-in-0 zoom-in-95">
              <nav className="flex flex-col py-2">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-lime-50 hover:text-lime-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t my-2" />
                <Link href="https://account.dentistly.app/login" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="w-full justify-start px-4">Sign in</Button>
                </Link>
                <UnavailableTooltip>
                  <span tabIndex={0} className="inline-block w-full px-4 pt-2 pb-1">
                    <Button size="sm" className="bg-lime-500 hover:bg-lime-600 young-serif-regular w-full" disabled>
                      Start Free Trial
                    </Button>
                  </span>
                </UnavailableTooltip>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}