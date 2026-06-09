import { Check } from "lucide-react"
import { motion } from "framer-motion"

import teamFieldCrew from "@/assets/projects/team/team-field-crew.jpg"
import teamSiteCrew from "@/assets/projects/team/team-site-crew.jpg"
import { useLocale } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectTeamSection() {
  const { content } = useLocale()
  const { projectTeam } = content

  return (
    <section className="bg-[#f4efe7] px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-26">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl border border-white/60 bg-stone-200 p-2 shadow-[0_16px_40px_rgba(39,32,24,0.08)]"
          >
            <img
              src={teamFieldCrew}
              alt={projectTeam.mainImageAlt}
              className="aspect-[4/3] w-full rounded-[1.25rem] object-cover object-[center_52%] saturate-[0.9] lg:aspect-[4/4.15]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.04 }}
            className="max-w-[43rem]"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              {projectTeam.eyebrow}
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem] lg:text-[3.05rem]">
              {projectTeam.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              {projectTeam.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectTeam.capabilities.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300/75 bg-[#f8f4ee]/72 px-4 py-2 text-sm font-medium text-stone-800 shadow-[0_8px_22px_rgba(39,32,24,0.045)]"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-stone-950 text-white">
                    <Check className="size-3" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/70 p-5 shadow-[0_10px_28px_rgba(39,32,24,0.055)]">
              <p className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-stone-950">
                {projectTeam.personnel}
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {projectTeam.note}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/70 p-2 shadow-[0_12px_34px_rgba(39,32,24,0.07)]"
        >
          <div className="overflow-hidden rounded-[1.25rem] bg-stone-200">
            <img
              src={teamSiteCrew}
              alt={projectTeam.supportImageAlt}
              className="aspect-[4/3] w-full object-cover object-[center_54%] saturate-[0.9] sm:aspect-[16/7.5]"
            />
          </div>
          <div className="px-4 pb-4 pt-5">
            <p className="text-sm font-medium leading-7 text-stone-700">
              {projectTeam.supportCaption}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
