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
        gallery: string
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
        description: string
        viewDetails: string
        from: string
        perNight: string
        guests: string
        items: {
            oceanView: {
                name: string
                description: string
            }
            poolside: {
                name: string
                description: string
            }
            garden: {
                name: string
                description: string
            }
        }
    }
    about: {
        title: string
        subtitle: string
        description: string
        description2: string
        description3: string
        stats: {
            nature: string
            service: string
        }
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
    gallery: {
        title: string
        subtitle: string
        description: string
    }
    journal: {
        title: string
        subtitle: string
        readMore: string
    }
    booking: {
        title: string
        subtitle: string
        description: string
        checkIn: string
        checkOut: string
        guests: string
        guestCount: string
        checkAvailability: string
        contactPhone: string
        name: string
        email: string
        phone: string
        message: string
        submit: string
    }
    footer: {
        description: string
        quickLinks: string
        experiences: string
        experiencesList: {
            nature: string
            seaview: string
            pool: string
            peaceful: string
            service: string
        }
        contact: string
        followUs: string
        rights: string
    }
}

export const translations: Record<Locale, Translations> = {
    tr: {
        nav: {
            bungalows: 'Odalarımız',
            about: 'Hakkımızda',
            journal: 'Günlük',
            gallery: 'Galeri',
            contact: 'İletişim',
            bookNow: 'Rezervasyon'
        },
        hero: {
            welcome: 'Doğa ile iç içe bir apart',
            title: 'Olymposta Harika Bir',
            titleHighlight: 'Tatil',
            description: 'Doğa ile iç içe, huzurlu ve keyifli bir konaklama deneyimi için Olympos Coconut Apart ve Pansiyon\'a hoş geldiniz.',
            reserve: 'Rezervasyon Yapın',
            explore: 'Odaları Keşfedin'
        },
        bungalows: {
            title: 'Bungalowlarımız',
            subtitle: 'Konforun ve doğanın mükemmel uyumu',
            description: 'Olympos Coconut Apart ve Pansiyon\'da her bungalow özenle tasarlanmış, konforun ve doğanın mükemmel uyumunu sunuyor.',
            viewDetails: 'Detayları Görüntüle',
            from: 'dan itibaren',
            perNight: 'gecelik',
            guests: 'Kişi',
            items: {
                oceanView: {
                    name: 'Deniz Manzaralı Bungalow',
                    description: 'Denizin hemen yanında, doğa ile iç içe huzur dolu bir kaçış. Sabahları kuş sesleriyle uyanın, gün boyunca deniz manzarasının tadını çıkarın.'
                },
                poolside: {
                    name: 'Havuz Kenarı Bungalow',
                    description: 'Havuzun serin sularının yanında, özenle hazırlanmış rahat köşelerde kendinizi evinizde hissedin. Her an size özel.'
                },
                garden: {
                    name: 'Bahçe Manzaralı Bungalow',
                    description: 'Yeşillikler içinde, huzurlu bir ortamda dinlenin. Doğanın seslerini dinleyerek kahvenizin tadını çıkarın.'
                }
            }
        },
        about: {
            title: 'Hakkımızda',
            subtitle: 'Doğa ile iç içe huzur dolu bir kaçış',
            description: 'Olympos Coconut Apart ve Pansiyon, doğanın kalbinde, denizin hemen yanında konumlanan özel bir kaçış noktasıdır. Her detayı özenle tasarlanmış bungalowlarımızda, modern konforun ve doğal güzelliğin mükemmel uyumunu yaşayacaksınız.',
            description2: 'Havuzun serin sularının yanında, özenle hazırlanmış rahat köşelerde kendinizi evinizde hissedin. Sabahları kuş sesleriyle uyanın, gün boyunca deniz manzarasının tadını çıkarın.',
            description3: 'Bazen bir köşenin huzuru, bir fincan kahvenin sıcaklığı ya da serin bir kokteylin ferahlığı yeterlidir. Seyr-i Mavi size iyi gelecek.',
            stats: {
                nature: 'Doğa ile İç İçe',
                service: 'Özel Hizmet'
            },
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
        gallery: {
            title: 'Galeri',
            subtitle: 'Anılarınızı Keşfedin',
            description: 'Olympos Coconut Apart ve Pansiyon\'da sizi bekleyen huzur dolu anların görüntüleri'
        },
        journal: {
            title: 'Günlük',
            subtitle: 'Hikayelerimiz ve deneyimlerimiz',
            readMore: 'Devamını Oku'
        },
        booking: {
            title: 'Rezervasyon',
            subtitle: 'Hayalinizdeki tatili planlayın',
            description: 'Tarihlerinizi seçin ve unutulmaz bir deneyim yaşayın. Ekibimiz 7/24 rezervasyonunuz için hazır.',
            checkIn: 'Giriş Tarihi',
            checkOut: 'Çıkış Tarihi',
            guests: 'Misafir Sayısı',
            guestCount: 'Kişi',
            checkAvailability: 'Müsaitlik Kontrolü',
            contactPhone: 'Telefon ile iletişim kurmak ister misiniz?',
            name: 'Adınız Soyadınız',
            email: 'E-posta',
            phone: 'Telefon',
            message: 'Mesajınız',
            submit: 'Rezervasyon Talebi Gönder'
        },
        footer: {
            description: 'Doğanın kalbinde, lüks ve huzurun buluştuğu özel bir kaçış noktası.',
            quickLinks: 'Hızlı Bağlantılar',
            experiences: 'Deneyimler',
            experiencesList: {
                nature: 'Doğa ile İç İçe',
                seaview: 'Deniz Manzarası',
                pool: 'Havuz Keyfi',
                peaceful: 'Huzurlu Ortam',
                service: 'Özel Hizmet'
            },
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
            gallery: 'Gallery',
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
            description: 'At Olympos Coconut Apart ve Pansiyon, each bungalow is carefully designed, offering the perfect harmony of comfort and nature.',
            viewDetails: 'View Details',
            from: 'from',
            perNight: 'per night',
            guests: 'Guests',
            items: {
                oceanView: {
                    name: 'Ocean View Bungalow',
                    description: 'A peaceful escape right by the sea, immersed in nature. Wake up to bird songs and enjoy the sea view throughout the day.'
                },
                poolside: {
                    name: 'Poolside Bungalow',
                    description: 'Feel at home in comfortable corners carefully prepared next to the cool waters of the pool. Every moment is special for you.'
                },
                garden: {
                    name: 'Garden View Bungalow',
                    description: 'Relax in a peaceful environment surrounded by greenery. Enjoy your coffee while listening to the sounds of nature.'
                }
            }
        },
        about: {
            title: 'About Us',
            subtitle: 'A peaceful escape immersed in nature',
            description: 'Olympos Coconut Apart ve Pansiyon is a special escape point located in the heart of nature, right by the sea. In our meticulously designed bungalows, you will experience the perfect harmony of modern comfort and natural beauty.',
            description2: 'Feel at home in comfortable corners carefully prepared next to the cool waters of the pool. Wake up to bird songs and enjoy the sea view throughout the day.',
            description3: 'Sometimes the peace of a corner, the warmth of a cup of coffee, or the freshness of a cool cocktail is enough. Seyr-i Mavi will do you good.',
            stats: {
                nature: 'Immersed in Nature',
                service: 'Personal Service'
            },
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
        gallery: {
            title: 'Gallery',
            subtitle: 'Discover Your Memories',
            description: 'Images of peaceful moments awaiting you at Olympos Coconut Apart ve Pansiyon'
        },
        journal: {
            title: 'Journal',
            subtitle: 'Our stories and experiences',
            readMore: 'Read More'
        },
        booking: {
            title: 'Booking',
            subtitle: 'Plan your dream vacation',
            description: 'Select your dates and experience an unforgettable journey. Our team is ready 24/7 for your reservation.',
            checkIn: 'Check-in Date',
            checkOut: 'Check-out Date',
            guests: 'Number of Guests',
            guestCount: 'Guests',
            checkAvailability: 'Check Availability',
            contactPhone: 'Prefer to speak with someone?',
            name: 'Your Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Your Message',
            submit: 'Send Booking Request'
        },
        footer: {
            description: 'A special escape point in the heart of nature where luxury and peace meet.',
            quickLinks: 'Quick Links',
            experiences: 'Experiences',
            experiencesList: {
                nature: 'Immersed in Nature',
                seaview: 'Sea View',
                pool: 'Pool Enjoyment',
                peaceful: 'Peaceful Environment',
                service: 'Personal Service'
            },
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
            gallery: 'Galerie',
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
            description: 'Bei Olympos Coconut Apart ve Pansiyon ist jeder Bungalow sorgfältig gestaltet und bietet die perfekte Harmonie von Komfort und Natur.',
            viewDetails: 'Details Anzeigen',
            from: 'ab',
            perNight: 'pro Nacht',
            guests: 'Gäste',
            items: {
                oceanView: {
                    name: 'Bungalow mit Meerblick',
                    description: 'Ein friedlicher Rückzugsort direkt am Meer, eingebettet in die Natur. Wachen Sie mit Vogelgezwitscher auf und genießen Sie den ganzen Tag den Meerblick.'
                },
                poolside: {
                    name: 'Bungalow am Pool',
                    description: 'Fühlen Sie sich wie zu Hause in gemütlichen Ecken, die sorgfältig neben dem kühlen Wasser des Pools vorbereitet wurden. Jeder Moment ist für Sie besonders.'
                },
                garden: {
                    name: 'Bungalow mit Gartenblick',
                    description: 'Entspannen Sie in einer friedlichen Umgebung umgeben von Grün. Genießen Sie Ihren Kaffee, während Sie den Klängen der Natur lauschen.'
                }
            }
        },
        about: {
            title: 'Über Uns',
            subtitle: 'Ein friedlicher Rückzugsort inmitten der Natur',
            description: 'Olympos Coconut Apart ve Pansiyon ist ein besonderer Rückzugsort im Herzen der Natur, direkt am Meer. In unseren sorgfältig gestalteten Bungalows erleben Sie die perfekte Harmonie von modernem Komfort und natürlicher Schönheit.',
            description2: 'Fühlen Sie sich wie zu Hause in gemütlichen Ecken, die sorgfältig neben dem kühlen Wasser des Pools vorbereitet wurden. Wachen Sie mit Vogelgezwitscher auf und genießen Sie den ganzen Tag den Meerblick.',
            description3: 'Manchmal reicht die Ruhe einer Ecke, die Wärme einer Tasse Kaffee oder die Frische eines kühlen Cocktails. Seyr-i Mavi wird Ihnen gut tun.',
            stats: {
                nature: 'Inmitten der Natur',
                service: 'Persönlicher Service'
            },
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
        gallery: {
            title: 'Galerie',
            subtitle: 'Entdecken Sie Ihre Erinnerungen',
            description: 'Bilder der friedlichen Momente, die Sie bei Olympos Coconut Apart ve Pansiyon erwarten'
        },
        journal: {
            title: 'Tagebuch',
            subtitle: 'Unsere Geschichten und Erfahrungen',
            readMore: 'Weiterlesen'
        },
        booking: {
            title: 'Buchung',
            subtitle: 'Planen Sie Ihren Traumurlaub',
            description: 'Wählen Sie Ihre Daten und erleben Sie eine unvergessliche Reise. Unser Team ist 24/7 für Ihre Reservierung bereit.',
            checkIn: 'Check-in Datum',
            checkOut: 'Check-out Datum',
            guests: 'Anzahl der Gäste',
            guestCount: 'Gäste',
            checkAvailability: 'Verfügbarkeit Prüfen',
            contactPhone: 'Möchten Sie lieber mit jemandem sprechen?',
            name: 'Ihr Name',
            email: 'E-Mail',
            phone: 'Telefon',
            message: 'Ihre Nachricht',
            submit: 'Buchungsanfrage Senden'
        },
        footer: {
            description: 'Ein besonderer Rückzugsort im Herzen der Natur, wo Luxus und Frieden aufeinandertreffen.',
            quickLinks: 'Schnelllinks',
            experiences: 'Erlebnisse',
            experiencesList: {
                nature: 'Inmitten der Natur',
                seaview: 'Meerblick',
                pool: 'Pool-Genuss',
                peaceful: 'Friedliche Umgebung',
                service: 'Persönlicher Service'
            },
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
            gallery: 'Галерея',
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
            description: 'В Olympos Coconut Apart ve Pansiyon каждое бунгало тщательно спроектировано, предлагая идеальную гармонию комфорта и природы.',
            viewDetails: 'Подробнее',
            from: 'от',
            perNight: 'за ночь',
            guests: 'Гостей',
            items: {
                oceanView: {
                    name: 'Бунгало с видом на море',
                    description: 'Спокойный отдых прямо у моря, в окружении природы. Просыпайтесь под пение птиц и наслаждайтесь видом на море в течение всего дня.'
                },
                poolside: {
                    name: 'Бунгало у бассейна',
                    description: 'Почувствуйте себя как дома в уютных уголках, тщательно подготовленных рядом с прохладными водами бассейна. Каждый момент для вас особенный.'
                },
                garden: {
                    name: 'Бунгало с видом на сад',
                    description: 'Отдохните в спокойной обстановке в окружении зелени. Наслаждайтесь кофе, слушая звуки природы.'
                }
            }
        },
        about: {
            title: 'О Нас',
            subtitle: 'Спокойный отдых в окружении природы',
            description: 'Olympos Coconut Apart ve Pansiyon - это особое место для отдыха в самом сердце природы, прямо у моря. В наших тщательно спроектированных бунгало вы испытаете идеальную гармонию современного комфорта и природной красоты.',
            description2: 'Почувствуйте себя как дома в уютных уголках, тщательно подготовленных рядом с прохладными водами бассейна. Просыпайтесь под пение птиц и наслаждайтесь видом на море в течение всего дня.',
            description3: 'Иногда достаточно покоя уголка, тепла чашки кофе или свежести прохладного коктейля. Seyr-i Mavi пойдет вам на пользу.',
            stats: {
                nature: 'В окружении природы',
                service: 'Персональный сервис'
            },
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
        gallery: {
            title: 'Галерея',
            subtitle: 'Откройте для себя воспоминания',
            description: 'Изображения спокойных моментов, ожидающих вас в Olympos Coconut Apart ve Pansiyon'
        },
        journal: {
            title: 'Дневник',
            subtitle: 'Наши истории и впечатления',
            readMore: 'Читать далее'
        },
        booking: {
            title: 'Бронирование',
            subtitle: 'Спланируйте отпуск своей мечты',
            description: 'Выберите даты и испытайте незабываемое путешествие. Наша команда готова 24/7 для вашего бронирования.',
            checkIn: 'Дата заезда',
            checkOut: 'Дата выезда',
            guests: 'Количество гостей',
            guestCount: 'Гостей',
            checkAvailability: 'Проверить наличие',
            contactPhone: 'Хотите поговорить с кем-нибудь?',
            name: 'Ваше имя',
            email: 'Электронная почта',
            phone: 'Телефон',
            message: 'Ваше сообщение',
            submit: 'Отправить запрос на бронирование'
        },
        footer: {
            description: 'Особое место для отдыха в сердце природы, где встречаются роскошь и покой.',
            quickLinks: 'Быстрые ссылки',
            experiences: 'Впечатления',
            experiencesList: {
                nature: 'В окружении природы',
                seaview: 'Вид на море',
                pool: 'Наслаждение бассейном',
                peaceful: 'Спокойная обстановка',
                service: 'Персональный сервис'
            },
            contact: 'Контакты',
            followUs: 'Подписывайтесь',
            rights: 'Все права защищены.'
        }
    }
}
