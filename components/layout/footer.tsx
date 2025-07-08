
import { Stethoscope } from "lucide-react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-stone-50">
      <div className="container max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-lime-600 via-lime-500 to-sky-400 bg-clip-text text-transparent young-serif-regular">Dentistly</span>
          <span className="text-sm text-gray-500">by</span>
          <Link
            href="https://zkript.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-lime-600 hover:text-lime-700 transition-colors"
          >
            Zkript
          </Link>
        </div>
        <p className="text-xs text-gray-600 sm:ml-4">© {currentYear} Dentistly. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
