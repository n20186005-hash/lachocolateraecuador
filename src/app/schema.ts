export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "lachocolateraecuador.com"}`;
  const lang = locale === "en" ? "en-US" : locale === "es" ? "es-EC" : "zh-CN";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "LandmarksOrHistoricalBuildings"],
        "name": locale === "en" ? "La Chocolatera" : locale === "es" ? "La Chocolatera" : "La Chocolatera（巧克力海）",
        "description": locale === "en"
          ? "La Chocolatera is a dramatic rocky cliff coastline at the westernmost point of mainland Ecuador, famous for its unique 'chocolate sea' phenomenon where colliding ocean currents turn the water dark brown."
          : locale === "es"
          ? "La Chocolatera es una dramática costa de acantilados rocosos en el punto más occidental del Ecuador continental, famosa por su único fenómeno del 'mar chocolate' donde las corrientes oceánicas que colisionan oscurecen el agua."
          : "La Chocolatera 是位于厄瓜多尔大陆最西端的礁石悬崖海岸，以独特的\"巧克力海\"自然奇观闻名——两大洋流交汇使海水呈现深棕褐色。",
        "url": `${baseUrl}/${locale}`,
        "touristType": ["EcoTourism", "Surfing", "WildlifeObservation", "GeographicExtreme"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -2.2149695,
          "longitude": -80.9681376
        },
        "geoContains": {
          "@type": "GeoCoordinates",
          "latitude": -2.2149695,
          "longitude": -80.9681376,
          "name": "Punta Santa Elena – Westernmost point of mainland Ecuador"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "navalBaseAccess",
            "value": "true",
            "description": "Located inside Base Naval de Salinas – passport/ID required at military checkpoint"
          },
          {
            "@type": "PropertyValue",
            "name": "seaLionColony",
            "value": "La Lobería adyacent",
            "description": "Adjacent sea lion colony – year-round resident marine mammals"
          },
          {
            "@type": "PropertyValue",
            "name": "swimmingAllowed",
            "value": "false",
            "description": "STRICTLY NO swimming – dangerous rip currents, multiple drownings recorded"
          },
          {
            "@type": "PropertyValue",
            "name": "oceanCurrents",
            "value": "Humboldt Current + Equatorial Current",
            "description": "Two major ocean currents collide here, creating the 'chocolate sea' phenomenon"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "15:00",
          "description": "Subject to naval base military control – may change without notice"
        },
        "leastBathroomENNSI": "https://www.ambiente.gob.ec/",
        "isAccessibleForFree": true,
        "maximumAttendeeCapacity": 200,
        "publicAccess": true,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Base Naval de Salinas",
          "addressLocality": "Salinas",
          "addressRegion": "Santa Elena",
          "addressCountry": "EC",
          "postalCode": "RX6Q+PX"
        },
        "containsPlace": [
          {
            "@type": "Zoo",
            "name": "La Lobería",
            "description": "Sea lion colony adjacent to La Chocolatera – free public viewing from safe distances"
          }
        ],
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "headline": locale === "en" ? "The Chocolate Sea: Where Two Oceans Collide" : locale === "es" ? "El Mar Chocolate: Donde Dos Océanos Colisionan" : "巧克力海：两大洋流交汇处",
            "about": "Geographic and oceanographic explanation of the 'chocolate sea' phenomenon at Punta Santa Elena"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Salinas Attractions" : locale === "es" ? "Atractivos de Salinas" : "萨利纳斯景点",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };
}
