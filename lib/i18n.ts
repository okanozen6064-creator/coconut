export type Locale = 'tr' | 'en' | 'de' | 'ru'

export const locales: Locale[] = ['tr', 'en', 'de', 'ru']
export const defaultLocale: Locale = 'tr'

export const localeNames: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский'
}

export const localeFlags: Record<Locale, string> = {
  tr: '🇹🇷',
  en: '🇬🇧',
  de: '🇩🇪',
  ru: '🇷🇺'
}

export interface Translations {
  nav: {
    bungalows: string
    about: string
    journal: string
    contact: string
    bookNow: string
  }
  hero: {
    welcome: string
    title: string
    titleHighlight: string
    description: string
    reserve: string
    explore: string
  }
  bungalows: {
    title: string
    subtitle: string
    viewDetails: string
    from: string
    perNight: string
  }
  about: {
    title: string
    subtitle: string
    description: string
    features: {
      nature: {
        title: string
        description: string
      }
      comfort: {
        title: string
        description: string
      }
      service: {
        title: string
        description: string
      }
    }
  }
  journal: {
    title: string
    subtitle: string
    readMore: string
  }
  booking: {
    title: string
    subtitle: string
    checkIn: string
    checkOut: string
    guests: string
    name: string
    email: string
    phone: string
    message: string
    submit: string
  }
  footer: {
    description: string
    quickLinks: string
    contact: string
    followUs: string
    rights: string
  }
}

