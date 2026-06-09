import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { useLocale } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function TileTrustSection() {
  const { content } = useLocale()
  const { tileTrust } = content

  return (
    <section className="bg-[#f4efe7] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-center"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500"
            >
              {tileTrust.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-stone-950 sm:text-[2.35rem]"
            >
              {tileTrust.title}
            </motion.h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tileTrust.items.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.03 }}
                className="flex items-center gap-3 rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/70 p-4 text-sm font-semibold text-stone-900 shadow-[0_8px_22px_rgba(39,32,24,0.045)]"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-stone-950 text-white">
                  <Check className="size-3.5" />
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
