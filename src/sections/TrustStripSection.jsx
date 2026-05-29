import { motion } from "framer-motion"

import { useLocale } from "@/lib/i18n"

export default function TrustStripSection() {
  const { content } = useLocale()

  return (
    <section className="bg-[#f4efe7] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-stone-200/70 bg-stone-200/70 shadow-[0_12px_30px_rgba(39,32,24,0.05)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {content.trust.map((item) => (
          <div key={item} className="bg-[#f8f4ee] px-5 py-4 text-sm font-medium text-stone-800">
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
