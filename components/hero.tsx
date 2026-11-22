import {
  ArrowRight,
  CircleCheck,
  GraduationCap,
  Search,
  Sparkles,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const STATS = [
  { value: "2,500+", label: "Verified Tutors" },
  { value: "15,000+", label: "Active Students" },
  { value: "98%", label: "Satisfaction" },
]

const MENTOR_DETAILS = [
  { label: "Subjects", value: "Math & Physics", accent: false },
  { label: "Class Level", value: "HSC / A-Level", accent: false },
  { label: "Batch Rate", value: "৳4,500 / month", accent: true },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Soft blue-green ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 size-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,184,160,0.18),transparent_65%)]" />
        <div className="absolute top-24 -left-32 size-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.10),transparent_65%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-700 uppercase dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300">
            <Sparkles className="size-3.5" />
            {"BANGLADESH'S PREMIER TUITION MARKETPLACE"}
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Find Your Ideal Tutor or{" "}
            <span className="bg-linear-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Mentorship Batch
            </span>{" "}
            Today
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Connect with verified tutors for personalized learning in
            Mathematics, Physics, Programming, IELTS &amp; more across
            Bangladesh.
          </p>

          <form action="/tuitions" method="get" className="w-full max-w-xl">
            <div className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-card p-3 shadow-[0_24px_60px_-32px_rgba(15,118,110,0.45)] sm:flex-row sm:items-center sm:gap-2">
              <div className="flex flex-1 items-center gap-2 px-2">
                <Search
                  className="size-5 shrink-0 text-teal-600 dark:text-teal-400"
                  aria-hidden
                />
                <input
                  type="search"
                  name="q"
                  placeholder="Search by subject, class level, or keyword..."
                  className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                className="h-11 gap-2 rounded-xl bg-linear-to-r from-blue-600 to-teal-600 px-5 text-white shadow-lg shadow-teal-600/25 hover:from-blue-700 hover:to-teal-700"
              >
                Search Tuitions
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>

          <div className="grid w-full max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex items-center justify-center pb-10 lg:pb-0">
          {/* Radial glow + ring behind the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 size-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,184,160,0.16),transparent_65%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 size-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/40 dark:border-teal-500/20"
          />

          <div className="relative w-full max-w-sm rounded-3xl border border-border/70 bg-card p-6 shadow-[0_24px_60px_-28px_rgba(15,118,110,0.45)]">
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-600/30">
                <GraduationCap className="size-7" />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-bold text-foreground">
                  Top Rated Mentor
                </p>
                <p className="text-sm font-medium text-teal-600 italic dark:text-teal-400">
                  Verified BUET Graduate
                </p>
              </div>
            </div>

            <dl className="mt-6 border-t border-border/70">
              {MENTOR_DETAILS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-border/70 py-3 last:border-b-0"
                >
                  <dt className="text-sm text-muted-foreground">{row.label}</dt>
                  <dd
                    className={cn(
                      "text-right text-sm font-semibold",
                      row.accent
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-foreground"
                    )}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-border/70 pt-4">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1 text-sm font-bold text-foreground">
                  5.0
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300">
                <CircleCheck className="size-3.5" />
                Approved
              </span>
            </div>
          </div>

          {/* Floating live-status pill */}
          <div className="absolute -bottom-5 left-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-lg">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            New requests live
          </div>
        </div>
      </div>
    </section>
  )
}
