import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

type StudentFeedbackProps = {
  className?: string
}

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
  avatarClassName: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "“MentorLagbe helped me find a BUET mathematics mentor within two days. The direct scheduling and verified tutor badges made the entire process safe and effortless.”",
    name: "Tanvir Ahmed",
    role: "HSC Candidate, Dhaka College",
    initials: "TA",
    avatarClassName: "from-blue-600 to-teal-500",
  },
  {
    quote:
      "“I needed focused writing and speaking practice for IELTS. My mentor provided structured feedback, and I managed to increase my overall band from 6.5 to 8.0!”",
    name: "Nusrat Jahan",
    role: "IELTS Student, Score 8.0",
    initials: "NJ",
    avatarClassName: "from-teal-500 to-emerald-500",
  },
  {
    quote:
      "“As a programming mentor, MentorLagbe Pro gave my tuition posts premium visibility. Managing applicant requests from the dashboard is extremely smooth.”",
    name: "Rakin Hasan",
    role: "Computer Science Undergrad",
    initials: "RH",
    avatarClassName: "from-blue-600 via-teal-500 to-emerald-500",
  },
]

function StarRating() {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label="Rated 5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden
          className="size-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  )
}

export function StudentFeedback({ className }: StudentFeedbackProps) {
  return (
    <section
      id="student-feedback"
      className={cn(
        "relative scroll-mt-20 overflow-hidden border-t border-border/60 bg-gradient-to-b from-blue-50/60 via-slate-50/70 to-teal-50/50",
        className
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 size-[420px] rounded-full bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-[320px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-blue-700 uppercase sm:text-xs dark:border-blue-400/25 dark:from-blue-400/10 dark:to-emerald-400/10 dark:text-blue-300">
            Student Feedback
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Thousands Across Bangladesh
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Read real stories from students and mentors accelerating their
            learning on MentorLagbe.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {TESTIMONIALS.map(
            ({ quote, name, role, initials, avatarClassName }) => (
              <figure
                key={name}
                className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/30 hover:shadow-[0_24px_50px_-32px_rgba(13,148,136,0.4)] sm:p-7"
              >
                <StarRating />

                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground italic sm:text-[0.95rem]">
                  {quote}
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 border-t border-border/60 pt-5">
                  <span
                    aria-hidden
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-semibold text-white ring-2 ring-white/70 dark:ring-white/10",
                      avatarClassName
                    )}
                  >
                    {initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            )
          )}
        </div>
      </div>
    </section>
  )
}
