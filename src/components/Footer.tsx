import Link from "next/link";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import Logo from "@/components/Logo";
import BackToTopButton from "@/components/BackToTopButton";

export default function Footer() {
  return (
    <footer className="bg-meltz-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo light large />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-6">
              {company.name} — manufacturing high-performance grinding media
              for the mining industry from Kalumbila, Zambia.
            </p>
            <div className="text-sm text-white/60">
              <p>{company.location.city}, {company.location.country}</p>
              <p className="mt-1">{contact.email}</p>
              <p className="mt-1">{contact.phone}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-3">
                Follow Us
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MELTZ on LinkedIn"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-meltz-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MELTZ on X (formerly Twitter)"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-meltz-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MELTZ on Facebook"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-meltz-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-4 text-white/90">
              Company
            </h4>
            <ul className="space-y-2.5">
              {navigation.footer.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-4 text-white/90">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {navigation.footer.solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-4 text-white/90">
              Joint Partners
            </h4>
            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Our joint venture companies
            </p>
            <ul className="space-y-3">
              {navigation.footer.partners.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-meltz-accent transition-colors underline-offset-4 hover:underline"
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-4 text-white/90">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {navigation.footer.connect.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/50 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
              <p className="mt-1 italic">
                Website prototype — content subject to management review and approval.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {navigation.footer.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <BackToTopButton />
          </div>
          <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-white/50">
            <span className="uppercase tracking-wider">Official Joint Venture Links:</span>
            {navigation.footer.partners.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-meltz-accent transition-colors underline underline-offset-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}