export const translations: Record<Locale, Translations> = {
  tr: {
    nav: {
      bungalows: 'Bungalovlar',
      about: 'Hakkımızda',
      journal: 'Günlük',
      contact: 'İletişim',
      bookNow: 'Rezervasyon'
    },
    hero: {
      welcome: 'Cennete Hoş Geldiniz',
      title: 'Lüksün Hissettirdiği',
      titleHighlight: 'Ağırlıksızlık',
      description: 'Huzurun ve zarafetin buluştuğu özel butik bungalovlarımıza kaçın.',
      reserve: 'Rezervasyon Yapın',
      explore: 'Bungalovları Keşfedin'
    },
    bungalows: {
      title: 'Bungalovlarımız',
      subtitle: 'Konforun ve doğanın mükemmel uyumu',
      viewDetails: 'Detayları Görüntüle',
      from: 'dan itibaren',
      perNight: 'gecelik'
    },
    about: {
      title: 'Hakkımızda',
      subtitle: 'Doğa ile iç içe huzur dolu bir kaçış',
      description: 'Seyr-i Mavi Bungalow, doğanın kalbinde, denizin hemen yanında konumlanan özel bir kaçış noktasıdır. Her detayı özenle tasarlanmış bungalovlarımızda, modern konforun ve doğal güzelliğin mükemmel uyumunu yaşayacaksınız.',
      features: {
        nature: {
          title: 'Doğa ile İç İçe',
          description: 'Kuş sesleriyle uyanın, deniz manzarasının tadını çıkarın'
        },
        comfort: {
          title: 'Modern Konfor',
          description: 'Her detayı düşünülmüş lüks konaklama deneyimi'
        },
        service: {
          title: 'Özel Hizmet',
          description: 'Size özel hazırlanmış unutulmaz anlar'
        }
      }
    },
    journal: {
      title: 'Günlük',
      subtitle: 'Hikayelerimiz ve deneyimlerimiz',
      readMore: 'Devamını Oku'
    },
    booking: {
      title: 'Rezervasyon',
      subtitle: 'Hayalinizdeki tatili planlayın',
      checkIn: 'Giriş Tarihi',
      checkOut: 'Çıkış Tarihi',
      guests: 'Misafir Sayısı',
      name: 'Adınız Soyadınız',
      email: 'E-posta',
      phone: 'Telefon',
      message: 'Mesajınız',
      submit: 'Rezervasyon Talebi Gönder'
    },
    footer: {
      description: 'Doğanın kalbinde, lüks ve huzurun buluştuğu özel bir kaçış noktası.',
      quickLinks: 'Hızlı Bağlantılar',
      contact: 'İletişim',
      followUs: 'Bizi Takip Edin',
      rights: 'Tüm hakları saklıdır.'
    }
  },
  en: {
    nav: {
      bungalows: 'Bungalows',
      about: 'About Us',
      journal: 'Journal',
      contact: 'Contact',
      bookNow: 'Book Now'
    },
    hero: {
      welcome: 'Welcome to Paradise',
      title: 'Where Luxury Feels',
      titleHighlight: 'Weightless',
      description: 'Escape to our exclusive collection of boutique bungalows, where tranquility meets unparalleled elegance.',
      reserve: 'Reserve Your Stay',
      explore: 'Explore Bungalows'
    },
    bungalows: {
      title: 'Our Bungalows',
      subtitle: 'Perfect harmony of comfort and nature',
      viewDetails: 'View Details',
      from: 'from',
      perNight: 'per night'
    },
    about: {
      title: 'About Us',
      subtitle: 'A peaceful escape immersed in nature',
      description: 'Seyr-i Mavi Bungalow is a special escape point located in the heart of nature, right by the sea. In our meticulously designed bungalows, you will experience the perfect harmony of modern comfort and natural beauty.',
      features: {
        nature: {
          title: 'Immersed in Nature',
          description: 'Wake up to bird songs, enjoy the sea view'
        },
        comfort: {
          title: 'Modern Comfort',
          description: 'Luxury accommodation experience with every detail considered'
        },
        service: {
          title: 'Personal Service',
          description: 'Unforgettable moments specially prepared for you'
        }
      }
    },
    journal: {
      title: 'Journal',
      subtitle: 'Our stories and experiences',
      readMore: 'Read More'
    },
    booking: {
      title: 'Booking',
      subtitle: 'Plan your dream vacation',
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      guests: 'Number of Guests',
      name: 'Your Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Your Message',
      submit: 'Send Booking Request'
    },
    footer: {
      description: 'A special escape point in the heart of nature where luxury and peace meet.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.'
    }
  },
  de: {
    nav: {
      bungalows: 'Bungalows',
      about: 'Über Uns',
      journal: 'Tagebuch',
      contact: 'Kontakt',
      bookNow: 'Jetzt Buchen'
    },
    hero: {
      welcome: 'Willkommen im Paradies',
      title: 'Wo Luxus sich anfühlt',
      titleHighlight: 'Schwerelos',
      description: 'Entfliehen Sie in unsere exklusive Kollektion von Boutique-Bungalows, wo Ruhe auf unvergleichliche Eleganz trifft.',
      reserve: 'Reservieren Sie Ihren Aufenthalt',
      explore: 'Bungalows Erkunden'
    },
    bungalows: {
      title: 'Unsere Bungalows',
      subtitle: 'Perfekte Harmonie von Komfort und Natur',
      viewDetails: 'Details Anzeigen',
      from: 'ab',
      perNight: 'pro Nacht'
    },
    about: {
      title: 'Über Uns',
      subtitle: 'Ein friedlicher Rückzugsort inmitten der Natur',
      description: 'Seyr-i Mavi Bungalow ist ein besonderer Rückzugsort im Herzen der Natur, direkt am Meer. In unseren sorgfältig gestalteten Bungalows erleben Sie die perfekte Harmonie von modernem Komfort und natürlicher Schönheit.',
      features: {
        nature: {
          title: 'Inmitten der Natur',
          description: 'Wachen Sie mit Vogelgezwitscher auf, genießen Sie den Meerblick'
        },
        comfort: {
          title: 'Moderner Komfort',
          description: 'Luxuriöses Unterkunftserlebnis mit jedem Detail bedacht'
        },
        service: {
          title: 'Persönlicher Service',
          description: 'Unvergessliche Momente speziell für Sie vorbereitet'
        }
      }
    },
    journal: {
      title: 'Tagebuch',
      subtitle: 'Unsere Geschichten und Erfahrungen',
      readMore: 'Weiterlesen'
    },
    booking: {
      title: 'Buchung',
      subtitle: 'Planen Sie Ihren Traumurlaub',
      checkIn: 'Check-in Datum',
      checkOut: 'Check-out Datum',
      guests: 'Anzahl der Gäste',
      name: 'Ihr Name',
      email: 'E-Mail',
      phone: 'Telefon',
      message: 'Ihre Nachricht',
      submit: 'Buchungsanfrage Senden'
    },
    footer: {
      description: 'Ein besonderer Rückzugsort im Herzen der Natur, wo Luxus und Frieden aufeinandertreffen.',
      quickLinks: 'Schnelllinks',
      contact: 'Kontakt',
      followUs: 'Folgen Sie Uns',
      rights: 'Alle Rechte vorbehalten.'
    }
  },
  ru: {
    nav: {
      bungalows: 'Бунгало',
      about: 'О Нас',
      journal: 'Дневник',
      contact: 'Контакты',
      bookNow: 'Забронировать'
    },
    hero: {
      welcome: 'Добро пожаловать в рай',
      title: 'Где роскошь ощущается',
      titleHighlight: 'Невесомой',
      description: 'Сбегите в нашу эксклюзивную коллекцию бутик-бунгало, где спокойствие встречается с непревзойденной элегантностью.',
      reserve: 'Забронировать проживание',
      explore: 'Исследовать бунгало'
    },
    bungalows: {
      title: 'Наши Бунгало',
      subtitle: 'Идеальная гармония комфорта и природы',
      viewDetails: 'Подробнее',
      from: 'от',
      perNight: 'за ночь'
    },
    about: {
      title: 'О Нас',
      subtitle: 'Спокойный отдых в окружении природы',
      description: 'Seyr-i Mavi Bungalow - это особое место для отдыха в самом сердце природы, прямо у моря. В наших тщательно спроектированных бунгало вы испытаете идеальную гармонию современного комфорта и природной красоты.',
      features: {
        nature: {
          title: 'В окружении природы',
          description: 'Просыпайтесь под пение птиц, наслаждайтесь видом на море'
        },
        comfort: {
          title: 'Современный комфорт',
          description: 'Роскошное размещение с продуманными деталями'
        },
        service: {
          title: 'Персональный сервис',
          description: 'Незабываемые моменты, специально подготовленные для вас'
        }
      }
    },
    journal: {
      title: 'Дневник',
      subtitle: 'Наши истории и впечатления',
      readMore: 'Читать далее'
    },
    booking: {
      title: 'Бронирование',
      subtitle: 'Спланируйте отпуск своей мечты',
      checkIn: 'Дата заезда',
      checkOut: 'Дата выезда',
      guests: 'Количество гостей',
      name: 'Ваше имя',
      email: 'Электронная почта',
      phone: 'Телефон',
      message: 'Ваше сообщение',
      submit: 'Отправить запрос на бронирование'
    },
    footer: {
      description: 'Особое место для отдыха в сердце природы, где встречаются роскошь и покой.',
      quickLinks: 'Быстрые ссылки',
      contact: 'Контакты',
      followUs: 'Подписывайтесь',
      rights: 'Все права защищены.'
    }
  }
}
