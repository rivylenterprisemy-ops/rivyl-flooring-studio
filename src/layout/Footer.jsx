import { MessageCircle, PhoneCall } from "lucide-react"

import { useCallbackRequest } from "@/components/CallbackRequest"
import { localizeHash, useLocale } from "@/lib/i18n"

export default function Footer() {
  const { content, path, whatsappUrl } = useLocale()
  const { openCallbackRequest } = useCallbackRequest()
  const { footer } = content

  return (
    <footer className="bg-[#eee7dd] px-5 pb-8 pt-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-stone-300/70 pt-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a
              href={localizeHash("#home", path)}
              className="font-['Playfair_Display'] text-2xl font-medium text-stone-950"
            >
              Rivyl Flooring Studio
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-stone-600">
              {footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-950">{footer.locationHeading}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              {footer.location}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-stone-950 transition duration-300 hover:text-stone-700"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-stone-700 transition duration-300 hover:text-stone-950"
              onClick={openCallbackRequest}
            >
              <PhoneCall className="size-4" />
              {footer.callback}
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-950">{footer.servicesHeading}</h3>
            <ul className="mt-4 grid gap-3 text-sm text-stone-600">
              {footer.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-950">{footer.navigationHeading}</h3>
            <ul className="mt-4 grid gap-3 text-sm text-stone-600">
              {footer.navigation.map((item) => (
                <li key={item.label}>
                  <a href={localizeHash(item.href, path)} className="transition hover:text-stone-950">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-300/70 pt-6 text-xs leading-6 text-stone-500">
          <p>{footer.brandLine}</p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
