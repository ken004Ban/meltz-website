"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import Logo from "@/components/Logo";

function NavItem({
  item,
  pathname,
}: {
  item: { label: string; href: string };
  pathname: string;
}) {
  const active = pathname === item.href;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`relative px-3 py-2 text-[13px] font-medium tracking-[0.02em] transition-colors duration-200
        after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:origin-left
        after:bg-meltz-accent after:transition-transform after:duration-200 after:ease-out
        ${
          active
            ? "text-meltz-accent after:scale-x-100"
            : "text-meltz-charcoal after:scale-x-0 hover:text-meltz-accent hover:after:scale-x-100"
        }`}
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-24">
            <Link href="/" className="flex items-center shrink-0">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.main.slice(0, 5).map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  pathname={pathname}
                />
              ))}

              <div className="mx-2 h-6 w-px bg-gray-300" aria-hidden="true" />

              {navigation.main.slice(5).map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 bg-meltz-blue text-white hover:bg-meltz-blue-dark"
              >
                REQUEST INFORMATION
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded transition-colors text-meltz-charcoal hover:bg-gray-100"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMobile}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Logo compact />
              <button
                onClick={closeMobile}
                className="p-2 text-meltz-charcoal hover:bg-gray-100 rounded"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              {navigation.main.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-meltz-blue bg-blue-50 border-l-4 border-meltz-blue"
                      : "text-meltz-charcoal hover:text-meltz-blue hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mx-6 my-3 border-t border-gray-200" aria-hidden="true" />
              {navigation.main.slice(5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-meltz-blue bg-blue-50 border-l-4 border-meltz-blue"
                      : "text-meltz-charcoal hover:text-meltz-blue hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="block w-full py-3 text-center text-sm font-semibold bg-meltz-blue text-white hover:bg-meltz-blue-dark transition-colors"
              >
                REQUEST INFORMATION
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
