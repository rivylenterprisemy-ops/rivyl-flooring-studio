import { useState } from "react"
import { motion } from "framer-motion"

import completedFlooringAfter from "@/assets/projects/completed-flooring-after.jpg"
import craftsmanshipProcess from "@/assets/projects/craftsmanship-process-premium-v2.jpg"
import { useLocale } from "@/lib/i18n"

export default function BeforeAfterSection() {
  const { content } = useLocale()
  const { beforeAfter } = content
  const [position, setPosition] = useState(58)

  return (
    <section className="bg-[#eee7dd] px-5 pb-18 pt-12 sm:px-8 sm:pb-22 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-18">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 max-w-[42rem]"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            {beforeAfter.eyebrow}
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem]">
            {beforeAfter.title}
          </h2>
          <p className="mt-5 max-w-[35rem] text-base leading-8 text-stone-600">
            {beforeAfter.copy}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-stone-200/60 bg-stone-200 p-2 shadow-[0_16px_36px_rgba(39,32,24,0.075)]"
        >
          <div className="relative overflow-hidden rounded-[1.25rem]">
            <img
              src={craftsmanshipProcess}
              alt={beforeAfter.processAlt}
              className="aspect-[4/5] w-full object-cover object-[62%_58%] brightness-[0.84] saturate-[0.82] sm:aspect-[16/9] sm:object-[58%_58%] lg:aspect-[16/7.5]"
            />
            <div className="absolute inset-0 bg-[#3c2f22]/16" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={completedFlooringAfter}
                alt={beforeAfter.completedAlt}
                className="aspect-[4/5] h-full w-full object-cover object-[center_76%] brightness-[1.04] saturate-[0.9] sm:aspect-[16/9] sm:object-[center_74%] lg:aspect-[16/7.5]"
              />
            </div>

            <div className="absolute inset-0 bg-[#eadfce]/8" />

            <div className="absolute left-4 top-4 rounded-full bg-[#f8f4ee]/72 px-3 py-1 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-stone-700">
              {beforeAfter.completed}
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-[#f8f4ee]/72 px-3 py-1 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-stone-700">
              {beforeAfter.inProgress}
            </div>

            <div
              className="absolute bottom-0 top-0 w-px bg-[#f8f4ee]/80"
              style={{ left: `${position}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-stone-200/80 bg-[#f6f0e8] text-stone-700 shadow-[0_6px_14px_rgba(39,32,24,0.1)] transition duration-300 hover:scale-105 hover:bg-[#fbf8f3]">
                <span className="h-3 w-px bg-stone-400/80" />
                <span className="h-3 w-px bg-stone-400/80" />
              </div>
            </div>

            <input
              type="range"
              min="8"
              max="92"
              value={position}
              aria-label={beforeAfter.rangeLabel}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="absolute inset-0 h-full w-full touch-pan-y cursor-ew-resize opacity-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
