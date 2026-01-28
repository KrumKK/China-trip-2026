// Datos completos del viaje a China abril 2026

export const tripInfo = {
  title: "China 2026",
  travelers: "2 adultos + 1 niño (4,5 años)",
  totalDays: 20,
  totalNights: 18,
  startDate: "2026-04-01",
  endDate: "2026-04-21",
};

export const flights = [
  {
    id: "f1",
    type: "ida",
    from: "Barcelona (BCN)",
    to: "Pekín (PEK)",
    airline: "Air China",
    date: "2026-04-01",
    departure: "12:30",
    arrival: "05:45+1",
    arrivalDate: "2026-04-02",
    duration: "~11h",
    status: "confirmed",
    notes: "Vuelo directo"
  },
  {
    id: "f2",
    type: "vuelta",
    from: "Shanghái (PVG)",
    to: "Barcelona (BCN)",
    airline: "Air China",
    date: "2026-04-21",
    departure: "00:40",
    arrival: "07:55",
    arrivalDate: "2026-04-21",
    duration: "~13h",
    status: "confirmed",
    notes: "Vuelo directo - Salir hotel 20 abril ~21:30"
  }
];

export const internalTransport = [
  {
    id: "t1",
    type: "train",
    from: "Beijing",
    to: "Xi'an",
    date: "2026-04-08",
    time: "~08:00-12:30",
    duration: "4h30",
    price: "55-80€/persona",
    booking: "Trip.com",
    notes: "Niño <1.2m GRATIS",
    status: "pending"
  },
  {
    id: "t2",
    type: "flight",
    from: "Xi'an",
    to: "Zhangjiajie",
    date: "2026-04-11",
    time: "Mediodía",
    duration: "1h45",
    price: "50-100€/persona",
    booking: "Trip.com",
    notes: "",
    status: "pending"
  },
  {
    id: "t3",
    type: "flight",
    from: "Zhangjiajie",
    to: "Shanghai",
    date: "2026-04-14",
    time: "Mediodía",
    duration: "2h",
    price: "60-120€/persona",
    booking: "Trip.com",
    notes: "Llega a Pudong",
    status: "pending"
  }
];

export const cities = [
  {
    id: "beijing",
    name: "Beijing",
    emoji: "🏯",
    color: "beijing",
    nights: 6,
    dates: "2-7 abril",
    highlights: ["Ciudad Prohibida", "Gran Muralla", "Templo del Cielo", "Palacio de Verano"]
  },
  {
    id: "xian",
    name: "Xi'an",
    emoji: "⚔️",
    color: "xian",
    nights: 3,
    dates: "8-10 abril",
    highlights: ["Guerreros Terracota", "Muralla en bici", "Barrio Musulmán"]
  },
  {
    id: "zhangjiajie",
    name: "Zhangjiajie",
    emoji: "🏔️",
    color: "zhangjiajie",
    nights: 3,
    dates: "11-13 abril",
    highlights: ["Montañas Avatar", "Ascensor Bailong", "Tianmen Mountain"]
  },
  {
    id: "shanghai",
    name: "Shanghai",
    emoji: "🎡",
    color: "shanghai",
    nights: 6,
    dates: "14-19 abril",
    highlights: ["Disneyland 2 días", "The Bund", "Yu Garden", "Crucero nocturno"]
  }
];

