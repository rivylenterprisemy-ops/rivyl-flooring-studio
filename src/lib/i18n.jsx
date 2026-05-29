/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo } from "react"

const WHATSAPP_NUMBER = "60127659543"

const dictionaries = {
  en: {
    locale: "en",
    path: "/",
    alternatePath: "/ms",
    languageLabel: "English",
    seo: {
      title: "Rivyl Flooring Studio | Flooring Renewal in Johor Bahru",
      description:
        "Premium apartment flooring renewal, tile replacement and surface finishing services by Rivyl Flooring Studio in Johor Bahru, Malaysia.",
    },
    whatsappMessage:
      "Hi Rivyl Flooring Studio, I'd like to request a flooring quotation.",
    nav: {
      homeAria: "Rivyl Flooring Studio home",
      items: [
        { label: "Home", href: "#home" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
      quotation: "Get Quotation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchToEnglish: "Switch to English",
      switchToMalay: "Switch to Bahasa Melayu",
    },
    hero: {
      eyebrow: "RIVYL FLOORING STUDIO",
      title: "Refined Flooring Transformations For Modern Homes",
      copy:
        "Premium tile replacement and surface renewal crafted for apartments, homes and modern living spaces.",
      quotation: "Get Quotation",
      projectWork: "See Project Work",
      imageAlt:
        "Rivyl apartment flooring project with reflective porcelain-look tiles",
      features: [
        "Precision Tile Installation",
        "Premium Surface Finishes",
        "Apartment Flooring Specialists",
        "Modern Porcelain & Marble Looks",
      ],
    },
    trust: [
      "Apartment Flooring Specialist",
      "Johor Bahru Based",
      "Free Site Quotation",
      "Practical Renovation Experience",
    ],
    beforeAfter: {
      eyebrow: "Craftsmanship Journey",
      title: "From precise craftsmanship to a polished finish",
      copy:
        "Compare the installation process with the final completed flooring result to see the attention to detail behind every project.",
      processAlt:
        "In-progress porcelain tile installation with alignment spacers and workmanship detail",
      completedAlt: "Completed apartment porcelain tile flooring after renewal",
      completed: "Completed",
      inProgress: "In Progress",
      rangeLabel:
        "Drag to compare in-progress craftsmanship and completed flooring result",
    },
    portfolio: {
      eyebrow: "Project Portfolio",
      title: "Completed flooring projects with practical finishing detail",
      copy:
        "A closer look at real apartment flooring work, tile selection, alignment and finishing scopes completed around Johor Bahru.",
      filters: ["All Projects", "Living Room", "Kitchen", "Corridor", "Commercial"],
      allProjects: "All Projects",
      proofItems: [
        { label: "Completed Projects", value: "Real flooring work" },
        { label: "Satisfied Clients", value: "Direct homeowner handovers" },
        { label: "Years Experience", value: "Practical renovation sites" },
      ],
      labels: {
        tileType: "Tile Type",
        scope: "Scope",
      },
      projects: [
        {
          title: "Apartment Flooring Transformation",
          location: "Taman Universiti, Johor Bahru",
          tileType: "600x600 Marble-Look Porcelain",
          scope: "Living Room + Corridor",
          status: "Completed",
          category: "Living Room",
        },
        {
          title: "Corridor Tile Renewal",
          location: "Johor Bahru Apartment",
          tileType: "600x600 Light Porcelain Tile",
          scope: "Corridor + Threshold Areas",
          status: "Completed",
          category: "Corridor",
        },
        {
          title: "Kitchen Surface Continuation",
          location: "Johor Bahru Home",
          tileType: "Marble-Look Porcelain Finish",
          scope: "Kitchen Entry + Living Edge",
          status: "Completed",
          category: "Kitchen",
        },
        {
          title: "Commercial Floor Finish",
          location: "Johor Bahru",
          tileType: "Polished Porcelain Surface",
          scope: "Open Floor Area",
          status: "Completed",
          category: "Commercial",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Practical flooring services for refined homes",
      imageAlt: "Apartment floor tile surface and skirting finish",
      items: [
        {
          title: "Tile Installation",
          description:
            "Professional installation for new homes, renovations and extensions.",
        },
        {
          title: "Tile Replacement",
          description:
            "Replace cracked, damaged or outdated tiles with precision matching.",
        },
        {
          title: "Surface Preparation",
          description:
            "Proper floor preparation ensures long-lasting results and level installation.",
        },
        {
          title: "Consultation & Quotation",
          description:
            "Advice on tile selection, layout planning and material estimation.",
        },
      ],
    },
    why: {
      eyebrow: "Trust & Workmanship",
      titlePrefix: "Why Homeowners Choose",
      brand: "Rivyl Flooring Studio",
      items: [
        "Precision Tile Levelling System",
        "Clean & Professional Workmanship",
        "Transparent Quotations",
        "Residential & Commercial Projects",
        "Attention To Detail",
        "Reliable Project Communication",
      ],
    },
    areas: {
      eyebrow: "Service Areas",
      title: "Serving Johor Bahru & Surrounding Areas",
      copy:
        "We provide flooring replacement, tile installation and surface renewal services across Johor Bahru and nearby residential areas.",
      serviceAreas: [
        "Johor Bahru",
        "Skudai",
        "Taman Universiti",
        "Iskandar Puteri",
        "Bukit Indah",
        "Kulai",
        "Gelang Patah",
        "Ulu Tiram",
      ],
    },
    cta: {
      eyebrow: "Start Your Flooring Upgrade",
      title: "Ready to upgrade your flooring?",
      copy:
        "Share your floor area, photos and location. We'll guide you with tile selection, scope and quotation.",
      whatsapp: "Send Floor Photos",
      projectWork: "See Project Work",
    },
    footer: {
      description:
        "Premium apartment flooring renewal, tile replacement and practical surface finishing based in Johor Bahru, Malaysia.",
      locationHeading: "Location",
      location: "Johor Bahru, Malaysia",
      servicesHeading: "Services",
      services: [
        "Tile Replacement",
        "Floor Retiling",
        "Skirting & Edge Finishing",
        "Painting & Surface Touch-Up",
      ],
      navigationHeading: "Quick Navigation",
      navigation: [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#portfolio" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
      brandLine: "Rivyl Flooring Studio is a service brand of Rivyl Enterprise.",
      copyright: "Copyright (c) 2026 Rivyl Enterprise. All rights reserved.",
    },
    floatingWhatsAppAria: "WhatsApp Rivyl Flooring Studio for a quotation",
  },
  ms: {
    locale: "ms",
    path: "/ms",
    alternatePath: "/",
    languageLabel: "Bahasa Melayu",
    seo: {
      title: "Rivyl Flooring Studio | Pembaharuan Lantai di Johor Bahru",
      description:
        "Servis premium pembaharuan lantai apartmen, penggantian jubin dan kemasan permukaan oleh Rivyl Flooring Studio di Johor Bahru, Malaysia.",
    },
    whatsappMessage:
      "Hai Rivyl Flooring Studio, saya ingin meminta sebut harga lantai.",
    nav: {
      homeAria: "Laman utama Rivyl Flooring Studio",
      items: [
        { label: "Utama", href: "#home" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Servis", href: "#services" },
        { label: "Hubungi", href: "#contact" },
      ],
      quotation: "Dapatkan Sebut Harga",
      openMenu: "Buka menu navigasi",
      closeMenu: "Tutup menu navigasi",
      switchToEnglish: "Tukar ke Bahasa Inggeris",
      switchToMalay: "Tukar ke Bahasa Melayu",
    },
    hero: {
      eyebrow: "RIVYL FLOORING STUDIO",
      title: "Transformasi Lantai Elegan Untuk Kediaman Moden",
      copy:
        "Penggantian jubin premium dan pembaharuan permukaan untuk apartmen, rumah dan ruang kediaman moden.",
      quotation: "Dapatkan Sebut Harga",
      projectWork: "Lihat Projek",
      imageAlt:
        "Projek lantai apartmen Rivyl dengan jubin gaya porselin berkilat",
      features: [
        "Pemasangan Jubin Tepat",
        "Kemasan Permukaan Premium",
        "Pakar Lantai Apartmen",
        "Gaya Porselin & Marmar Moden",
      ],
    },
    trust: [
      "Pakar Lantai Apartmen",
      "Berpusat di Johor Bahru",
      "Sebut Harga Tapak Percuma",
      "Pengalaman Renovasi Praktikal",
    ],
    beforeAfter: {
      eyebrow: "Perjalanan Kerja Tangan",
      title: "Daripada kerja tepat kepada kemasan yang licin",
      copy:
        "Bandingkan proses pemasangan dengan hasil lantai siap untuk melihat ketelitian di sebalik setiap projek.",
      processAlt:
        "Pemasangan jubin porselin sedang dijalankan dengan spacer penjajaran dan perincian kerja",
      completedAlt: "Lantai jubin porselin apartmen yang siap selepas pembaharuan",
      completed: "Siap",
      inProgress: "Dalam Proses",
      rangeLabel:
        "Seret untuk membandingkan kerja dalam proses dan hasil lantai siap",
    },
    portfolio: {
      eyebrow: "Portfolio Projek",
      title: "Projek lantai siap dengan kemasan praktikal yang teliti",
      copy:
        "Lihat kerja lantai apartmen sebenar, pilihan jubin, penjajaran dan skop kemasan yang disiapkan sekitar Johor Bahru.",
      filters: ["Semua Projek", "Ruang Tamu", "Dapur", "Koridor", "Komersial"],
      allProjects: "Semua Projek",
      proofItems: [
        { label: "Projek Siap", value: "Kerja lantai sebenar" },
        { label: "Klien Puas Hati", value: "Serahan terus kepada pemilik rumah" },
        { label: "Pengalaman", value: "Tapak renovasi praktikal" },
      ],
      labels: {
        tileType: "Jenis Jubin",
        scope: "Skop",
      },
      projects: [
        {
          title: "Transformasi Lantai Apartmen",
          location: "Taman Universiti, Johor Bahru",
          tileType: "Porselin Gaya Marmar 600x600",
          scope: "Ruang Tamu + Koridor",
          status: "Siap",
          category: "Ruang Tamu",
        },
        {
          title: "Pembaharuan Jubin Koridor",
          location: "Apartmen Johor Bahru",
          tileType: "Jubin Porselin Cerah 600x600",
          scope: "Koridor + Kawasan Ambang",
          status: "Siap",
          category: "Koridor",
        },
        {
          title: "Sambungan Permukaan Dapur",
          location: "Rumah Johor Bahru",
          tileType: "Kemasan Porselin Gaya Marmar",
          scope: "Pintu Dapur + Tepi Ruang Tamu",
          status: "Siap",
          category: "Dapur",
        },
        {
          title: "Kemasan Lantai Komersial",
          location: "Johor Bahru",
          tileType: "Permukaan Porselin Berkilat",
          scope: "Kawasan Lantai Terbuka",
          status: "Siap",
          category: "Komersial",
        },
      ],
    },
    services: {
      eyebrow: "Servis",
      title: "Servis lantai praktikal untuk kediaman elegan",
      imageAlt: "Permukaan jubin lantai apartmen dan kemasan skirting",
      items: [
        {
          title: "Pemasangan Jubin",
          description:
            "Pemasangan profesional untuk rumah baharu, renovasi dan sambungan ruang.",
        },
        {
          title: "Penggantian Jubin",
          description:
            "Ganti jubin retak, rosak atau lama dengan padanan yang teliti.",
        },
        {
          title: "Persediaan Permukaan",
          description:
            "Persediaan lantai yang betul memastikan hasil tahan lama dan pemasangan rata.",
        },
        {
          title: "Konsultasi & Sebut Harga",
          description:
            "Nasihat pilihan jubin, perancangan susun atur dan anggaran bahan.",
        },
      ],
    },
    why: {
      eyebrow: "Kepercayaan & Kerja Tangan",
      titlePrefix: "Mengapa Pemilik Rumah Memilih",
      brand: "Rivyl Flooring Studio",
      items: [
        "Sistem Perataan Jubin Tepat",
        "Kerja Bersih & Profesional",
        "Sebut Harga Telus",
        "Projek Kediaman & Komersial",
        "Teliti Pada Setiap Perincian",
        "Komunikasi Projek Yang Boleh Dipercayai",
      ],
    },
    areas: {
      eyebrow: "Kawasan Servis",
      title: "Menyediakan Servis di Johor Bahru & Kawasan Sekitar",
      copy:
        "Kami menyediakan servis penggantian lantai, pemasangan jubin dan pembaharuan permukaan di Johor Bahru serta kawasan kediaman berdekatan.",
      serviceAreas: [
        "Johor Bahru",
        "Skudai",
        "Taman Universiti",
        "Iskandar Puteri",
        "Bukit Indah",
        "Kulai",
        "Gelang Patah",
        "Ulu Tiram",
      ],
    },
    cta: {
      eyebrow: "Mulakan Naik Taraf Lantai Anda",
      title: "Sedia untuk naik taraf lantai anda?",
      copy:
        "Kongsi keluasan lantai, gambar dan lokasi anda. Kami akan bantu dengan pilihan jubin, skop dan sebut harga.",
      whatsapp: "Hantar Gambar Lantai",
      projectWork: "Lihat Projek",
    },
    footer: {
      description:
        "Pembaharuan lantai apartmen premium, penggantian jubin dan kemasan permukaan praktikal berpusat di Johor Bahru, Malaysia.",
      locationHeading: "Lokasi",
      location: "Johor Bahru, Malaysia",
      servicesHeading: "Servis",
      services: [
        "Penggantian Jubin",
        "Pemasangan Semula Lantai",
        "Kemasan Skirting & Tepi",
        "Cat & Sentuhan Permukaan",
      ],
      navigationHeading: "Navigasi Pantas",
      navigation: [
        { label: "Utama", href: "#home" },
        { label: "Projek", href: "#portfolio" },
        { label: "Servis", href: "#services" },
        { label: "Hubungi", href: "#contact" },
      ],
      brandLine: "Rivyl Flooring Studio ialah jenama servis Rivyl Enterprise.",
      copyright: "Hak cipta (c) 2026 Rivyl Enterprise. Semua hak terpelihara.",
    },
    floatingWhatsAppAria:
      "WhatsApp Rivyl Flooring Studio untuk sebut harga",
  },
}

const LocaleContext = createContext(null)

function getLanguageFromPath(pathname) {
  return pathname === "/ms" || pathname.startsWith("/ms/") ? "ms" : "en"
}

function getOrigin() {
  return window.location.origin
}

function setMetaTag(name, content) {
  let tag = document.head.querySelector(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute("name", name)
    document.head.appendChild(tag)
  }

  tag.setAttribute("content", content)
}

function setLinkTag(rel, attributes) {
  const selector = attributes.hreflang
    ? `link[rel="${rel}"][hreflang="${attributes.hreflang}"]`
    : `link[rel="${rel}"]`
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement("link")
    tag.setAttribute("rel", rel)
    document.head.appendChild(tag)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value)
  })
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function localizeHash(href, path) {
  return `${path === "/" ? "" : path}${href}`
}

export function LocaleProvider({ children }) {
  const lang = getLanguageFromPath(window.location.pathname)
  const content = dictionaries[lang]

  useEffect(() => {
    localStorage.setItem("rivyl-language", lang)
  }, [lang])

  useEffect(() => {
    const origin = getOrigin()
    const englishUrl = `${origin}/`
    const malayUrl = `${origin}/ms`
    const currentUrl = lang === "ms" ? malayUrl : englishUrl

    document.documentElement.lang = lang
    document.title = content.seo.title
    setMetaTag("description", content.seo.description)
    setLinkTag("canonical", { href: currentUrl })
    setLinkTag("alternate", { hreflang: "en", href: englishUrl })
    setLinkTag("alternate", { hreflang: "ms", href: malayUrl })
    setLinkTag("alternate", { hreflang: "x-default", href: englishUrl })
  }, [content, lang])

  const value = useMemo(
    () => ({
      content,
      lang,
      path: content.path,
      alternatePath: content.alternatePath,
      whatsappUrl: buildWhatsAppUrl(content.whatsappMessage),
    }),
    [content, lang]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)

  if (!value) {
    throw new Error("useLocale must be used inside LocaleProvider")
  }

  return value
}
