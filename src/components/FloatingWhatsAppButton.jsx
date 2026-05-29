import { MessageCircle } from "lucide-react"

const whatsappHref =
  "https://wa.me/?text=Hi%20Rivyl%20Flooring%20Studio%2C%20I%27d%20like%20to%20ask%20about%20a%20flooring%20quotation."

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Rivyl Flooring Studio for a quotation"
      className="fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(18,140,85,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5" />
    </a>
  )
}
