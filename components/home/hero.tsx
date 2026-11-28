import { Sparkles } from "lucide-react"
import { HeroSearch } from "@/components/home/hero-search"
import { MentorCard } from "@/components/home/mentor-card"
import { cn } from "@/lib/utils"

type HeroProps = {
  className?: string
}

type HeroStat = {
  value: string
  label: string
}

const HERO_STATS: HeroStat[] = [
  { value: "2,500+", label: "Verified Tutors" },
  { value: "15,000+", label: "Active Students" },
  { value: "98%", label: "Satisfaction" },
]

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-24 size-[560px] rounded-full bg-gradient-to-br from-blue-500/20 via-teal-500/15 to-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-56 -left-24 size-[460px] rounded-full bg-gradient-to-tr from-emerald-500/15 to-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex min-w-0 flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-700 uppercase dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300">
            <Sparkles aria-hidden className="size-3.5" />
            Bangladesh&apos;s Premier Tuition Marketplace
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find Your Ideal Tutor or{" "}
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Mentorship Batch
            </span>{" "}
            Today
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Connect with verified tutors for personalized learning in
            Mathematics, Physics, Programming, IELTS &amp; more across
            Bangladesh.
          </p>

          <HeroSearch className="mt-8 max-w-xl" />

          <div className="mt-10 grid w-full max-w-xl grid-cols-3 gap-4 border-t border-border/70 pt-7">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex min-w-0 flex-col gap-1">
                <span className="text-2xl font-bold tracking-tight text-foreground tabular-nums sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <MentorCard />
        </div>
      </div>
    </section>
  )
}