export const itinerary = {
  beijing: [
    {
      day: 2,
      date: "2026-04-02",
      weekday: "Jueves",
      title: "Llegada + Jet Lag",
      morning: "Llegada 05:45, check-in temprano, descanso",
      afternoon: "Paseo ligero por el barrio",
      evening: "Wangfujing + Mercado escorpiones 🦂",
      notes: "Día suave para adaptarse",
      checklist: []
    },
    {
      day: 3,
      date: "2026-04-03",
      weekday: "Viernes",
      title: "Ciudad Prohibida",
      morning: "Plaza Tiananmen + Ciudad Prohibida (4-5h)",
      afternoon: "Parque Jingshan (vistas panorámicas)",
      evening: "Parque Beihai + paseo en barco",
      notes: "⭐ RESERVAR 7 días antes",
      checklist: [
        { id: "bj1", text: "Reservar Ciudad Prohibida (27 marzo)", done: false }
      ]
    },
    {
      day: 4,
      date: "2026-04-04",
      weekday: "Sábado",
      title: "Gran Muralla",
      morning: "Salir 07:00 → Gran Muralla Mutianyu",
      afternoon: "Teleférico subida + Tobogán bajada 🛝",
      evening: "Regreso Beijing + Cena Pato Pekín 🦆",
      notes: "Coche privado ~700¥ ida/vuelta",
      checklist: [
        { id: "bj2", text: "Reservar coche privado Gran Muralla", done: false }
      ]
    },
    {
      day: 5,
      date: "2026-04-05",
      weekday: "Domingo",
      title: "Templo del Cielo + Hutongs",
      morning: "Templo del Cielo (ver taichi locales)",
      afternoon: "Tour Hutongs en rickshaw + Shichahai",
      evening: "Lago Houhai - ambiente nocturno",
      notes: "Rickshaw ~150-200¥",
      checklist: []
    },
    {
      day: 6,
      date: "2026-04-06",
      weekday: "Lunes",
      title: "Palacio de Verano",
      morning: "Palacio de Verano (3-4h)",
      afternoon: "Barco dragón en Lago Kunming 🐉",
      evening: "Zhongguancun tech market 🖥️ o descanso",
      notes: "Metro Línea 4",
      checklist: []
    },
    {
      day: 7,
      date: "2026-04-07",
      weekday: "Martes",
      title: "Templo Lama + Villa Olímpica",
      morning: "Templo Lama + Templo Confucio",
      afternoon: "Torres Campana y Tambor",
      evening: "Villa Olímpica noche (Nido + Cubo) 🏟️",
      notes: "Luces se encienden ~19:40",
      checklist: []
    }
  ],
  xian: [
    {
      day: 8,
      date: "2026-04-08",
      weekday: "Miércoles",
      title: "Llegada Xi'an",
      morning: "Check-out Beijing + Estación tren 08:00",
      afternoon: "Tren alta velocidad (4h30) → Xi'an ~14:00",
      evening: "Paseo centro + Barrio Musulmán cena 🍢",
      notes: "Primera noche en Xi'an",
      checklist: [
        { id: "xa1", text: "Reservar tren Beijing-Xi'an", done: false }
      ]
    },
    {
      day: 9,
      date: "2026-04-09",
      weekday: "Jueves",
      title: "Guerreros de Terracota",
      morning: "Salir 08:00 → Guerreros Terracota",
      afternoon: "Taller DIY mini guerrero 🎨 (niño)",
      evening: "Fuentes Gran Pagoda Ganso (show 20:30)",
      notes: "⭐ RESERVAR online obligatorio",
      checklist: [
        { id: "xa2", text: "Reservar Guerreros Terracota (2 abril)", done: false }
      ]
    },
    {
      day: 10,
      date: "2026-04-10",
      weekday: "Viernes",
      title: "Muralla en bici",
      morning: "Pequeña Pagoda Ganso + museo",
      afternoon: "Muralla de Xi'an en bici al atardecer 🚲",
      evening: "Última cena Barrio Musulmán",
      notes: "Bicis tandem disponibles",
      checklist: []
    }
  ],
  zhangjiajie: [
    {
      day: 11,
      date: "2026-04-11",
      weekday: "Sábado",
      title: "Llegada Zhangjiajie",
      morning: "Check-out Xi'an + aeropuerto",
      afternoon: "Vuelo Xi'an → Zhangjiajie (1h45)",
      evening: "Check-in Wulingyuan + paseo pueblo",
      notes: "Hotel cerca entrada parque",
      checklist: [
        { id: "zj1", text: "Reservar vuelo Xi'an-Zhangjiajie", done: false }
      ]
    },
    {
      day: 12,
      date: "2026-04-12",
      weekday: "Domingo",
      title: "Parque Nacional - Avatar",
      morning: "Entrada este Parque Nacional",
      afternoon: "Ascensor Bailong 326m 🛗 + Yuanjiajie",
      evening: "Montaña Tianzi (Avatar mountains)",
      notes: "⭐ Entrada válida 4 días",
      checklist: [
        { id: "zj2", text: "Reservar entrada Parque Zhangjiajie", done: false }
      ]
    },
    {
      day: 13,
      date: "2026-04-13",
      weekday: "Lunes",
      title: "Tianmen Mountain",
      morning: "Tianmen Mountain (teleférico 30min)",
      afternoon: "Pasarela cristal + Cueva del Cielo",
      evening: "Ten-Mile Gallery trenecito 🚂",
      notes: "⭐ RESERVAR Tianmen obligatorio",
      checklist: [
        { id: "zj3", text: "Reservar Tianmen Mountain (10-11 abril)", done: false }
      ]
    }
  ],
  shanghai: [
    {
      day: 14,
      date: "2026-04-14",
      weekday: "Martes",
      title: "Llegada Shanghai",
      morning: "Opción: Puente Cristal Gran Cañón",
      afternoon: "Vuelo Zhangjiajie → Shanghai (2h)",
      evening: "Check-in zona Disney + Disneytown paseo",
      notes: "Primera noche Shanghai",
      checklist: [
        { id: "sh1", text: "Reservar vuelo Zhangjiajie-Shanghai", done: false }
      ]
    },
    {
      day: 15,
      date: "2026-04-15",
      weekday: "Miércoles",
      title: "DISNEYLAND DÍA 1 🏰",
      morning: "Apertura parque - TRON + Piratas",
      afternoon: "Zootopia + Seven Dwarfs",
      evening: "ILLUMINATE! fuegos artificiales 🎆",
      notes: "Llegar 1h antes apertura",
      checklist: [
        { id: "sh2", text: "Reservar Disneyland 2 días", done: false }
      ]
    },
    {
      day: 16,
      date: "2026-04-16",
      weekday: "Jueves",
      title: "DISNEYLAND DÍA 2 🏰",
      morning: "Repetir favoritos",
      afternoon: "Atracciones pendientes + fotos",
      evening: "Cena temática + fuegos",
      notes: "Día más relajado",
      checklist: []
    },
    {
      day: 17,
      date: "2026-04-17",
      weekday: "Viernes",
      title: "Yu Garden + Bund",
      morning: "Yu Garden + Bazaar (xiaolongbao)",
      afternoon: "The Bund día + Túnel psicodélico 🌈",
      evening: "Crucero río Huangpu noche 🚢",
      notes: "Crucero ~120-180¥",
      checklist: []
    },
    {
      day: 18,
      date: "2026-04-18",
      weekday: "Sábado",
      title: "Pudong futurista",
      morning: "Tren Maglev 430km/h 🚄",
      afternoon: "Torre Oriental Pearl (vistas)",
      evening: "Nanjing Road + compras",
      notes: "Maglev ~50¥ ida",
      checklist: []
    },
    {
      day: 19,
      date: "2026-04-19",
      weekday: "Domingo",
      title: "Zhujiajiao Water Town",
      morning: "Excursión Zhujiajiao 🏘️",
      afternoon: "Paseo barca + pueblo antiguo",
      evening: "Última cena en The Bund",
      notes: "~1h transporte cada trayecto",
      checklist: []
    },
    {
      day: 20,
      date: "2026-04-20",
      weekday: "Lunes",
      title: "Último día + Aeropuerto",
      morning: "Concesión Francesa + Tianzifang",
      afternoon: "Compras + souvenirs",
      evening: "Cena despedida → Aeropuerto 21:30",
      notes: "⚠️ Vuelo sale 00:40 del día 21",
      checklist: []
    }
  ]
};

