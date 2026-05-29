import { MessageCircle } from "lucide-react"

import { WHATSAPP_URL } from "@/lib/constants"

const services = [
  "Tile Replacement",
  "Floor Retiling",
  "Skirting & Edge Finishing",
  "Painting & Surface Touch-Up",
]

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#eee7dd] px-5 pb-8 pt-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-stone-300/70 pt-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#home"
              className="font-['Playfair_Display'] text-2xl font-medium text-stone-950"
            >
              Rivyl Flooring Studio
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-stone-600">
              Premium apartment flooring renewal, tile replacement and practical
              surface finishing based in Johor Bahru, Malaysia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-950">Location</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Johor Bahru, Malaysia
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-stone-950 transition duration-300 hover:text-stone-700"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-950">Services</h3>
            <ul className="mt-4 grid gap-3 text-sm text-stone-600">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-950">Quick Navigation</h3>
            <ul className="mt-4 grid gap-3 text-sm text-stone-600">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-stone-950">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-300/70 pt-6 text-xs leading-6 text-stone-500">
          <p>Rivyl Flooring Studio is a service brand of Rivyl Enterprise.</p>
          <p>Copyright (c) 2026 Rivyl Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
