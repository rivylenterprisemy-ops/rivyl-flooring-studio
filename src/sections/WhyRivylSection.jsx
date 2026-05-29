import {
  BadgeCheck,
  Building2,
  ClipboardList,
  MessagesSquare,
  Ruler,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"

const workmanshipItems = [
  {
    title: "Precision Tile Levelling System",
    icon: Ruler,
  },
  {
    title: "Clean & Professional Workmanship",
    icon: Sparkles,
  },
  {
    title: "Transparent Quotations",
    icon: ClipboardList,
  },
  {
    title: "Residential & Commercial Projects",
    icon: Building2,
  },
  {
    title: "Attention To Detail",
    icon: BadgeCheck,
  },
  {
    title: "Reliable Project Communication",
    icon: MessagesSquare,
  },
]

export default function WhyRivylSection() {
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
            Trust & Workmanship
          </p>
          <h2 className="max-w-[36rem] font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem]">
            Why Homeowners Choose{" "}
            <span className="inline-block">Rivyl Flooring Studio</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {workmanshipItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="flex items-center gap-4 rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/62 p-5 shadow-[0_10px_28px_rgba(39,32,24,0.055)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-stone-300/80 bg-[#f4efe7] text-stone-900">
                  <Icon className="size-4" />
                </div>
                <h3 className="text-base font-semibold text-stone-950">{item.title}</h3>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
