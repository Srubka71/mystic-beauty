const MYSTIC_CONFIG = {
  owner: {
    name: "Wiktoria Bentkowska",
    brand: "Mystic Beauty",
    kicker: "Mystic Beauty Wiktoria Bentkowska",
    title: "Naturalne odmładzanie, pielęgnacja i świadoma estetyka.",
    lead:
      "Miejsce stworzone dla osób, które chcą poprawić wygląd skóry naturalnie, bez przerysowania i z pełnym zrozumieniem potrzeb swojej twarzy oraz ciała.",
    bio:
      "W Mystic Beauty najważniejsze są naturalne efekty, komfort i indywidualny dobór zabiegów. Wiktoria pracuje z technologiami i procedurami nastawionymi na jakość skóry, regenerację, lifting bez skalpela, nawilżenie, oczyszczenie oraz poprawę kondycji wybranych obszarów. Każda wizyta opiera się na rozmowie, analizie potrzeb i bezpiecznym dobraniu zabiegu.",
    photo: "assets/owner.jpg",
    instagram: "https://www.instagram.com/mysticbeauty.official/",
    bookingUrl:
      "https://booksy.com/pl-pl/291211_mystic-beauty-wiktoria-bentkowska_medycyna-estetyczna_13750_wroclaw#ba_s=seo",
    address: "Miedziana 4, U4, 53-441 Wrocław",
    rating: "5.0 / 52 opinie"
  },

  brand: {
    name: "Mystic Beauty",
    owner: "Wiktoria Bentkowska",
    offerTitle: "Zabiegi Mystic Beauty.",
    offerDescription:
      "Wybierz kategorię i zabieg z listy po prawej stronie. Zobacz opis, cenę, czas trwania oraz szczegóły, a następnie przejdź do rezerwacji online.",
    primaryButtonLabel: "Zarezerwuj przez Booksy"
  },

  serviceCategories: [
    {
      id: "podczerwien-naturalne-odmladzanie",
      title: "Podczerwień NATURALNE ODMŁADZANIE TWARZY I CIAŁA",
      services: [
        {
          id: "zaffiro-podczerwien",
          label: "Podczerwień",
          title: "ZAFFIRO podczerwień odmładzanie od Lamara Lift",
          subtitle: "Naturalne odmładzanie twarzy i ciała",
          price: "od 750 zł",
          duration: "od 1g 10min",
          effect: "lifting, napięcie i poprawa jakości skóry",
          videoFileName: "zaffiro-podczerwien.mp4",
          shortDescription:
            "Podczerwień ZAFFIRO dla naturalnego odmłodzenia, napięcia i poprawy wyglądu skóry.",
          description:
            "ZAFFIRO to zabieg z kategorii naturalnego odmładzania twarzy i ciała. Wariant dobierany jest do obszaru zabiegowego — od twarzy i okolic oczu, przez szyję, dekolt i dłonie, aż po wybrane partie ciała.",
          details: [
            "Naturalne odmładzanie",
            "Lifting bez skalpela",
            "Twarz i ciało",
            "Dobór obszaru po konsultacji"
          ],
          variants: [
            "Nos - wysmuklenie, odmłodzenie, przeciwdziałanie opadaniu — 850 zł — 1g 10min",
            "Czoło — 750 zł — 1g 10min",
            "Uszy i obszar przy uszach odmładzanie poprawa jakości skóry — 750 zł — 1g 10min",
            "Łokcie — 750 zł — 1g 10min",
            "Usta - naturalne zwiększenie objętości i poprawa konturu — 800 zł — 1g 15min",
            "Podbródek - niwelowanie podwójnego podbródka i napięcie — 950 zł — 1g 20min",
            "Powieki - unoszenie opadającej powieki + okolica pod oczami — 850 zł — 1g 25min",
            "Dłonie — 800 zł — 1g 25min",
            "Szyja — 850 zł — 1g 25min",
            "Powieki - unoszenie opadającej powieki — 900 zł — 1g 30min",
            "Okolica pod biustonoszem przód albo tył — 1100 zł — 1g 30min",
            "Kolana — 800 zł — 1g 40min",
            "Pachy i okolice pach — 1100 zł — 1g 40min",
            "Dekolt — 900 zł — 1g 45min",
            "Podbródek + żuchwa - niwelowanie podwójnego podbródka i poprawa konturu szczęki — 1000 zł — 1g 45min",
            "Boczki — 1200 zł — 1g 50min",
            "Twarz - cała twarz — 1200 zł — 2g",
            "Podbródek + Żuchwa + Szyja — 1000 zł — 2g 15min",
            "Boczki — 1100 zł — 2g 15min",
            "Uda - wewnętrzna lub zewnętrzna strona ud — 1500 zł — 2g 20min",
            "Brzuch — 1700 zł — 2g 30min",
            "Łydki — 1300 zł — 2g 30min",
            "Ramiona tył (tzw. pelikany) lub przód — 1500 zł — 2g 35min",
            "Pośladki — 1900 zł — 2g 45min",
            "Brzuch + Boczki — 2200 zł — 3g",
            "Uda przód + tył — 1500 zł — 3g",
            "Biust — 1400 zł — 3g 45min",
            "Cała Twarz, Powieki, Usta, Nos + Owal, Podbródek + Szyja 25-30 rok życia + Maska Tlenoterapia / maska z medyczną LED — 1800 zł — 3g 45min",
            "Cała Twarz, Powieki, Usta, Nos + Owal, Podbródek + Szyja PREMIUM po 40 roku życia + Maska Tlenoterapia / maska z medyczną LED — 1600 zł — 3g 45min",
            "Cała Twarz, Powieki, Usta, Nos + Owal, Podbródek + Szyja PLUS po 30 roku życia + Maska Tlenoterapia / maska z medyczną LED"
          ],
          video: ""
        },
        {
          id: "mystic-lift",
          label: "Mystic Lift",
          title: "MYSTIC Lift ✨ Autorski Lifting trudnych obszarów",
          subtitle: "Autorski lifting trudnych obszarów",
          price: "1000 zł",
          duration: "1g 30min",
          effect: "lifting trudnych obszarów",
          videoFileName: "mystic-lift.mp4",
          shortDescription:
            "Autorski zabieg liftingujący dla obszarów wymagających szczególnej pracy.",
          description:
            "MYSTIC Lift to autorski zabieg ukierunkowany na lifting trudnych obszarów. Jest propozycją dla osób, które chcą poprawić napięcie, świeżość i wygląd skóry bez przerysowanego efektu.",
          details: [
            "Autorska procedura",
            "Lifting trudnych obszarów",
            "Naturalny efekt",
            "Dobór po konsultacji"
          ],
          variants: [],
          video: ""
        }
      ]
    },

    {
      id: "full-pakiet",
      title: "FULL PAKIET",
      services: [
        {
          id: "full-pakiet-odmladzanie",
          label: "Full pakiet",
          title: "Full Pakiet ODMŁADZANIE Lifting bez skalpela",
          subtitle: "Rozbudowany pakiet odmładzający",
          price: "2300 zł",
          duration: "5g 20min",
          effect: "kompleksowe odmłodzenie",
          videoFileName: "full-pakiet-odmladzanie.mp4",
          previewVideo: "../assets/videos/test.mp4",
          shortDescription:
            "Rozbudowany pakiet odmładzający dla osób szukających kompleksowego efektu.",
          description:
            "Full Pakiet ODMŁADZANIE to rozbudowana procedura liftingująca bez skalpela. To propozycja dla osób, które chcą podejść do skóry kompleksowo i zaplanować dłuższy, mocniejszy zabieg.",
          details: [
            "Lifting bez skalpela",
            "Kompleksowe podejście",
            "Dłuższa procedura",
            "Naturalny kierunek odmładzania"
          ],
          variants: [],
          video: ""
        },
        {
          id: "naturalne-powiekszanie-ust",
          label: "Usta",
          title: "Naturalne POWIĘKSZANIE UST bez igieł Full pakiet",
          subtitle: "Naturalna objętość i kontur",
          price: "1000 zł",
          duration: "2g 10min",
          effect: "naturalne podkreślenie ust",
          videoFileName: "naturalne-powiekszanie-ust.mp4",
          previewVideo: "../assets/videos/test2.mp4",
          shortDescription:
            "Naturalne zwiększenie objętości i poprawa wyglądu ust bez klasycznego przerysowania.",
          description:
            "Full pakiet naturalnego powiększania ust bez igieł jest propozycją dla osób, które chcą subtelnie poprawić wygląd ust, ich objętość, nawilżenie i kontur.",
          details: [
            "Naturalny efekt",
            "Poprawa konturu ust",
            "Bez przerysowania",
            "Dobór po konsultacji"
          ],
          variants: [],
          video: ""
        }
      ]
    },

    {
      id: "peeling-medyczny",
      title: "PEELING MEDYCZNY - PRZEBARWIENIA, TRĄDZIK, GLOW",
      services: [
        {
          id: "biorepeel",
          label: "Peeling medyczny",
          title: "Peeling MEDYCZNY BioRePeel",
          subtitle: "Przebarwienia, trądzik, glow",
          price: "od 350 zł",
          duration: "od 1g 10min",
          effect: "wygładzenie, odświeżenie i glow",
          videoFileName: "biorepeel.mp4",
          shortDescription:
            "Peeling medyczny dla skóry z przebarwieniami, trądzikiem lub potrzebą odświeżenia.",
          description:
            "BioRePeel to peeling medyczny stosowany przy potrzebie odświeżenia skóry, pracy z przebarwieniami, trądzikiem i efektem glow. Dostępne są warianty na twarz, dłonie oraz wybrane obszary ciała.",
          details: [
            "Przebarwienia",
            "Trądzik",
            "Efekt glow",
            "Warianty na twarz i ciało"
          ],
          variants: [
            "Twarz + Maska dobrana po zabiegu — 350 zł — 1g 10min",
            "Dłonie + Maska Algowa — 500 zł — 1g 25min",
            "Brzuch / Plecy / Pachy i okolica pach / Ramiona / Nogi / inna partia ciała — 450 zł — 1g 25min",
            "Twarz + Szyja + Maska dobrana po zabiegu — 550 zł — 1g 30min",
            "Twarz + Szyja + Dekolt + Maska dobrana po zabiegu"
          ],
          video: ""
        }
      ]
    },

    {
      id: "rytual-nawilzajacy",
      title: "RYTUAŁ SILNIE NAWILŻAJĄCY STYMULUJĄCY",
      services: [
        {
          id: "mystic-hydro-glow",
          label: "Hydro Glow",
          title: "MYSTIC HYDRO GLOW Ultradźwięki + Oksybrazja + O2",
          subtitle: "Ultradźwięki, oksybrazja i tlen",
          price: "650 zł",
          duration: "1g 30min",
          effect: "nawilżenie, dotlenienie i glow",
          videoFileName: "mystic-hydro-glow.mp4",
          shortDescription:
            "Silnie nawilżający rytuał dla skóry potrzebującej odświeżenia, dotlenienia i glow.",
          description:
            "MYSTIC HYDRO GLOW łączy ultradźwięki, oksybrazję i tlen. To rytuał dla skóry zmęczonej, odwodnionej, pozbawionej świeżości lub wymagającej delikatnego pobudzenia.",
          details: [
            "Ultradźwięki",
            "Oksybrazja",
            "O2",
            "Nawilżenie i glow"
          ],
          variants: [
            "TWARZ — 650 zł — 1g 30min",
            "USTA — 650 zł — 1g 30min",
            "SZYJA / DEKOLT / DŁONIE / inny obszar na ciele"
          ],
          video: ""
        }
      ]
    },

    {
      id: "tradzik",
      title: "TRĄDZIK ZACZERWIENIENIA STANY ZAPALNE",
      services: [
        {
          id: "leczenie-tradziku",
          label: "Trądzik",
          title: "Leczenie Trądziku zaczerwienień i stanów zapalnych",
          subtitle: "Wsparcie skóry problematycznej",
          price: "700 zł",
          duration: "1g 50min",
          effect: "wyciszenie i poprawa kondycji skóry",
          videoFileName: "leczenie-tradziku.mp4",
          shortDescription:
            "Zabieg dla skóry z trądzikiem, zaczerwienieniami i stanami zapalnymi.",
          description:
            "Zabieg ukierunkowany na skórę problematyczną, zaczerwienienia i stany zapalne. To propozycja dla osób, które chcą wyciszyć skórę, poprawić jej kondycję i dobrać dalszy plan pielęgnacyjny.",
          details: [
            "Trądzik",
            "Zaczerwienienia",
            "Stany zapalne",
            "Poprawa komfortu skóry"
          ],
          variants: [],
          video: ""
        }
      ]
    },

    {
      id: "oczyszczanie",
      title: "OCZYSZCZANIE 🫧 + Nawilżanie + Dotlenianie",
      services: [
        {
          id: "mystic-glow-peeling-wodny",
          label: "Oczyszczanie",
          title: "Oczyszczanie MYSTIC GLOW PEELING WODNY + O2 + ampułka",
          subtitle: "Oczyszczanie, nawilżanie, dotlenianie",
          price: "od 350 zł",
          duration: "od 1g",
          effect: "oczyszczenie i dotlenienie",
          videoFileName: "mystic-glow-peeling-wodny.mp4",
          shortDescription:
            "Oczyszczający zabieg z peelingiem wodnym, tlenem i ampułką pielęgnacyjną.",
          description:
            "MYSTIC GLOW to zabieg oczyszczający i odświeżający, łączący peeling wodny, O2 oraz ampułkę. Dostępne są warianty na twarz, skórę głowy, plecy lub inne obszary.",
          details: [
            "Peeling wodny",
            "O2",
            "Ampułka pielęgnacyjna",
            "Twarz, skóra głowy lub ciało"
          ],
          variants: [
            "Peeling wodny - skóra głowy — 350 zł — 1g 5min",
            "Peeling wodny - plecy lub inna część ciała + krem/ampułka — 350 zł — 1g 5min",
            "Peeling wodny - twarz + krem/ampułka — 400 zł — 1g 30min",
            "Peeling wodny - twarz + szyja + dekolt + krem/ampułka"
          ],
          video: ""
        }
      ]
    },

    {
      id: "mezoterapia",
      title: "MEZOTERAPIA",
      services: [
        {
          id: "mezoterapia-neauvia",
          label: "Mezoterapia",
          title: "MEZOTERAPIA MEDYCZNYM NEAUVIA ORGANIC HYDRO DELUXE",
          subtitle: "Nawilżenie i stymulacja skóry",
          price: "od 800 zł",
          duration: "od 1g 30min",
          effect: "nawilżenie i poprawa jakości skóry",
          videoFileName: "mezoterapia-neauvia.mp4",
          shortDescription:
            "Mezoterapia preparatem Neauvia Organic Hydro Deluxe dla poprawy nawilżenia i jakości skóry.",
          description:
            "Mezoterapia Neauvia Organic Hydro Deluxe to zabieg dla skóry wymagającej nawilżenia, odżywienia i poprawy jakości. W ofercie dostępne są różne obszary zabiegowe.",
          details: [
            "Nawilżenie",
            "Poprawa jakości skóry",
            "Różne obszary",
            "Dobór po konsultacji"
          ],
          variants: [
            "szyja — 800 zł — 1g 30min",
            "inna partia ciała 2,5 ml preparatu — 800 zł — 1g 30min",
            "dekolt — 800 zł — 1g 30min",
            "dłonie — 800 zł — 1g 30min",
            "twarz — 800 zł — 1g 30min",
            "twarz, szyja i dekolt - 2 x 2,5 ml preparatu — 1400 zł — 2g"
          ],
          video: ""
        },
        {
          id: "nawilzanie-stymulacja-ust",
          label: "Usta",
          title: "NAWILŻANIE + STYMULACJA UST",
          subtitle: "Regeneracja i poprawa wyglądu ust",
          price: "650 zł",
          duration: "1g 10min",
          effect: "nawilżenie i stymulacja",
          videoFileName: "nawilzanie-stymulacja-ust.mp4",
          shortDescription:
            "Zabieg poprawiający nawilżenie, komfort i wygląd ust w naturalnym kierunku.",
          description:
            "Nawilżanie i stymulacja ust to zabieg dla osób, które chcą poprawić wygląd ust, ich komfort, nawilżenie i subtelną świeżość bez przerysowanego efektu.",
          details: [
            "Nawilżenie ust",
            "Stymulacja",
            "Naturalny efekt",
            "Poprawa komfortu"
          ],
          variants: [],
          video: ""
        },
        {
          id: "terapia-peptydowa-skory-glowy",
          label: "Skóra głowy",
          title: "TERAPIA PEPTYDOWA- MEZOTERAPIA SKÓRY GŁOWY",
          subtitle: "Wsparcie skóry głowy",
          price: "od 700 zł",
          duration: "1g 10min",
          effect: "zagęszczanie i regeneracja",
          videoFileName: "terapia-peptydowa-skory-glowy.mp4",
          shortDescription:
            "Terapia peptydowa skóry głowy, dostępna również jako seria zabiegów.",
          description:
            "Terapia peptydowa skóry głowy to zabieg wspierający kondycję skóry głowy. W ofercie dostępny jest pojedynczy zabieg oraz seria Dr Cyj.",
          details: [
            "Skóra głowy",
            "Terapia peptydowa",
            "Możliwość serii",
            "Dobór po konsultacji"
          ],
          variants: [
            "Dr Cyj — 700 zł — 1g 10min",
            "Dr Cyj seria 5 zabiegów — 3000 zł — 1g 10min"
          ],
          video: ""
        },
        {
          id: "odbudowa-brwi",
          label: "Brwi",
          title: "ZAGĘSZCZANIE I NATURALNA ODBUDOWA BRWI",
          subtitle: "Naturalna regeneracja brwi",
          price: "od 600 zł",
          duration: "1g",
          effect: "zagęszczenie i odbudowa",
          videoFileName: "odbudowa-brwi.mp4",
          shortDescription:
            "Zabieg wspierający naturalną odbudowę i zagęszczanie brwi.",
          description:
            "Zagęszczanie i naturalna odbudowa brwi to propozycja dla osób, które chcą poprawić wygląd brwi i wesprzeć ich naturalną regenerację.",
          details: [
            "Naturalna odbudowa",
            "Zagęszczanie brwi",
            "Możliwość serii",
            "Subtelny efekt"
          ],
          variants: [
            "Zagęszczanie i Naturalna odbudowa brwi seria 5 zabiegów — 2500 zł — 1g",
            "Zagęszczanie i Naturalna Odbudowa Brwi — 600 zł — 1g"
          ],
          video: ""
        },
        {
          id: "mezoterapia-nad-complex",
          label: "Mezoterapia",
          title: "MEZOTERAPIA NAD + Complex",
          subtitle: "Zaawansowana mezoterapia",
          price: "900 zł",
          duration: "1g 15min",
          effect: "regeneracja i poprawa jakości skóry",
          videoFileName: "mezoterapia-nad-complex.mp4",
          shortDescription:
            "Zaawansowana mezoterapia NAD + Complex ukierunkowana na regenerację skóry.",
          description:
            "MEZOTERAPIA NAD + Complex to zabieg z kategorii mezoterapii, nastawiony na wsparcie regeneracji i poprawę jakości skóry.",
          details: [
            "Mezoterapia",
            "Regeneracja",
            "Poprawa jakości skóry",
            "Dobór po konsultacji"
          ],
          variants: [],
          video: ""
        }
      ]
    },

    {
      id: "regeneracja-paznokci",
      title: "ODBUDOWA I REGENERACJA PŁYTKI PAZNOKCI",
      services: [
        {
          id: "regeneracja-paznokci-podczerwien",
          label: "Paznokcie",
          title: "Regeneracja odbudowa paznokci metodą podczerwieni",
          subtitle: "Regeneracja płytki paznokci",
          price: "650 zł",
          duration: "1g 15min",
          effect: "odbudowa i regeneracja",
          videoFileName: "regeneracja-paznokci-podczerwien.mp4",
          shortDescription:
            "Zabieg regeneracji i odbudowy płytki paznokci metodą podczerwieni.",
          description:
            "Regeneracja odbudowa paznokci metodą podczerwieni to zabieg dla osób, które chcą wesprzeć wygląd i kondycję płytki paznokci.",
          details: [
            "Odbudowa płytki",
            "Regeneracja",
            "Metoda podczerwieni",
            "Dobór po konsultacji"
          ],
          variants: [],
          video: ""
        }
      ]
    },

    {
      id: "zabieg-po-konsultacji",
      title: "ZABIEG DOBRANY PO KONSULTACJI",
      services: [
        {
          id: "pierwsza-wizyta",
          label: "Pierwsza wizyta",
          title: "Nie wiem co wybrać - Pierwsza wizyta",
          subtitle: "Zabieg dobierany po konsultacji",
          price: "od 300 zł",
          duration: "od 1g 30min",
          effect: "dobór zabiegu na miejscu",
          videoFileName: "pierwsza-wizyta.mp4",
          shortDescription:
            "Opcja dla osób, które nie wiedzą, jaki zabieg wybrać i chcą zacząć od konsultacji.",
          description:
            "Pierwsza wizyta to propozycja dla osób, które nie wiedzą, od czego zacząć. Po konsultacji dobierany jest krótki lub dłuższy zabieg odpowiedni do potrzeb skóry.",
          details: [
            "Dobór po konsultacji",
            "Dla nowych klientek i klientów",
            "Możliwość wykonania zabiegu",
            "Plan dalszego działania"
          ],
          variants: [
            "Po konsultacji wykonujemy krótki szybki zabieg — 300 zł+ — 1g 30min",
            "Po konsultacji wykonujemy długi rozbudowany zabieg — 600 zł+ — 3g 30min"
          ],
          video: ""
        }
      ]
    },

    {
      id: "zabiegi-na-cialo",
      title: "ZABIEGI NA CIAŁO 🧬 USUWANIE TKANKI TŁUSZCZOWEJ",
      services: [
        {
          id: "lipoliza-cincelar",
          label: "Ciało",
          title: "LIPOLIZA Cincelar+ Usuwanie tkanki tłuszczowej",
          subtitle: "Modelowanie wybranych obszarów",
          price: "od 400 zł",
          duration: "od 50min",
          effect: "modelowanie sylwetki",
          videoFileName: "lipoliza-cincelar.mp4",
          shortDescription:
            "Zabiegi na ciało ukierunkowane na redukcję tkanki tłuszczowej i modelowanie sylwetki.",
          description:
            "Lipoliza Cincelar+ to zabieg na ciało przeznaczony do pracy z wybranymi obszarami, takimi jak podbródek, brzuch, uda, ramiona, boczki i inne partie wymagające modelowania.",
          details: [
            "Redukcja podbródka",
            "Modelowanie sylwetki",
            "Różne obszary ciała",
            "Dobór liczby ampułek"
          ],
          variants: [
            "Redukcja podbródka — 400 zł — 50min",
            "Modelowanie sylwetki 1 ampułka (partia brzucha, ud, ramion, boczków i innych obszarów) — 450 zł — 1g",
            "Modelowanie sylwetki 2 ampułki (brzuch, uda, ramiona, boczki i inne obszary) — 850 zł — 1g 10min",
            "Modelowanie sylwetki 4 ampułki (brzuch, uda, boczki, wałeczki na plecach, ramiona i inne obszary) — 1500 zł — 1g 15min"
          ],
          video: ""
        }
      ]
    },

    {
      id: "konsultacja",
      title: "KONSULTACJA",
      services: [
        {
          id: "konsultacja-przed-zabiegiem",
          label: "Konsultacja",
          title: "Konsultacja przed zabiegiem",
          subtitle: "Pierwszy krok przed wyborem procedury",
          price: "Darmowa",
          duration: "20min",
          effect: "dobór zabiegu",
          videoFileName: "konsultacja-przed-zabiegiem.mp4",
          shortDescription:
            "Krótka konsultacja przed zabiegiem, która pomaga dobrać właściwy kierunek działania.",
          description:
            "Konsultacja przed zabiegiem to najlepszy początek, jeśli nie masz pewności, co wybrać. Podczas rozmowy omawiane są potrzeby skóry, oczekiwania i najlepsza ścieżka zabiegowa.",
          details: [
            "Dobór odpowiedniego zabiegu",
            "Omówienie oczekiwań",
            "Wstępna analiza potrzeb",
            "Możliwość dalszej rezerwacji"
          ],
          variants: [],
          video: ""
        },
        {
          id: "konsultacja-kosmetologiczna-plan",
          label: "Plan beauty",
          title: "Konsultacja kosmetologiczno - estetyczna + Plan",
          subtitle: "Rozbudowana analiza i plan działania",
          price: "350 zł",
          duration: "1g",
          effect: "indywidualny plan",
          videoFileName: "konsultacja-kosmetologiczna-plan.mp4",
          shortDescription:
            "Rozbudowana konsultacja z planem pielęgnacyjno-zabiegowym dobranym do potrzeb skóry.",
          description:
            "Konsultacja kosmetologiczno-estetyczna z planem to opcja dla osób, które chcą świadomie zaplanować pielęgnację i zabiegi. To dobry wybór przy bardziej złożonych potrzebach skóry.",
          details: [
            "Indywidualny plan",
            "Szersza analiza potrzeb",
            "Dobór procedur",
            "Kierunek pielęgnacji domowej"
          ],
          variants: [],
          video: ""
        }
      ]
    },

    {
      id: "terapia-blizn",
      title: "TERAPIA BLIZN / ROZSTĘPÓW",
      services: [
        {
          id: "redukcja-blizn-rozstepow",
          label: "Regeneracja",
          title: "REDUKCJA BLIZN/ROZSTĘPÓW",
          subtitle: "Terapia regeneracyjna",
          price: "350 zł+",
          duration: "1g",
          effect: "poprawa wyglądu skóry",
          videoFileName: "redukcja-blizn-rozstepow.mp4",
          shortDescription:
            "Terapia ukierunkowana na poprawę wyglądu blizn, rozstępów i jakości skóry.",
          description:
            "Redukcja blizn i rozstępów to zabieg regeneracyjny dla skóry wymagającej poprawy struktury, wyglądu i jakości. Zakres procedury dobierany jest indywidualnie.",
          details: [
            "Blizny",
            "Rozstępy",
            "Regeneracja skóry",
            "Dobór po konsultacji"
          ],
          variants: [],
          video: ""
        }
      ]
    }
  ],

  infoBar: [
    "Mystic Beauty Wrocław",
    "Miedziana 4, U4",
    "Ocena 5.0 na Booksy",
    "Rezerwacje online",
    "Naturalne efekty"
  ]
};

MYSTIC_CONFIG.services = MYSTIC_CONFIG.serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    ...service,
    categoryId: category.id,
    categoryTitle: category.title
  }))
);
