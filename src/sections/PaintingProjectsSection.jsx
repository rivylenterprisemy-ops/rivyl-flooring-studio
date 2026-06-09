import { Check } from "lucide-react"
import { motion } from "framer-motion"

import paintingApartmentProject from "@/assets/projects/painting/painting-apartment-project.jpg"
import paintingHeroFeatureWall from "@/assets/projects/painting/painting-hero-feature-wall.jpg"
import paintingPoliteknikBuildingView from "@/assets/projects/painting/painting-politeknik-building-view-clean.jpg"
import paintingRopeAccess from "@/assets/projects/painting/painting-politeknik-rope-access.jpg"
import { useLocale } from "@/lib/i18n"

const galleryImages = [
  {
    image: paintingHeroFeatureWall,
    imagePosition: "object-[center_58%]",
  },
  {
    image: paintingApartmentProject,
    imagePosition: "object-[center_56%]",
  },
  {
    image: paintingPoliteknikBuildingView,
    imagePosition: "object-[center_52%]",
  },
  {
    image: paintingRopeAccess,
    imagePosition: "object-[center_48%]",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function PaintingProjectsSection() {
  const { content } = useLocale()
  const { paintingProjects } = content
  const galleryItems = paintingProjects.items.map((item, index) => ({
    ...item,
    ...galleryImages[index],
  }))

  return (
    <section id="painting-projects" className="bg-[#eee7dd] px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-26">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div className="max-w-[40rem]">
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500"
            >
              {paintingProjects.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem] lg:text-[3.05rem]"
            >
              {paintingProjects.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-[35rem] text-base leading-8 text-stone-600"
            >
              {paintingProjects.copy}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-3 sm:grid-cols-2 lg:justify-self-end"
          >
            {paintingProjects.capabilities.map((item) => (
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
          </motion.div>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.caption}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
              className="group rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/70 p-2 shadow-[0_12px_34px_rgba(39,32,24,0.07)] transition duration-300 lg:hover:-translate-y-1 lg:hover:shadow-[0_18px_42px_rgba(39,32,24,0.1)]"
            >
              <div className="overflow-hidden rounded-[1.25rem] bg-stone-200">
                <img
                  src={item.image}
                  alt={item.caption}
                  className={`aspect-[4/3] w-full object-cover saturate-[0.9] transition duration-700 ${item.imagePosition} lg:group-hover:scale-[1.04]`}
                />
              </div>
              <div className="px-3 pb-4 pt-5">
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold leading-tight text-stone-950">
                  {item.caption}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
