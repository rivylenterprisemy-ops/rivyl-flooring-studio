import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

import heroFlooring from "@/assets/projects/hero-flooring.jpg"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const featureItems = [
  "Precision Tile Installation",
  "Premium Surface Finishes",
  "Apartment Flooring Specialists",
  "Modern Porcelain & Marble Looks",
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#f4efe7] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:min-h-[90vh] lg:px-10 lg:pb-20 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_0.98fr] lg:gap-18 xl:gap-22">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-[39rem]"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500"
          >
            RIVYL FLOORING STUDIO
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="font-['Playfair_Display'] text-[2.55rem] font-semibold leading-[1.1] text-stone-950 sm:text-[3.15rem] lg:text-[3.35rem] xl:text-[3.72rem]"
          >
            Refined Flooring Transformations For Modern Homes
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-7 max-w-[33rem] text-base leading-8 text-stone-600"
          >
            Premium tile replacement and surface renewal crafted for apartments,
            homes and modern living spaces.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-stone-950 px-7 text-sm text-white shadow-[0_18px_38px_rgba(28,25,23,0.17)] transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[0_22px_46px_rgba(28,25,23,0.2)]"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get Quotation
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-stone-300/70 bg-transparent px-7 text-sm text-stone-800 shadow-none backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/45 hover:text-stone-950"
            >
              <a href="#portfolio">See Project Work</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
          className="relative lg:max-w-[36rem] lg:justify-self-end xl:max-w-[38rem]"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/55 bg-stone-200 p-2 shadow-[0_22px_56px_rgba(39,32,24,0.1)]"
          >
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img
                src={heroFlooring}
                alt="Rivyl apartment flooring project with reflective porcelain-look tiles"
                className="aspect-[4/5] w-full scale-[1.05] object-cover object-[center_74%] saturate-[0.82] sm:aspect-[16/12] sm:scale-[1.02] lg:aspect-[4/5] lg:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-[#eadfce]/18" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.55 }}
            className="absolute bottom-5 left-5 right-5 rounded-3xl border border-stone-200/75 bg-[#f8f4ee]/92 p-4 shadow-[0_16px_38px_rgba(39,32,24,0.1)] sm:bottom-7 sm:left-auto sm:right-7 sm:w-72"
          >
            <div className="grid gap-2.5">
              {featureItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[0.82rem] font-medium text-stone-800">
                  <span className="flex size-5 items-center justify-center rounded-full bg-stone-950 text-white">
                    <Check className="size-3" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
