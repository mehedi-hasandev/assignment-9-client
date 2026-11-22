import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { SVGProps } from "react"
import { cn } from "@/lib/utils"

type FooterProps = {
  className?: string
}

type FooterLink = {
  label: string
  href: string
}

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Browse Tuitions", href: "/tuitions" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/#how-it-works" },
]

const BOTTOM_LINKS: FooterLink[] = [
  { label: "About", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tuitions", href: "/tuitions" },
]

const CONTACT_ITEMS = [
  {
    label: "mentorlagbe@gmail.com",
    href: "mailto:mentorlagbe@gmail.com",
    Icon: Mail,
  },
  { label: "+880-1700-000000", href: "tel:+8801700000000", Icon: Phone },
  { label: "Dhaka, Bangladesh", href: null, Icon: MapPin },
] as const

const HEADING_CLASS =
  "text-xs font-semibold tracking-wider text-white uppercase"

const LINK_HOVER_CLASS = "text-slate-400 transition-colors hover:text-teal-400"

/* ---------- Social icons (lucide has no brand glyphs) ---------- */

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.5-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.5v8h3.5z" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.53 3H20.5l-6.49 7.41L21.5 21h-5.9l-4.63-6.05L5.7 21H2.73l6.94-7.93L2.5 3h6.05l4.18 5.53L17.53 3zm-1.04 16.2h1.64L7.6 4.71H5.83l10.66 14.49z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.03-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
    </svg>
  )
}

const SOCIAL_LINKS: {
  label: string
  href: string
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
}[] = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "X (Twitter)", href: "https://x.com", Icon: XIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
]

function BrandColumn() {
  return (
    <div className="max-w-xs">
      <Link
        href="/"
        className="inline-flex items-center gap-3"
        aria-label="MentorLagbe home"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
          <Image
            src="/logo-mark.png"
            alt="MentorLagbe logo"
            width={121}
            height={109}
            className="h-8 w-auto"
          />
        </span>
        <span className="text-xl font-bold tracking-tight">
          <span className="text-white">Mentor</span>
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Lagbe
          </span>
        </span>
      </Link>

      <p className="mt-5 text-sm leading-relaxed text-slate-400">
        Find your perfect tutor or share your expertise with students across
        Bangladesh
      </p>
    </div>
  )
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={cn("border-t border-white/10 bg-[#0B1221]", className)}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ---------- Column 1: brand ---------- */}
          <BrandColumn />

          {/* ---------- Column 2: quick links ---------- */}
          <nav aria-label="Quick links">
            <h2 className={HEADING_CLASS}>Quick Links</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-block text-sm transition-colors",
                      LINK_HOVER_CLASS
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Column 3: contact ---------- */}
          <div>
            <h2 className={HEADING_CLASS}>Contact Info</h2>
            <ul className="mt-5 flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => {
                const content = (
                  <>
                    <item.Icon
                      aria-hidden
                      className="size-4 shrink-0 text-teal-400"
                    />
                    <span className="text-sm break-all text-slate-400">
                      {item.label}
                    </span>
                  </>
                )

                return (
                  <li key={item.label} className="flex items-start gap-3">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-start gap-3 transition-colors hover:text-teal-300",
                          LINK_HOVER_CLASS
                        )}
                      >
                        {content}
                      </Link>
                    ) : (
                      <span className="flex items-start gap-3">{content}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ---------- Column 4: social ---------- */}
          <div>
            <h2 className={HEADING_CLASS}>Connect With Us</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Follow our social channels for study tips, tutor highlights, and
              updates.
            </p>

            <ul className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-primary/20 hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {year} MentorLagbe. All rights reserved.</p>

          <ul className="flex items-center gap-5">
            {BOTTOM_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-teal-400",
                    LINK_HOVER_CLASS
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
