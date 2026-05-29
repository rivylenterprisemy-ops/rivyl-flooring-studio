import { MessageCircle } from "lucide-react"

import { WHATSAPP_URL } from "@/lib/constants"

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Rivyl Flooring Studio for a quotation"
      className="fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(18,140,85,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5" />
    </a>
  )
}
