import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import LanguageSwitcher from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { localizeHash, useLocale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { content, path, whatsappUrl } = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = content.nav.items

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-stone-200/60 bg-[#f4efe7]/86 shadow-[0_14px_45px_rgba(39,32,24,0.06)] backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 xl:px-0">
        <a
          href={localizeHash("#home", path)}
          className="min-w-0 truncate pr-3 font-['Playfair_Display'] text-[1.15rem] font-normal tracking-wide text-stone-950 transition-colors duration-300 hover:text-stone-700 sm:text-[1.32rem] lg:pr-0"
          aria-label={content.nav.homeAria}
        >
          Rivyl Flooring Studio
        </a>

        <div className="hidden items-center justify-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={localizeHash(item.href, path)}
              className="text-sm font-medium tracking-wide text-stone-700 transition-colors duration-300 hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <LanguageSwitcher />
          <Button
            asChild
            className="h-11 rounded-full bg-stone-950 px-6 text-sm text-white shadow-[0_14px_30px_rgba(28,25,23,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[0_18px_38px_rgba(28,25,23,0.18)]"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {content.nav.quotation}
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-end gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-stone-300/70 bg-white/55 text-stone-950 shadow-sm backdrop-blur-md transition duration-300 hover:bg-white"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? content.nav.closeMenu : content.nav.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-stone-200/70 bg-[#f4efe7]/95 px-5 pb-6 pt-3 shadow-[0_22px_55px_rgba(39,32,24,0.1)] backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={localizeHash(item.href, path)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition duration-300 hover:bg-white/65 hover:text-stone-950"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Button
                asChild
                className="mt-3 h-12 rounded-full bg-stone-950 text-sm text-white shadow-[0_16px_32px_rgba(28,25,23,0.14)] transition duration-300 hover:bg-stone-800"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {content.nav.quotation}
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
