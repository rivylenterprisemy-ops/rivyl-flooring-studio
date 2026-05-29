import { ArrowRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-[#f4efe7] px-5 pb-18 pt-10 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/60 bg-stone-950 px-6 py-12 text-white shadow-[0_28px_75px_rgba(39,32,24,0.16)] sm:px-10 sm:py-14 lg:px-14"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-300">
              Start Your Flooring Upgrade
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight sm:text-5xl">
              Ready to upgrade your flooring?
            </h2>
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-stone-300">
              Share your floor area, photos and location. We&apos;ll guide you with
              tile selection, scope and quotation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button
              asChild
              className="h-12 rounded-full bg-white px-7 text-sm text-stone-950 shadow-[0_16px_36px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-stone-100"
            >
              <a
                href="https://wa.me/?text=Hi%20Rivyl%20Flooring%20Studio%2C%20I%27d%20like%20a%20flooring%20quotation."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-2 size-4" />
                Send Floor Photos
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/25 bg-transparent px-7 text-sm text-white shadow-none transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              <a href="#portfolio">
                See Project Work
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
