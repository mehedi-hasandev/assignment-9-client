import { ArrowRight, Check, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PricingProps = {
  className?: string
}

type PlanFeature = {
  label: string
  /** Emphasized features render bold (e.g. the lead PRO benefit). */
  highlight?: boolean
}

const STARTER_FEATURES: PlanFeature[] = [
  { label: "Up to 2 tuition posts (Tutor)" },
  { label: "Up to 5 tuition bookmarks (Student)" },
  { label: "Direct tuition applications" },
  { label: "Basic profile & search filters" },
]

const PRO_FEATURES: PlanFeature[] = [
  { label: "Unlimited tuition posts & bookmarks", highlight: true },
  { label: "Golden PRO verification badge" },
  { label: "Priority listing in search & category filters" },
  { label: "Priority applicant notifications & reviews" },
]

const SECTION_GRADIENT =
  "bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500"

function FeatureList({ features }: { features: PlanFeature[] }) {
  return (
    <ul className="mt-7 flex flex-col gap-3.5">
      {features.map((feature) => (
        <li
          key={feature.label}
          className={cn(
            "flex items-start gap-3 text-sm sm:text-[0.95rem]",
            feature.highlight
              ? "font-semibold text-foreground"
              : "text-muted-foreground"
          )}
        >
          <span
            aria-hidden
            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400"
          >
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          {feature.label}
        </li>
      ))}
    </ul>
  )
}

function CardBadge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  )
}

function StarterCard() {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.35)] sm:p-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          Starter Plan
        </h3>
        <CardBadge className="border-transparent bg-muted text-muted-foreground">
          Free Forever
        </CardBadge>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
        Perfect for students and tutors looking to test the platform.
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-5xl font-extrabold tracking-tight text-foreground">
          $0
        </span>
        <span className="text-base font-medium text-muted-foreground">
          / month
        </span>
      </div>

      <FeatureList features={STARTER_FEATURES} />

      <footer className="mt-auto pt-8">
        <div className="border-t border-border/70 pt-6">
          <Button
            variant="outline"
            render={<Link href="/sign-up" />}
            className="h-12 w-full rounded-xl border-border/80 text-sm font-semibold"
          >
            Get Started Free
          </Button>
        </div>
      </footer>
    </article>
  )
}

function ProCard() {
  return (
    <article className="relative flex h-full flex-col rounded-3xl border-2 border-teal-500/70 bg-card p-6 shadow-[0_30px_70px_-35px_rgba(16,185,129,0.55)] sm:p-8">
      {/* Floating recommendation pill overlapping the top border. */}
      <span
        className={cn(
          "absolute -top-4 right-5 z-10 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg shadow-teal-600/30",
          SECTION_GRADIENT
        )}
      >
        <Sparkles aria-hidden className="size-3.5" />
        RECOMMENDED
      </span>

      <header className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          MentorLagbe PRO
        </h3>
        <CardBadge className="border-amber-300/60 bg-amber-100 text-amber-700 dark:border-amber-400/40 dark:bg-amber-400/15 dark:text-amber-400">
          PRO Badge
        </CardBadge>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
        Unlimited reach, verified credential badges, and priority matching.
      </p>

      <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
        <div className="flex flex-col">
          <span
            className={cn(
              "bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl",
              SECTION_GRADIENT
            )}
          >
            $15
          </span>
          <span className="mt-1 text-xs font-medium text-muted-foreground">
            /mo for Tutors
          </span>
        </div>

        <span className="pb-4 text-sm font-medium text-muted-foreground">
          or
        </span>

        <div className="flex flex-col">
          <span className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            $10
          </span>
          <span className="mt-1 text-xs font-medium text-muted-foreground">
            /mo for Students
          </span>
        </div>
      </div>

      <FeatureList features={PRO_FEATURES} />

      <footer className="mt-auto pt-8">
        <div className="border-t border-border/70 pt-6">
          <Button
            render={<Link href="/pricing" />}
            className={cn(
              "h-12 w-full gap-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:opacity-90 hover:shadow-xl",
              SECTION_GRADIENT
            )}
          >
            Upgrade to Pro
            <ArrowRight aria-hidden className="size-4" />
          </Button>
        </div>
      </footer>
    </article>
  )
}

export function Pricing({ className }: PricingProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Ambient blue → emerald glow wash. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[620px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/15 via-teal-500/10 to-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* ---------- Section header ---------- */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-teal-500/25 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-teal-700 uppercase dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
            Pricing
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Choose Your Plan
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Simple, transparent plans designed for committed students and
            ambitious academic tutors.
          </p>
        </div>

        {/* ---------- Plans grid ---------- */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16 lg:gap-10">
          <StarterCard />
          <ProCard />
        </div>
      </div>
    </section>
  )
}
