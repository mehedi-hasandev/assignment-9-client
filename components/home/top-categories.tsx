import {
  ArrowUpRight,
  Atom,
  Calculator,
  Code2,
  FlaskConical,
  GraduationCap,
  Languages,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type TopCategoriesProps = {
  className?: string
}

type Category = {
  name: string
  description: string
  href: string
  Icon: LucideIcon
}

const CATEGORIES: Category[] = [
  {
    name: "Mathematics",
    description: "HSC, SSC & admission prep",
    href: "/tuitions?subject=mathematics",
    Icon: Calculator,
  },
  {
    name: "Physics",
    description: "Concepts & problem solving",
    href: "/tuitions?subject=physics",
    Icon: Atom,
  },
  {
    name: "English & IELTS",
    description: "Academic, spoken & test prep",
    href: "/tuitions?subject=english-ielts",
    Icon: Languages,
  },
  {
    name: "Programming",
    description: "Python, web development & DSA",
    href: "/tuitions?subject=programming",
    Icon: Code2,
  },
  {
    name: "Chemistry",
    description: "HSC, SSC & university foundation",
    href: "/tuitions?subject=chemistry",
    Icon: FlaskConical,
  },
  {
    name: "Admission Prep",
    description: "Varsity, medical & engineering",
    href: "/tuitions?subject=admission-prep",
    Icon: GraduationCap,
  },
]

export function TopCategories({ className }: TopCategoriesProps) {
  return (
    <section
      id="top-categories"
      className={cn(
        "relative scroll-mt-20 overflow-hidden border-t border-border/60 bg-gradient-to-b from-background via-blue-50/40 to-background",
        className
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 size-[420px] rounded-full bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 size-[320px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-blue-700 uppercase sm:text-xs dark:border-blue-400/25 dark:from-blue-400/10 dark:to-emerald-400/10 dark:text-blue-300">
            Top Categories
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Popular Subjects
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Browse the subjects students request most and connect with verified
            mentors who match your learning goals.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {CATEGORIES.map(({ name, description, href, Icon }) => (
            <Link
              key={name}
              href={href}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/30 hover:shadow-[0_24px_50px_-32px_rgba(13,148,136,0.45)]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-emerald-500/15 text-teal-600 ring-1 ring-teal-500/15 transition-transform duration-300 group-hover:scale-105 dark:from-blue-400/15 dark:via-teal-400/10 dark:to-emerald-400/15 dark:text-teal-400">
                <Icon aria-hidden className="size-6" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold tracking-tight text-foreground">
                  {name}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">
                  {description}
                </span>
              </span>

              <ArrowUpRight
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600 dark:group-hover:text-teal-400"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