export const reservations = [
  {
    id: "r1",
    name: "Ciudad Prohibida",
    city: "Beijing",
    visitDate: "2026-04-03",
    bookBefore: "2026-03-27",
    price: "60¥ adulto (GRATIS <18)",
    website: "gugong.ctrip.com",
    mandatory: true,
    done: false
  },
  {
    id: "r2",
    name: "Guerreros Terracota",
    city: "Xi'an",
    visitDate: "2026-04-09",
    bookBefore: "2026-04-02",
    price: "120¥ (GRATIS <14)",
    website: "bmy.albatrip.cn",
    mandatory: true,
    done: false
  },
  {
    id: "r3",
    name: "Parque Zhangjiajie",
    city: "Zhangjiajie",
    visitDate: "2026-04-12",
    bookBefore: "2026-04-09",
    price: "225¥ 4 días (GRATIS <14)",
    website: "Trip.com",
    mandatory: false,
    done: false
  },
  {
    id: "r4",
    name: "Tianmen Mountain",
    city: "Zhangjiajie",
    visitDate: "2026-04-13",
    bookBefore: "2026-04-11",
    price: "278¥ (GRATIS <14)",
    website: "Trip.com",
    mandatory: true,
    done: false
  },
  {
    id: "r5",
    name: "Shanghai Disneyland (2 días)",
    city: "Shanghai",
    visitDate: "2026-04-15",
    bookBefore: "2026-04-10",
    price: "475¥/356¥ niño x día",
    website: "shanghaidisneyresort.com",
    mandatory: true,
    done: false
  },
  {
    id: "r6",
    name: "Tren Beijing-Xi'an",
    city: "Transporte",
    visitDate: "2026-04-08",
    bookBefore: "2026-03-25",
    price: "55-80€/persona",
    website: "Trip.com",
    mandatory: true,
    done: false
  },
  {
    id: "r7",
    name: "Vuelo Xi'an-Zhangjiajie",
    city: "Transporte",
    visitDate: "2026-04-11",
    bookBefore: "2026-03-25",
    price: "50-100€/persona",
    website: "Trip.com",
    mandatory: true,
    done: false
  },
  {
    id: "r8",
    name: "Vuelo Zhangjiajie-Shanghai",
    city: "Transporte",
    visitDate: "2026-04-14",
    bookBefore: "2026-03-25",
    price: "60-120€/persona",
    website: "Trip.com",
    mandatory: true,
    done: false
  },
  {
    id: "r9",
    name: "Coche privado Muralla",
    city: "Beijing",
    visitDate: "2026-04-04",
    bookBefore: "2026-04-02",
    price: "~700¥",
    website: "Hotel o Klook",
    mandatory: false,
    done: false
  }
];

