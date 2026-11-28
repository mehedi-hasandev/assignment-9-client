import { CircleCheckBig, GraduationCap, Star } from "lucide-react"
import { cn } from "@/lib/utils"

type MentorCardProps = {
  className?: string
}

type MentorDetail = {
  label: string
  value: string
  highlighted?: boolean
}

const MENTOR_DETAILS: MentorDetail[] = [
  { label: "Subjects", value: "Math & Physics" },
  { label: "Class Level", value: "HSC / A-Level" },
  { label: "Batch Rate", value: "৳4,500 / month", highlighted: true },
]

const RATING = "5.0"

function LiveStatusPill({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-[0_16px_40px_-24px_rgba(15,23,42,0.5)]",
        className
      )}
    >
      <span className="relative flex size-2.5" aria-hidden>
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
      </span>
      New requests live
    </span>
  )
}

export function MentorCard({ className }: MentorCardProps) {
  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-teal-500/15 to-emerald-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/15"
      />

      <article className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]">
        <header className="flex items-center gap-4">
          <span
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-teal-600 to-emerald-500 text-white shadow-lg shadow-teal-600/30"
          >
            <GraduationCap className="size-6" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-base font-bold text-foreground">
              Top Rated Mentor
            </p>
            <p className="truncate text-sm font-medium text-teal-600">
              Verified BUET Graduate
            </p>
          </div>
        </header>

        <dl className="mt-6 space-y-3.5 border-t border-border/60 pt-5">
          {MENTOR_DETAILS.map((detail) => (
            <div
              key={detail.label}
              className="flex items-baseline justify-between gap-4"
            >
              <dt className="shrink-0 text-sm text-muted-foreground">
                {detail.label}
              </dt>
              <dd
                className={cn(
                  "truncate text-right text-sm font-semibold",
                  detail.highlighted ? "text-teal-600" : "text-foreground"
                )}
              >
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

        <footer className="mt-6 flex items-center justify-between gap-4 border-t border-border/60 pt-5">
          <div className="flex items-center gap-2">
            <span
              role="img"
              aria-label={`Rated ${RATING} out of 5`}
              className="flex gap-0.5"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  aria-hidden
                  className="size-4 fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span className="text-sm font-bold text-foreground">{RATING}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <CircleCheckBig aria-hidden className="size-3.5" />
            Approved
          </span>
        </footer>
      </article>

      <LiveStatusPill className="absolute -bottom-12 left-0 sm:-left-6" />
    </div>
  )
}
