"use client"

import { Avatar } from "@base-ui/react/avatar"
import { Menu } from "@base-ui/react/menu"
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu as MenuIcon,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { useAuth, type AuthUser, type UserRole } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Browse Tuitions", href: "/tuitions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/#how-it-works" },
]

const ROLE_BADGE_STYLES: Record<UserRole, string> = {
  student: "bg-blue-500/15 text-blue-700 dark:text-blue-400",
  tutor: "bg-emerald-600/15 text-emerald-700 dark:text-emerald-400",
  admin: "bg-purple-600/15 text-purple-700 dark:text-purple-400",
}

const MENU_ITEM_CLASS =
  "flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm outline-none transition-colors data-[highlighted]:bg-accent"

const DESTRUCTIVE_MENU_ITEM_CLASS =
  "flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive outline-none transition-colors data-[highlighted]:bg-destructive/10"

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange)
  return () => window.removeEventListener("hashchange", onChange)
}

function getHashSnapshot() {
  return window.location.hash
}

function getServerHashSnapshot() {
  return ""
}

function RoleBadge({
  role,
  className,
}: {
  role: UserRole
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
        ROLE_BADGE_STYLES[role],
        className
      )}
    >
      {role}
    </span>
  )
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function UserAvatar({ user }: { user: AuthUser }) {
  return (
    <Avatar.Root className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground select-none">
      {user.image ? (
        <Avatar.Image
          src={user.image}
          alt={user.name}
          className="size-full object-cover"
        />
      ) : null}
      <Avatar.Fallback className="text-[11px] font-semibold">
        {getInitials(user.name)}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

function ThemeToggleButton() {
  const { setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "light" : "dark")
      }}
      className="inline-flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
    >
      {/* CSS-only swap keeps server and client markup identical. */}
      <Moon className="size-4 dark:hidden" />
      <Sun className="hidden size-4 dark:block" />
    </button>
  )
}

function navLinkClass(active: boolean, mobile: boolean) {
  return cn(
    "text-sm font-medium transition-colors",
    mobile ? "rounded-lg px-3 py-2.5" : "rounded-full px-4 py-2",
    active
      ? "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
      : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
  )
}

function UserMenu({ user }: { user: AuthUser }) {
  const { signOut } = useAuth()
  const dashboardHref = `/dashboard/${user.role}`

  return (
    <Menu.Root>
      <Menu.Trigger className="flex items-center gap-2 rounded-full py-1 pr-2 pl-1 text-sm font-medium transition-colors outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring/50">
        <UserAvatar user={user} />
        <span className="hidden flex-col items-start lg:flex">
          <span className="leading-tight">{user.name}</span>
          <RoleBadge role={user.role} className="mt-1" />
        </span>
        <ChevronDown className="size-4 text-muted-foreground" />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8}>
          <Menu.Popup className="z-50 min-w-56 rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg outline-none">
            <div className="flex flex-col gap-0.5 px-3 py-2">
              <span className="truncate text-sm font-semibold">
                {user.name}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {user.email}
              </span>
              <RoleBadge role={user.role} className="mt-1.5 self-start" />
            </div>
            <Menu.Separator className="my-1 h-px bg-border" />
            <Menu.LinkItem
              render={<Link href={dashboardHref} />}
              closeOnClick
              className={MENU_ITEM_CLASS}
            >
              <LayoutDashboard className="size-4" />
              Dashboard
            </Menu.LinkItem>
            <Menu.LinkItem
              render={<Link href="/dashboard/profile" />}
              closeOnClick
              className={MENU_ITEM_CLASS}
            >
              <UserRound className="size-4" />
              Update Profile
            </Menu.LinkItem>
            <Menu.Separator className="my-1 h-px bg-border" />
            <Menu.Item
              onClick={signOut}
              className={DESTRUCTIVE_MENU_ITEM_CLASS}
            >
              <LogOut className="size-4" />
              Sign Out
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const { user, loading, signOut } = useAuth()
  const [hashOverride, setHashOverride] = React.useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const urlHash = React.useSyncExternalStore(
    subscribeToHash,
    getHashSnapshot,
    getServerHashSnapshot
  )

  // Once the browser changes the hash itself (back/forward, in-page
  // anchors) the URL wins over the value captured from a nav click.
  React.useEffect(() => {
    function handleHashChange() {
      setHashOverride(null)
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  React.useEffect(() => {
    if (!mobileOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileOpen])

  const hash = hashOverride ?? urlHash

  function handleNavLinkClick(href: string) {
    const hashIndex = href.indexOf("#")
    setHashOverride(hashIndex === -1 ? "" : href.slice(hashIndex))
    setMobileOpen(false)
  }

  function renderNavLinks(mobile: boolean) {
    return NAV_ITEMS.map((item) => {
      const active = isNavActive(item.href, pathname, hash)
      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={() => handleNavLinkClick(item.href)}
          className={cn(navLinkClass(active, mobile), mobile && "w-full")}
        >
          {item.label}
        </Link>
      )
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="MentorLagbe home"
        >
          <Image
            src="/logo-mark.png"
            alt="MentorLagbe logo"
            width={121}
            height={109}
            priority
            className="h-9 w-auto"
          />
          <span className="text-lg font-bold tracking-tight sm:text-xl">
            <span className="text-foreground">Mentor</span>
            <span className="text-blue-600 dark:text-blue-400">Lagbe</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {renderNavLinks(false)}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggleButton />
          {loading ? (
            <div
              className="h-9 w-44 animate-pulse rounded-lg bg-muted"
              aria-hidden
            />
          ) : user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Button
                variant="outline"
                render={<Link href="/sign-in" />}
                className="h-9 px-4"
              >
                Sign In
              </Button>
              <Button
                render={<Link href="/sign-up" />}
                className="h-9 bg-blue-600 px-4 text-white hover:bg-blue-700"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggleButton />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="animate-in border-t border-border bg-background duration-200 fade-in-0 slide-in-from-top-2 md:hidden"
        >
          <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {renderNavLinks(true)}
          </nav>
          <div className="border-t border-border px-4 py-4">
            {loading ? (
              <div
                className="h-24 animate-pulse rounded-md bg-muted"
                aria-hidden
              />
            ) : user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <UserAvatar user={user} />
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-semibold">
                      {user.name}
                    </span>
                    <RoleBadge role={user.role} className="mt-1 self-start" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/dashboard/${user.role}`}
                    onClick={() => setMobileOpen(false)}
                    className={MENU_ITEM_CLASS}
                  >
                    <LayoutDashboard className="size-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setMobileOpen(false)}
                    className={MENU_ITEM_CLASS}
                  >
                    <UserRound className="size-4" />
                    Update Profile
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      signOut()
                      setMobileOpen(false)
                    }}
                    className={DESTRUCTIVE_MENU_ITEM_CLASS}
                  >
                    <LogOut className="size-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  render={<Link href="/sign-in" />}
                  className="h-9 w-full"
                >
                  Sign In
                </Button>
                <Button
                  render={<Link href="/sign-up" />}
                  className="h-9 w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

function isNavActive(href: string, pathname: string, hash: string) {
  const hashIndex = href.indexOf("#")
  const base = hashIndex === -1 ? href : href.slice(0, hashIndex) || "/"
  const anchor = hashIndex === -1 ? null : href.slice(hashIndex)

  if (pathname !== base) return false
  if (anchor !== null) return hash === anchor
  // Home is only active on "/" with no section hash.
  if (base === "/") return hash === ""
  return true
}
