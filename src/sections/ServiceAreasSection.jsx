import { motion } from "framer-motion"

const serviceAreas = [
  "Johor Bahru",
  "Skudai",
  "Taman Universiti",
  "Iskandar Puteri",
  "Bukit Indah",
  "Kulai",
  "Gelang Patah",
  "Ulu Tiram",
]

export default function ServiceAreasSection() {
  return (
    <section className="bg-[#eee7dd] px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-[40rem]"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            Service Areas
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem]">
            Serving Johor Bahru &amp; Surrounding Areas
          </h2>
          <p className="mt-5 max-w-[36rem] text-base leading-8 text-stone-600">
            We provide flooring replacement, tile installation and surface
            renewal services across Johor Bahru and nearby residential areas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="flex flex-wrap gap-3 lg:justify-end"
        >
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-stone-300/75 bg-[#f8f4ee]/72 px-5 py-3 text-sm font-medium text-stone-800 shadow-[0_8px_22px_rgba(39,32,24,0.045)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fbf8f3] hover:text-stone-950"
            >
              {area}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
