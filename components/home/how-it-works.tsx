import { Award, Search, UserPlus, Zap, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type HowItWorksProps = {
  className?: string
}

type Step = {
  number: string
  title: string
  description: string
  Icon: LucideIcon
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up as a Student to find mentors or as a Tutor to offer your academic expertise.",
    Icon: UserPlus,
  },
  {
    number: "02",
    title: "Browse & Discover",
    description:
      "Explore verified tuitions filtered by subject, class level, location, and learning mode.",
    Icon: Search,
  },
  {
    number: "03",
    title: "Apply & Connect",
    description:
      "Submit applications with your preferred schedule and communicate directly with tutors.",
    Icon: Zap,
  },
  {
    number: "04",
    title: "Start Learning",
    description:
      "Begin your personalized tuition sessions and achieve your academic goals with confidence.",
    Icon: Award,
  },
]

export function HowItWorks({ className }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className={cn(
        "relative scroll-mt-20 overflow-hidden border-t border-border/60 bg-gradient-to-b from-blue-50/50 via-background to-teal-50/40",
        className
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 size-[420px] rounded-full bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-[320px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-blue-700 uppercase sm:text-xs dark:border-blue-400/25 dark:from-blue-400/10 dark:to-emerald-400/10 dark:text-blue-300">
            How It Works
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start Learning in 4 Easy Steps
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From profile setup to your first live session, we make connecting
            with verified mentors seamless.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:mt-14 xl:grid-cols-4 xl:gap-6">
          {STEPS.map(({ number, title, description, Icon }) => (
            <li
              key={number}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_24px_55px_-30px_rgba(13,148,136,0.4)]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-400/25 dark:bg-teal-400/10 dark:text-teal-300">
                  Step {number}
                </span>

                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-emerald-500/15 text-teal-600 ring-1 ring-teal-500/15 dark:from-blue-400/15 dark:via-teal-400/10 dark:to-emerald-400/15 dark:text-teal-400">
                  <Icon aria-hidden className="size-5" />
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
                {title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