export const generalChecklist = [
  {
    category: "Documentación",
    items: [
      { id: "doc1", text: "Pasaportes vigentes (mín. 6 meses)", done: false },
      { id: "doc2", text: "Verificar exención visa 30 días", done: false },
      { id: "doc3", text: "Copias digitales pasaportes (nube)", done: false },
      { id: "doc4", text: "Seguro viaje con cobertura médica", done: false },
      { id: "doc5", text: "Avisar al banco de tarjetas", done: false }
    ]
  },
  {
    category: "Apps necesarias",
    items: [
      { id: "app1", text: "WeChat (crear cuenta + pagos)", done: false },
      { id: "app2", text: "Alipay (vincular tarjeta)", done: false },
      { id: "app3", text: "Trip.com (reservas)", done: false },
      { id: "app4", text: "Google Translate (chino offline)", done: false },
      { id: "app5", text: "Maps.me (mapas offline)", done: false },
      { id: "app6", text: "VPN (ExpressVPN/NordVPN)", done: false },
      { id: "app7", text: "DiDi (taxis)", done: false }
    ]
  },
  {
    category: "Para el niño",
    items: [
      { id: "kid1", text: "Snacks familiares", done: false },
      { id: "kid2", text: "Medicamentos (Dalsy, termómetro)", done: false },
      { id: "kid3", text: "Tablet + auriculares + pelis", done: false },
      { id: "kid4", text: "Libros y cuadernos", done: false },
      { id: "kid5", text: "Cochecito ligero o mochila porteo", done: false },
      { id: "kid6", text: "Ropa cómoda + capas", done: false }
    ]
  },
  {
    category: "Equipaje",
    items: [
      { id: "eq1", text: "Maleta grande (facturar)", done: false },
      { id: "eq2", text: "Mochila/maleta cabina", done: false },
      { id: "eq3", text: "Riñonera (documentos + móvil)", done: false },
      { id: "eq4", text: "Adaptador enchufe China", done: false },
      { id: "eq5", text: "Power bank cargada", done: false },
      { id: "eq6", text: "Candado maleta TSA", done: false }
    ]
  }
];

export const usefulInfo = {
  phrases: [
    { chinese: "你好", pinyin: "Nǐ hǎo", spanish: "Hola" },
    { chinese: "谢谢", pinyin: "Xiè xiè", spanish: "Gracias" },
    { chinese: "不要", pinyin: "Bù yào", spanish: "No quiero" },
    { chinese: "多少钱", pinyin: "Duō shǎo qián", spanish: "¿Cuánto cuesta?" },
    { chinese: "厕所在哪里", pinyin: "Cè suǒ zài nǎ lǐ", spanish: "¿Dónde está el baño?" },
    { chinese: "我不吃辣", pinyin: "Wǒ bù chī là", spanish: "No como picante" },
    { chinese: "救命", pinyin: "Jiù mìng", spanish: "¡Auxilio!" },
    { chinese: "医院", pinyin: "Yī yuàn", spanish: "Hospital" },
    { chinese: "太贵了", pinyin: "Tài guì le", spanish: "Muy caro" },
    { chinese: "好的", pinyin: "Hǎo de", spanish: "Vale/OK" }
  ],
  emergency: [
    { name: "Policía", number: "110" },
    { name: "Ambulancia", number: "120" },
    { name: "Bomberos", number: "119" }
  ],
  weather: {
    beijing: "10-22°C, posible lluvia",
    xian: "12-24°C, soleado",
    zhangjiajie: "14-22°C, húmedo, niebla",
    shanghai: "14-22°C, variable"
  },
  tips: [
    "El efectivo casi no se usa - configura Alipay/WeChat Pay",
    "Google/WhatsApp no funcionan sin VPN",
    "Los taxis usan DiDi, no paran en la calle",
    "Regatear es normal en mercados",
    "El agua del grifo NO es potable",
    "Metro cierra ~22:30-23:00"
  ]
};
