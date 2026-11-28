"use client"

import { ArrowRight, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type HeroSearchProps = {
  className?: string
}

const SEARCH_PLACEHOLDER = "Search by subject, class level, or keyword..."

export function HeroSearch({ className }: HeroSearchProps) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    router.push(
      trimmed ? `/tuitions?q=${encodeURIComponent(trimmed)}` : "/tuitions"
    )
  }

  return (
    <form
      role="search"
      aria-label="Search tuitions"
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full flex-col gap-3 rounded-2xl border border-border/70 bg-card p-3 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] sm:flex-row sm:items-center sm:gap-2",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3 px-2 sm:px-3">
        <Search className="size-5 shrink-0 text-teal-600" aria-hidden />
        <label htmlFor="hero-search-input" className="sr-only">
          Search tuitions
        </label>
        <input
          id="hero-search-input"
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={SEARCH_PLACEHOLDER}
          className="h-11 w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="h-12 w-full gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-500 px-6 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:from-blue-700 hover:via-teal-700 hover:to-emerald-600 sm:w-auto"
      >
        Search Tuitions
        <ArrowRight aria-hidden />
      </Button>
    </form>
  )
}
