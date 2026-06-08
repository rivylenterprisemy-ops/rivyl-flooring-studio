/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo } from "react"

const WHATSAPP_NUMBER = "60137069543"

const dictionaries = {
  en: {
    locale: "en",
    path: "/",
    alternatePath: "/ms",
    languageLabel: "English",
    seo: {
      title: "Rivyl Flooring Studio | Flooring, Painting & Electrical Services in Johor Bahru",
      description:
        "Property improvement and maintenance services in Johor Bahru, including flooring, painting and electrical work for residential and commercial projects.",
    },
    whatsappMessage:
      "Hi Rivyl Flooring Studio, I'd like to request a property improvement quotation.",
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
      eyebrow: "PROPERTY IMPROVEMENT & MAINTENANCE SERVICES",
      title: "Flooring, Painting & Electrical Services For Refined Properties",
      copy:
        "Flagship flooring work with painting and electrical support for residences, apartments, offices, shoplots and commercial premises.",
      quotation: "Get Quotation",
      projectWork: "See Project Work",
      imageAlt:
        "Rivyl apartment flooring project with reflective porcelain-look tiles",
      features: [
        "Flooring, Painting & Electrical Services",
        "Residential & Commercial Projects",
        "Apartments, Offices & Shoplots",
        "Premium Finishing Detail",
      ],
    },
    trust: [
      "Flooring Flagship Service",
      "Johor Bahru Based",
      "Free Site Quotation",
      "Residential & Commercial Projects",
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
        { label: "Satisfied Clients", value: "Direct client handovers" },
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
      title: "Property improvement and maintenance services",
      imageAlt: "Apartment floor tile surface and skirting finish",
      items: [
        {
          title: "Tile Installation",
          description:
            "Professional tile installation for residential and commercial properties.",
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
        {
          title: "Painting Services",
          description:
            "Interior painting, exterior painting, commercial repainting and touch-up works.",
        },
        {
          title: "Electrical Services",
          description:
            "Electrical wiring, lighting installation, fan installation, power point installation and minor electrical upgrades.",
        },
      ],
    },
    why: {
      eyebrow: "Trust & Workmanship",
      titlePrefix: "Why Clients Choose",
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
        "We provide flooring, painting and electrical services across Johor Bahru for residential and commercial properties.",
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
      eyebrow: "Start Your Property Upgrade",
      title: "Ready to improve your property?",
      copy:
        "Share your property type, photos and location. We'll guide you with the right flooring, painting or electrical scope and quotation.",
      whatsapp: "Send Project Photos",
      callback: "Request a Callback",
      projectWork: "See Project Work",
    },
    footer: {
      description:
        "Property improvement and maintenance services for flooring, painting and electrical work based in Johor Bahru, Malaysia.",
      locationHeading: "Location",
      location: "Johor Bahru, Malaysia",
      servicesHeading: "Services",
      services: [
        "Flooring Services",
        "Painting Services",
        "Electrical Services",
        "Residential & Commercial Projects",
        "Tile Replacement",
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
      callback: "Request a Callback",
    },
    callback: {
      eyebrow: "Request a Callback",
      title: "Request a Callback",
      close: "Close callback request",
      fields: {
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        preferredCallTime: "Preferred Call Time",
        message: "Brief Message",
      },
      submit: "Submit Request",
      sending: "Submitting...",
      cancel: "Cancel",
      success: "Thank you. We will contact you as soon as possible.",
      failure: "Unable to submit your request. Please try WhatsApp instead.",
      validation: {
        nameRequired: "Please enter your full name.",
        phoneRequired: "Please enter your phone number.",
      },
    },
    floatingWhatsAppAria: "WhatsApp Rivyl Flooring Studio for a quotation",
  },
  ms: {
    locale: "ms",
    path: "/ms",
    alternatePath: "/",
    languageLabel: "Bahasa Melayu",
    seo: {
      title: "Rivyl Flooring Studio | Servis Lantai, Pengecatan & Elektrik di Johor Bahru",
      description:
        "Perkhidmatan penambahbaikan dan penyelenggaraan hartanah di Johor Bahru, termasuk lantai, pengecatan dan elektrik untuk projek kediaman dan komersial.",
    },
    whatsappMessage:
      "Hai Rivyl Flooring Studio, saya ingin meminta sebut harga penambahbaikan hartanah.",
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
      eyebrow: "PERKHIDMATAN PENAMBAHBAIKAN & PENYELENGGARAAN HARTANAH",
      title: "Perkhidmatan Lantai, Pengecatan & Elektrik Untuk Hartanah Elegan",
      copy:
        "Kerja lantai sebagai servis utama, disokong pengecatan dan elektrik untuk kediaman, apartmen, pejabat, lot kedai dan premis komersial.",
      quotation: "Dapatkan Sebut Harga",
      projectWork: "Lihat Projek",
      imageAlt:
        "Projek lantai apartmen Rivyl dengan jubin gaya porselin berkilat",
      features: [
        "Perkhidmatan Lantai, Pengecatan & Elektrik",
        "Projek Kediaman & Komersial",
        "Apartmen, Pejabat & Lot Kedai",
        "Perincian Kemasan Premium",
      ],
    },
    trust: [
      "Servis Utama Lantai",
      "Berpusat di Johor Bahru",
      "Sebut Harga Tapak Percuma",
      "Projek Kediaman & Komersial",
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
        { label: "Klien Puas Hati", value: "Serahan terus kepada klien" },
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
      title: "Perkhidmatan penambahbaikan dan penyelenggaraan hartanah",
      imageAlt: "Permukaan jubin lantai apartmen dan kemasan skirting",
      items: [
        {
          title: "Pemasangan Jubin",
          description:
            "Pemasangan jubin profesional untuk hartanah kediaman dan komersial.",
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
        {
          title: "Servis Pengecatan",
          description:
            "Pengecatan dalaman, pengecatan luaran, cat semula komersial dan kerja sentuhan akhir.",
        },
        {
          title: "Servis Elektrik",
          description:
            "Pendawaian elektrik, pemasangan lampu, pemasangan kipas, pemasangan soket kuasa dan naik taraf elektrik kecil.",
        },
      ],
    },
    why: {
      eyebrow: "Kepercayaan & Kerja Tangan",
      titlePrefix: "Mengapa Klien Memilih",
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
        "Kami menyediakan servis lantai, pengecatan dan elektrik di Johor Bahru untuk hartanah kediaman dan komersial.",
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
      eyebrow: "Mulakan Naik Taraf Hartanah Anda",
      title: "Sedia untuk menambah baik hartanah anda?",
      copy:
        "Kongsi jenis hartanah, gambar dan lokasi anda. Kami akan bantu dengan skop lantai, pengecatan atau elektrik yang sesuai serta sebut harga.",
      whatsapp: "Hantar Gambar Projek",
      callback: "Minta Panggilan Balik",
      projectWork: "Lihat Projek",
    },
    footer: {
      description:
        "Perkhidmatan penambahbaikan dan penyelenggaraan hartanah untuk kerja lantai, pengecatan dan elektrik berpusat di Johor Bahru, Malaysia.",
      locationHeading: "Lokasi",
      location: "Johor Bahru, Malaysia",
      servicesHeading: "Servis",
      services: [
        "Servis Lantai",
        "Servis Pengecatan",
        "Servis Elektrik",
        "Projek Kediaman & Komersial",
        "Penggantian Jubin",
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
      callback: "Minta Panggilan Balik",
    },
    callback: {
      eyebrow: "Minta Panggilan Balik",
      title: "Minta Panggilan Balik",
      close: "Tutup borang panggilan balik",
      fields: {
        fullName: "Nama Penuh",
        phoneNumber: "Nombor Telefon",
        preferredCallTime: "Masa Pilihan Untuk Dihubungi",
        message: "Ringkasan Pertanyaan",
      },
      submit: "Hantar Permintaan",
      sending: "Menghantar...",
      cancel: "Batal",
      success: "Terima kasih. Kami akan menghubungi anda secepat mungkin.",
      failure: "Permintaan tidak dapat dihantar. Sila gunakan WhatsApp sebagai alternatif.",
      validation: {
        nameRequired: "Sila masukkan nama penuh anda.",
        phoneRequired: "Sila masukkan nombor telefon anda.",
      },
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
