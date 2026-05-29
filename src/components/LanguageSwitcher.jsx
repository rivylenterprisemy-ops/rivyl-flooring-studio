import { useEffect, useState } from "react"

import { useLocale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function getCurrentHash() {
  return window.location.hash || ""
}

export default function LanguageSwitcher({ className }) {
  const { content, lang } = useLocale()
  const [hash, setHash] = useState(getCurrentHash)

  useEffect(() => {
    const handleHashChange = () => setHash(getCurrentHash())

    window.addEventListener("hashchange", handleHashChange)

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-1 text-xs font-semibold tracking-[0.16em] text-stone-600",
        className
      )}
      aria-label="Language switcher"
    >
      <a
        href={`/${hash}`}
        aria-label={content.nav.switchToEnglish}
        className={cn(
          "transition-colors duration-300 hover:text-stone-950",
          lang === "en" ? "text-stone-950" : "text-stone-600"
        )}
      >
        EN
      </a>
      <span className="text-stone-400">|</span>
      <a
        href={`/ms${hash}`}
        aria-label={content.nav.switchToMalay}
        className={cn(
          "transition-colors duration-300 hover:text-stone-950",
          lang === "ms" ? "text-stone-950" : "text-stone-600"
        )}
      >
        BM
      </a>
    </div>
  )
}
