import { ClipboardCheck, Grid2X2, Layers3, Paintbrush, PlugZap, Ruler } from "lucide-react"
import { motion } from "framer-motion"

import livingAngle from "@/assets/projects/living-angle.jpg"
import { useLocale } from "@/lib/i18n"

const serviceIcons = [
  {
    icon: Grid2X2,
  },
  {
    icon: Layers3,
  },
  {
    icon: Ruler,
  },
  {
    icon: ClipboardCheck,
  },
  {
    icon: Paintbrush,
  },
  {
    icon: PlugZap,
  },
]

export default function ServicesSection() {
  const { content } = useLocale()
  const { services } = content

  return (
    <section id="services" className="scroll-mt-[100px] bg-[#eee7dd] px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-26">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[34rem]"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              {services.eyebrow}
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem]">
              {services.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="relative hidden overflow-hidden rounded-3xl border border-white/55 bg-stone-200 p-2 shadow-[0_16px_40px_rgba(39,32,24,0.08)] lg:block"
          >
            <img
              src={livingAngle}
              alt={services.imageAlt}
              className="h-48 w-full rounded-[1.25rem] object-cover object-[center_76%] saturate-[0.88]"
            />
            <div className="absolute inset-2 rounded-[1.25rem] bg-[#eadfce]/12" />
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index]?.icon ?? ClipboardCheck

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
                className="flex min-h-[16rem] flex-col rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/66 p-5 shadow-[0_10px_28px_rgba(39,32,24,0.055)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fbf8f3] hover:shadow-[0_14px_34px_rgba(39,32,24,0.075)]"
              >
                <div className="mb-7 flex size-10 items-center justify-center rounded-full border border-stone-300/80 bg-[#f4efe7] text-stone-900">
                  <Icon className="size-[1.05rem]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-[1.35rem] font-semibold leading-tight text-stone-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{service.description}</p>
                <div className="mt-auto pt-6">
                  <span className="block h-px w-10 bg-stone-300/80" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
