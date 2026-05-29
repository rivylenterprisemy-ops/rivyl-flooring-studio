import { useMemo, useState } from "react"
import { motion } from "framer-motion"

import corridorFlooring from "@/assets/projects/corridor-flooring.jpg"
import flooringDetail from "@/assets/projects/flooring-detail.jpg"
import heroFlooring from "@/assets/projects/hero-flooring.jpg"
import livingAngle from "@/assets/projects/living-angle.jpg"

const filters = ["All Projects", "Living Room", "Kitchen", "Corridor", "Commercial"]

const projects = [
  {
    title: "Apartment Flooring Transformation",
    location: "Taman Universiti, Johor Bahru",
    tileType: "600x600 Marble-Look Porcelain",
    scope: "Living Room + Corridor",
    status: "Completed",
    category: "Living Room",
    image: heroFlooring,
    imagePosition: "object-[center_74%]",
  },
  {
    title: "Corridor Tile Renewal",
    location: "Johor Bahru Apartment",
    tileType: "600x600 Light Porcelain Tile",
    scope: "Corridor + Threshold Areas",
    status: "Completed",
    category: "Corridor",
    image: corridorFlooring,
    imagePosition: "object-[center_72%]",
  },
  {
    title: "Kitchen Surface Continuation",
    location: "Johor Bahru Home",
    tileType: "Marble-Look Porcelain Finish",
    scope: "Kitchen Entry + Living Edge",
    status: "Completed",
    category: "Kitchen",
    image: livingAngle,
    imagePosition: "object-[center_76%]",
  },
  {
    title: "Commercial Floor Finish",
    location: "Johor Bahru",
    tileType: "Polished Porcelain Surface",
    scope: "Open Floor Area",
    status: "Completed",
    category: "Commercial",
    image: flooringDetail,
    imagePosition: "object-[center_74%]",
  },
]

const proofItems = [
  {
    label: "Completed Projects",
    value: "Real flooring work",
  },
  {
    label: "Satisfied Clients",
    value: "Direct homeowner handovers",
  },
  {
    label: "Years Experience",
    value: "Practical renovation sites",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturedProjectSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="portfolio" className="bg-[#f4efe7] px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-26">
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
              Project Portfolio
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-950 sm:text-[2.9rem] lg:text-[3.05rem]"
            >
              Completed flooring projects with practical finishing detail
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-[35rem] text-base leading-8 text-stone-600"
            >
              A closer look at real apartment flooring work, tile selection,
              alignment and finishing scopes completed around Johor Bahru.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-px overflow-hidden rounded-3xl border border-stone-200/70 bg-stone-200/70 shadow-[0_10px_28px_rgba(39,32,24,0.05)] sm:grid-cols-3"
          >
            {proofItems.map((item) => (
              <div key={item.label} className="bg-[#f8f4ee] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-stone-800">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "border-stone-950 bg-stone-950 text-white"
                    : "border-stone-300/80 bg-transparent text-stone-700 hover:border-stone-500 hover:text-stone-950"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
              className="group rounded-3xl border border-stone-200/70 bg-[#f8f4ee]/70 p-2 shadow-[0_12px_34px_rgba(39,32,24,0.07)] transition duration-300 lg:hover:-translate-y-1 lg:hover:shadow-[0_18px_42px_rgba(39,32,24,0.1)]"
            >
              <div className="overflow-hidden rounded-[1.25rem] bg-stone-200">
                <img
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  className={`aspect-[4/3] w-full object-cover saturate-[0.9] transition duration-700 ${project.imagePosition} lg:group-hover:scale-[1.04]`}
                />
              </div>

              <div className="px-3 pb-4 pt-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                    {project.location}
                  </p>
                  <span className="shrink-0 rounded-full border border-stone-300/80 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-stone-700">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] text-2xl font-semibold leading-tight text-stone-950">
                  {project.title}
                </h3>

                <dl className="mt-5 grid gap-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                      Tile Type
                    </dt>
                    <dd className="mt-1 text-stone-800">{project.tileType}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                      Scope
                    </dt>
                    <dd className="mt-1 text-stone-800">{project.scope}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
