import {
  BadgeCheck,
  Building2,
  ClipboardList,
  MessagesSquare,
  Ruler,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"

import { useLocale } from "@/lib/i18n"

const workmanshipIcons = [
  {
    icon: Ruler,
  },
  {
    icon: Sparkles,
  },
  {
    icon: ClipboardList,
  },
  {
    icon: Building2,
  },
  {
    icon: BadgeCheck,
  },
  {
    icon: MessagesSquare,
  },
]

export default function WhyRivylSection() {
  const { content } = useLocale()
  const { why } = content

  return (
    <section className="bg-[#f4efe7] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[42rem]"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            {why.eyebrow}
          </p>
          <h2 className="max-w-[36rem] font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem]">
            {why.titlePrefix}{" "}
            <span className="inline-block">{why.brand}</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {why.items.map((item, index) => {
            const Icon = workmanshipIcons[index].icon

            return (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="flex items-center gap-4 rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/62 p-5 shadow-[0_10px_28px_rgba(39,32,24,0.055)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-stone-300/80 bg-[#f4efe7] text-stone-900">
                  <Icon className="size-4" />
                </div>
                <h3 className="text-base font-semibold text-stone-950">{item}</h3>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
