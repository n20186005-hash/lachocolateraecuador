export type Locale = "zh" | "en" | "es";

export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[]; buildings: { title: string; items: string[]; conclusion: string } };
  ecology: { title: string; sections: EcologySection[] };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; animals: { title: string; content: string }; bring: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "萨尔瓦多海岸线上的自然奇观与冲浪天堂", title: "La Chocolatera", subtitle: "萨尔瓦多省萨利纳斯市", cta: "探索海岸风光" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "La Chocolatera 位于厄瓜多尔圣埃伦娜省萨尔瓦多市（Salinas）最西端的海岸线上，是该国大陆最西端的著名旅游胜地。这里拥有壮丽的太平洋海景、金色的沙滩和得天独厚的海浪条件，是厄瓜多尔最受欢迎的海滨度假胜地之一。\n\nLa Chocolatera 的名字来源于历史上该地区曾存在的可可种植园（Chocolate 意为巧克力）。如今，这里已成为集冲浪、海滩休闲、观鲸和欣赏日落于一体的综合性 coastal destination。干净的海水、稳定的海浪和完善的旅游设施吸引着来自世界各地的游客。",
      p2: "La Chocolatera 的海滩绵延数公里，沙质细腻，海水清澈。这里是冲浪爱好者的天堂，全年都有适合不同水平冲浪者的海浪。除了水上运动，游客还可以在海滩上享受日光浴、骑马漫步，或是在沿海的悬崖步道上欣赏壮丽的太平洋日落。建议安排在清晨或傍晚时分游览，以避开正午的强烈阳光并欣赏到最美的日出日落景色。",
      highlights: { title: "景点速览", items: ["地理位置：厄瓜多尔，圣埃伦娜省，萨利纳斯市", "厄瓜多尔大陆最西端的著名海滩", "营业时间：08:00–15:00", "特色活动：冲浪、海滩休闲、观鲸、欣赏日落", "配套设施：冲浪学校、餐厅、停车场"] },
      timeline: { title: "发展历程", events: [
        { period: "20世纪中期: 早期开发", description: "La Chocolatera 地区开始作为萨利纳斯市延伸的海滨休闲区域被开发，初期主要服务于当地居民周末休闲。" },
        { period: "1990年代: 旅游业兴起", description: "随着厄瓜多尔海滨旅游业的蓬勃发展，La Chocolatera 凭借其优质的海浪和海滩条件，逐渐成为国内外游客热衷的冲浪和海滨度假目的地。" },
        { period: "2000年代至今: 基础设施完善", description: "当地政府持续投资改善旅游基础设施，包括停车场、海滨步道、冲浪学校、餐厅和安保设施，使 La Chocolatera 成为安全、便利的家庭友好型海滨度假区。" }
      ]},
      management: { title: "景点管理与官方机构", content: "La Chocolatera 海滩由萨利纳斯市政府和圣埃伦娜省政府共同管理和维护。作为免费对外开放的公共海滩，政府致力于保持其清洁、安全和良好的旅游环境。" }
    },
    history: {
      title: "历史背景与文化记忆",
      intro: "La Chocolatera 的名字承载着这片土地的历史记忆。在西班牙殖民时期及之后的一段时间里，这一地区曾是可可（巧克力原料）种植园的一部分。'Chocolatera' 这个名称便来源于此，意为'巧克力生产地'。虽然如今的可可种植已不再，但这个富有诗意的名字却被保留了下来，成为了这片美丽海岸线的代名词。\n\n随着时间的推移，这里从一片农业用地逐渐转变为厄瓜多尔最重要的海滨旅游目的地之一。萨利纳斯市作为圣埃伦娜省的主要旅游城市，其西端的 La Chocolatera 因其未被过度开发的自然美景和优良的海浪条件而备受青睐。",
      sections: [
        { subtitle: "1. 地名由来：从可可园到旅游胜地", content: "La Chocolatera 这一名称直接翻译为'巧克力屋'或'巧克力生产地'。在历史上，厄瓜多尔沿海地区的可可豆品质优良，这一地区曾遍布可可种植园。虽然农业活动已经停止，但地名作为历史的见证被完整保留。\n\n如今，当人们来到 La Chocolatera，虽然不再看到可可树，但名字背后的历史故事却为这片海滩增添了一层文化的厚度。游客在享受阳光海滩的同时，也在不经意间触摸着这片土地的历史脉络。" },
        { subtitle: "2. 萨尔瓦多市的旅游崛起", content: "萨尔瓦多市（Salinas）是圣埃伦娜省的一座沿海城市，以其优美的海滩和完备的旅游设施而闻名。作为厄瓜多尔最具代表性的海滨度假城市之一，萨利纳斯在20世纪后期开始大力发展旅游业。\n\nLa Chocolatera 位于萨利纳斯市的最西端，被认为是该市最美、最适宜冲浪的海滩段。随着城市旅游基础设施的不断完善，La Chocolatera 逐渐成为了萨利纳斯乃至整个厄瓜多尔海滨旅游的亮丽名片。" }
      ],
      buildings: {
        title: "周边文化看点",
        items: [
          "圣埃伦娜考古博物馆（Museo de la Liga Cantonal de Santa Elena）：了解该地区前哥伦布时期的历史文化。",
          "萨利纳斯海洋博物馆（Museo Oceanográfico de Salinas）：展示厄瓜多尔丰富的海洋生物多样性。",
          " Punta Carnero 海滩：距离 La Chocolatera 不远的另一个优质海滩，以清澈的海水和丰富的海洋生物闻名。"
        ],
        conclusion: "La Chocolatera 不仅是一片美丽的海滩，更是厄瓜多尔海滨文化的缩影。在这里，您可以感受到当地人对海洋的热爱，以及他们将自然美景与旅游休闲完美结合的生活智慧。"
      }
    },
    ecology: {
      title: "生态与海洋环境",
      sections: [
        { subtitle: "海洋生态与生物多样性", content: "La Chocolatera 的海域是厄瓜多尔太平洋沿岸重要的海洋生态系统之一。这里的水质清澈，海洋生物多样性丰富。在合适的季节（通常在6月至9月），游客还有机会在近海看到座头鲸（Humpback Whale）和海豚。\n\n海滩周围的岩石区和潮汐池也是观察海洋生物的绝佳地点。退潮时，您可以在潮汐池中看到各种贝类、海星和小型鱼类。这里的生态环境相对原始，是进行海洋生态教育和生态旅游的理想场所。" },
        { subtitle: "海岸保护与可持续发展", content: "作为厄瓜多尔重要的旅游目的地，La Chocolatera 的生态环境保护备受关注。当地政府和社区正在努力采取措施保护海岸线，防止过度开发和污染。\n\n游客在享受海滩美景的同时，也被鼓励参与到保护行动中，例如不留下垃圾、不干扰野生动物、使用环保防晒霜等。这些举措有助于确保 La Chocolatera 的自然美景能够永续传承，造福未来的世代。" }
      ]
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "每天：08:00 – 15:00", note: "建议出发前通过官方渠道或当地旅游信息确认最新开放时间。" },
      price: { title: "门票参考", content: "免费对外开放，无需预约", note: "停车费约为$2-3美元，冲浪课程和海滩设备租赁需额外付费。" },
      duration: { title: "建议游览时长与气候", content: "建议预留 3 - 6 小时", note: "萨利纳斯属热带干旱气候，全年气温较高（22-30°C）。旱季（5-12月）是最佳游览季节，海浪条件也最为稳定。" },
      animals: { title: "海洋居民：丰富的太平洋生态", content: "La Chocolatera 的海域栖息着丰富的海洋生物，包括多种热带鱼类、海龟、海豚，在观鲸季节还有机会看到座头鲸。海滩周围的岩石区也有各种贝类和甲壳类动物。" },
      bring: { title: "游览准备", items: ["高倍数防水防晒霜", "泳衣、沙滩巾和遮阳帽", "饮用水和零食", "冲浪板或租赁费用（也可现场租赁）", "相机或手机（准备拍摄壮丽的日落）", "轻便的沙滩鞋或凉鞋"] }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从瓜亚基尔机场出发", content: "距离瓜亚基尔国际机场（GYE）约 140 公里，车程约 2 - 2.5 小时。", options: [
        { name: "租车自驾（最自由）", price: "$40 - $70 美元/天", time: "约 2-2.5 小时", steps: ["在机场租车后，沿 E40 公路向西行驶", "经过圣埃伦娜市后继续前往萨利纳斯", "跟随路标指示即可到达 La Chocolatera"] },
        { name: "机场大巴+出租车（经济实惠）", price: "$10 - $20 美元", time: "约 3 小时", steps: ["在机场乘坐前往萨利纳斯的长途巴士", "到达萨利纳斯后换乘出租车前往 La Chocolatera", "车程约15分钟"] }
      ]},
      city: { title: "从萨利纳斯市区前往", content: "从萨利纳斯市中心出发，沿海滨大道向西行驶，根据路标指示即可到达 La Chocolatera 海滩入口。", steps: ["导航：在 Google Maps 中输入 La Chocolatera Salinas Ecuador", "停车：海滩设有专用停车场，停车费约为$2-3美元"] },
      selfDrive: { title: "从其他城市前往", content: "从基多或昆卡出发，先抵达瓜亚基尔，再沿 E40 公路前往萨利纳斯。", steps: ["从基多：乘坐国内航班至瓜亚基尔，再转乘车（约2.5小时）", "从昆卡：乘坐长途巴士至瓜亚基尔，再转乘车（约3小时）"] }
    },
    tips: { title: "游览建议", items: ["最佳游览时间：清晨 08:00 - 11:00 或傍晚 15:00 - 日落", "冲浪者天堂：全年都有适合不同水平的海浪", "壮丽的日落：La Chocolatera 的太平洋日落是世界级的", "注意防晒：赤道地区的紫外线非常强烈", "尊重当地文化：保持海滩清洁，不干扰野生动物"] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 La Chocolatera", items: [
      { question: "La Chocolatera 的开放时间是？", answer: "每天 08:00 - 15:00。建议出发前通过官方渠道确认最新开放时间。" },
      { question: "La Chocolatera 需要门票吗？", answer: "进入海滩是免费的，无需预约。但停车费约为$2-3美元，冲浪课程和设备租赁需额外付费。" },
      { question: "La Chocolatera 适合家庭出游吗？", answer: "非常适合！这里有平缓的沙滩和相对安全的游泳区域，非常适合家庭出游。但请注意海浪和潮汐情况。" },
      { question: "La Chocolatera 适合冲浪吗？", answer: "非常适合！La Chocolatera 是厄瓜多尔最受欢迎的冲浪目的地之一，全年都有稳定的海浪，适合从初学者到专业冲浪者的各个水平。" },
      { question: "最佳游览季节是什么时候？", answer: "旱季（5月至12月）是最佳游览季节，此时天气晴朗，海浪条件稳定。观鲸季节（6月至9月）还有机会看到座头鲸。" },
      { question: "La Chocolatera 附近还有哪些值得一游的景点？", answer: "可以顺路参观萨利纳斯的海滨大道（Malecón de Salinas）、Punta Carnero 海滩、圣埃伦娜半岛考古博物馆等。" }
    ]},
    location: { title: "地图位置", address: "RX6Q+PX, Salinas, 厄瓜多尔", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为海洋生态的守护者，请与我们一起尊重自然、保护海洋。", text: "© 2026 La Chocolatera 旅行指南 · 保留所有权利。\n本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方旅游资讯项目。为探索者而制", linksTitle: "相关链接", links: [
      { name: "厄瓜多尔国家旅游局", url: "https://ecuador.travel/" },
      { name: "厄瓜多尔环境、水和生态转型部", url: "https://www.ambienteyenergia.gob.ec/" },
      { name: "厄瓜多尔旅游部", url: "https://ecuador.travel/" },
      { name: "圣埃伦娜省政府", url: "https://www.santaelena.gob.ec/" },
      { name: "厄瓜多尔综合旅游指南", url: "https://www.buentrip.app/atractivo-turistico/la-chocolatera/" }
    ]}
  },
  en: {
    nav: { about: "Overview", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "A Natural Wonder and Surfing Paradise on Ecuador's Coastline", title: "La Chocolatera", subtitle: "Salinas, Santa Elena, Ecuador", cta: "Explore the Coast" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "La Chocolatera is located at the westernmost tip of Salinas, in the province of Santa Elena, Ecuador. It is a famous tourist destination at the continental extreme of mainland Ecuador. Here you will find magnificent Pacific Ocean views, golden sandy beaches, and excellent wave conditions, making it one of Ecuador's most popular seaside resorts.\n\nThe name 'La Chocolatera' originated from the historical cacao plantations in this area (Chocolate means chocolate in Spanish). Today, it has become a comprehensive coastal destination that combines surfing, beach leisure, whale watching, and sunset viewing. The clean waters, consistent waves, and well-developed tourist facilities attract visitors from all over the world.",
      p2: "La Chocolatera's beach stretches for several kilometers, with fine sand and crystal-clear water. It is a paradise for surfing enthusiasts, with waves suitable for surfers of all levels year-round. In addition to water sports, visitors can enjoy sunbathing on the beach, horseback riding, or admire the magnificent Pacific sunset from the coastal cliff trails. It is recommended to arrange your visit in the early morning or late afternoon to avoid the intense midday sun and to catch the most beautiful sunrise and sunset views.",
      highlights: { title: "Quick Facts", items: ["Location: Salinas, Santa Elena Province, Ecuador", "Famous beach at mainland Ecuador's westernmost point", "Opening Hours: 08:00–15:00", "Featured Activities: Surfing, beach leisure, whale watching, sunset viewing", "Facilities: Surf schools, restaurants, parking"] },
      timeline: { title: "Development Timeline", events: [
        { period: "Mid-20th Century: Early Development", description: "The La Chocolatera area began to be developed as an extended seaside leisure area of Salinas, initially mainly serving local residents for weekend recreation." },
        { period: "1990s: Tourism Boom", description: "With the booming development of Ecuador's seaside tourism industry, La Chocolatera gradually became a popular surfing and seaside vacation destination for domestic and international tourists, thanks to its quality waves and beach conditions." },
        { period: "2000s - Present: Infrastructure Improvement", description: "The local government continues to invest in improving tourism infrastructure, including parking lots, coastal promenades, surf schools, restaurants, and security facilities, making La Chocolatera a safe and convenient family-friendly seaside resort area." }
      ]},
      management: { title: "Management and Official Authorities", content: "La Chocolatera beach is jointly managed and maintained by the Salinas Municipal Government and the Santa Elena Provincial Government. As a free public beach open to the public, the government is committed to maintaining its cleanliness, safety, and good tourism environment." }
    },
    history: {
      title: "Historical Background & Cultural Memory",
      intro: "The name 'La Chocolatera' carries the historical memory of this land. During the Spanish colonial period and for some time afterward, this area was part of cacao (chocolate ingredient) plantations. The name 'Chocolatera' comes from this history, meaning 'chocolate maker' or 'chocolate production place'. Although cacao cultivation has ceased today, this poetic name has been preserved and has become synonymous with this beautiful coastline.\n\nOver time, this area has gradually transformed from agricultural land into one of Ecuador's most important seaside tourism destinations. Salinas, as the main tourist city of Santa Elena Province, has gained favor for its western end (La Chocolatera) due to its unspoiled natural beauty and excellent wave conditions.",
      sections: [
        { subtitle: "1. Origin of the Name: From Cacao Plantation to Tourist Resort", content: "The name 'La Chocolatera' directly translates to 'chocolate house' or 'chocolate production place'. Historically, the cacao beans in Ecuador's coastal areas were of excellent quality, and this area was once covered with cacao plantations. Although agricultural activities have ceased, the place name has been completely preserved as a witness to history.\n\nToday, when people come to La Chocolatera, although they no longer see cacao trees, the historical story behind the name adds a layer of cultural depth to this beach. While enjoying the sun and beach, visitors are also inadvertently touching the historical context of this land." },
        { subtitle: "2. The Tourism Rise of Salinas", content: "Salinas is a coastal city in the province of Santa Elena, known for its beautiful beaches and complete tourism facilities. As one of Ecuador's most representative seaside resort cities, Salinas began to vigorously develop tourism in the late 20th century.\n\nLa Chocolatera is located at the westernmost tip of Salinas and is considered the most beautiful and most suitable surfing beach section of the city. With the continuous improvement of the city's tourism infrastructure, La Chocolatera has gradually become a beautiful business card for Salinas and even the entire Ecuadorian seaside tourism." }
      ],
      buildings: {
        title: "Surrounding Cultural Attractions",
        items: [
          "Museo de la Liga Cantonal de Santa Elena: Learn about the pre-Columbian history and culture of the region.",
          "Museo Oceanográfico de Salinas: Showcases Ecuador's rich marine biodiversity.",
          "Punta Carnero Beach: Another high-quality beach not far from La Chocolatera, famous for its clear waters and rich marine life."
        ],
        conclusion: "La Chocolatera is not just a beautiful beach, but also a microcosm of Ecuador's seaside culture. Here, you can feel the locals' love for the ocean and their life wisdom in perfectly combining natural beauty with tourism and leisure."
      }
    },
    ecology: {
      title: "Ecology & Marine Environment",
      sections: [
        { subtitle: "Marine Ecology and Biodiversity", content: "The sea area of La Chocolatera is one of the important marine ecosystems along Ecuador's Pacific coast. The water here is clear, and the marine biodiversity is rich. During the appropriate season (usually June to September), visitors also have the opportunity to see humpback whales and dolphins offshore.\n\nThe rocky areas and tide pools around the beach are also excellent places to observe marine life. At low tide, you can see various shellfish, starfish, and small fish in the tide pools. The ecological environment here is relatively primitive, making it an ideal place for marine ecological education and ecotourism." },
        { subtitle: "Coastal Protection and Sustainable Development", content: "As an important tourism destination in Ecuador, the protection of the ecological environment at La Chocolatera has attracted much attention. Local governments and communities are making efforts to take measures to protect the coastline from overdevelopment and pollution.\n\nWhile enjoying the beautiful beach scenery, visitors are also encouraged to participate in conservation actions, such as not leaving trash, not disturbing wildlife, and using environmentally friendly sunscreen. These measures help ensure that the natural beauty of La Chocolatera can be sustainably passed on to benefit future generations." }
      ]
    },
    visiting: {
      title: "Visitor Information",
      hours: { title: "Operating Hours", content: "Daily: 08:00 – 15:00", note: "Please confirm the latest opening hours through official channels before departure." },
      price: { title: "Ticket Information", content: "Free admission, no reservation required", note: "Parking fee is about $2-3 USD, surf lessons and beach equipment rental require additional payment." },
      duration: { title: "Recommended Duration & Climate", content: "Recommended visit duration: 3 - 6 hours", note: "Salinas has a tropical arid climate with high temperatures year-round (22-30°C). The dry season (May-December) is the best time to visit, and the wave conditions are most stable." },
      animals: { title: "Marine Residents: Rich Pacific Ecosystem", content: "The sea area of La Chocolatera is home to rich marine life, including various tropical fish, sea turtles, dolphins, and the opportunity to see humpback whales during whale watching season. The rocky areas around the beach also have various shellfish and crustaceans." },
      bring: { title: "Preparation", items: ["Waterproof high-SPF sunscreen", "Swimwear, beach towel, and sun hat", "Drinking water and snacks", "Surfboard or rental fee (also available on-site)", "Camera or smartphone (to capture the magnificent sunset)", "Light sandals or flip-flops"] }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Guayaquil Airport", content: "About 140 km from Guayaquil International Airport (GYE), approximately a 2 - 2.5 hour drive.", options: [
        { name: "Car Rental (Most Flexible)", price: "$40 - $70 USD/day", time: "About 2-2.5 hours", steps: ["After renting a car at the airport, drive west on the E40 highway", "After passing through Santa Elena, continue to Salinas", "Follow the signs to La Chocolatera"] },
        { name: "Airport Bus + Taxi (Economical)", price: "$10 - $20 USD", time: "About 3 hours", steps: ["Take a long-distance bus from the airport to Salinas", "After arriving in Salinas, transfer to a taxi to La Chocolatera", "The trip takes about 15 minutes"] }
      ]},
      city: { title: "From Salinas Downtown", content: "From downtown Salinas, drive west along the coastal boulevard, and follow the signs to the La Chocolatera beach entrance.", steps: ["Navigation: Enter La Chocolatera Salinas Ecuador in Google Maps", "Parking: The beach has a dedicated parking lot, parking fee is about $2-3 USD"] },
      selfDrive: { title: "Traveling from Other Cities", content: "From Quito or Cuenca, arrive in Guayaquil first, then travel along the E40 highway to Salinas.", steps: ["From Quito: Take a domestic flight to Guayaquil, then transfer to a car (about 2.5 hours)", "From Cuenca: Take a long-distance bus to Guayaquil, then transfer to a car (about 3 hours)"] }
    },
    tips: { title: "Travel Tips", items: ["Best Time to Visit: Early morning 08:00 - 11:00 or evening 15:00 - sunset", "Surfer's Paradise: Year-round waves suitable for all levels", "Magnificent Sunset: Pacific sunset at La Chocolatera is world-class", "Sun Protection: UV radiation at the equator is very strong", "Respect Local Culture: Keep the beach clean, do not disturb wildlife"] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about La Chocolatera", items: [
      { question: "What are the opening hours of La Chocolatera?", answer: "Daily 08:00 - 15:00. It is recommended to confirm the latest opening hours through official channels before departure." },
      { question: "Is there an entrance fee for La Chocolatera?", answer: "Beach access is free, no reservation required. However, parking fee is about $2-3 USD, and surf lessons and equipment rental require additional payment." },
      { question: "Is La Chocolatera suitable for families?", answer: "Very suitable! There are gentle sandy beaches and relatively safe swimming areas, very suitable for family outings. However, please pay attention to waves and tide conditions." },
      { question: "Is La Chocolatera good for surfing?", answer: "Very suitable! La Chocolatera is one of the most popular surfing destinations in Ecuador, with consistent waves year-round suitable for all levels from beginners to professional surfers." },
      { question: "What is the best season to visit?", answer: "The dry season (May to December) is the best time to visit, when the weather is sunny and wave conditions are stable. Whale watching season (June to September) also offers the opportunity to see humpback whales." },
      { question: "What other attractions are worth visiting nearby?", answer: "You can visit the Salinas Malecón, Punta Carnero Beach, and the Santa Elena Peninsula Archaeological Museum, etc." }
    ]},
    location: { title: "Map Location", address: "RX6Q+PX, Salinas, Ecuador", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As guardians of the marine ecosystem, please join us in respecting nature and protecting the ocean.", text: "© 2026 La Chocolatera Travel Guide · All rights reserved.\nThis website is an independent third-party travel information project. We are not affiliated with the local government or any other official authorities.", made: "This website is an independent third-party travel information project. Made for explorers", linksTitle: "Related Links", links: [
      { name: "Ecuador National Tourism Board", url: "https://ecuador.travel/" },
      { name: "Ministry of Environment, Water and Ecological Transition", url: "https://www.ambienteyenergia.gob.ec/" },
      { name: "Ministry of Tourism", url: "https://ecuador.travel/" },
      { name: "Santa Elena Provincial Government", url: "https://www.santaelena.gob.ec/" },
      { name: "Ecuador Comprehensive Travel Guide", url: "https://www.buentrip.app/atractivo-turistico/la-chocolatera/" }
    ]}
  },
  es: {
    nav: { about: "Descripción General", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Una Maravilla Natural y Paraíso del Surf en la Costa de Ecuador", title: "La Chocolatera", subtitle: "Salinas, Santa Elena, Ecuador", cta: "Explora la Costa" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "La Chocolatera está ubicada en el extremo más occidental de Salinas, en la provincia de Santa Elena, Ecuador. Es un famoso destino turístico en el extremo continental de Ecuador continental. Aquí encontrará magníficas vistas del Océano Pacífico, playas de arena dorada y excelentes condiciones de oleaje, lo que la convierte en uno de los complejos balnearios más populares de Ecuador.\n\nEl nombre 'La Chocolatera' se originó a partir de las históricas plantaciones de cacao en esta área. Hoy en día, se ha convertido en un destino costero integral que combina surf, recreación en la playa, avistamiento de ballenas y observación del atardecer. Las aguas limpias, las olas constantes y las bien desarrolladas instalaciones turísticas atraen visitantes de todo el mundo.",
      p2: "La playa de La Chocolatera se extiende por varios kilómetros, con arena fina y aguas cristalinas. Es un paraíso para los entusiastas del surf, con olas adecuadas para surfistas de todos los niveles durante todo el año. Además de los deportes acuáticos, los visitantes pueden disfrutar de tomar el sol en la playa, paseos a caballo o admirar el magnífico atardecer del Pacífico desde los senderos de los acantilados costeros. Se recomienda organizar su visita en la madrugada o tarde para evitar el intenso sol del mediodía y contemplar las más bellas vistas del amanecer y atardecer.",
      highlights: { title: "Datos Rápidos", items: ["Ubicación: Salinas, Provincia de Santa Elena, Ecuador", "Famosa playa en el punto más occidental de Ecuador continental", "Horario de Apertura: 08:00–15:00", "Actividades Destacadas: Surf, recreación en playa, avistamiento de ballenas, observación del atardecer", "Instalaciones: Escuelas de surf, restaurantes, estacionamiento"] },
      timeline: { title: "Línea de Tiempo", events: [
        { period: "Mediados del Siglo XX: Desarrollo Temprano", description: "El área de La Chocolatera comenzó a desarrollarse como una zona de esparcimiento balneario extendida de Salinas, sirviendo inicialmente principalmente a los residentes locales para recreación de fin de semana." },
        { period: "Años 1990: Auge Turístico", description: "Con el floreciente desarrollo de la industria turística balnearia de Ecuador, La Chocolatera se convirtió gradualmente en un destino popular de surf y vacaciones balnearias para turistas nacionales e internacionales, gracias a sus olas de calidad y condiciones de playa." },
        { period: "Años 2000 - Actualidad: Mejora de Infraestructura", description: "El gobierno local continúa invirtiendo en la mejora de la infraestructura turística, incluyendo estacionamientos, malecón costero, escuelas de surf, restaurantes e instalaciones de seguridad, haciendo de La Chocolatera un área balnearia familiar segura y conveniente." }
      ]},
      management: { title: "Gestión y Autoridades Oficiales", content: "La playa de La Chocolatera es gestionada y mantenida conjuntamente por el Gobierno Municipal de Salinas y el Gobierno Provincial de Santa Elena. Como una playa pública gratuita abierta al público, el gobierno se compromete a mantener su limpieza, seguridad y buen ambiente turístico." }
    },
    history: {
      title: "Antecedentes Históricos y Memoria Cultural",
      intro: "El nombre 'La Chocolatera' lleva la memoria histórica de esta tierra. Durante el período colonial español y algún tiempo después, esta área fue parte de las plantaciones de cacao (ingrediente del chocolate). El nombre 'Chocolatera' proviene de esta historia, que significa 'fabricante de chocolate' o 'lugar de producción de chocolate'. Aunque el cultivo de cacao ha cesado hoy en día, este nombre poético se ha preservado y se ha convertido en sinónimo de este hermoso litoral.\n\nCon el paso del tiempo, esta área se ha transformado gradualmente de tierra agrícola en uno de los destinos turísticos balnearios más importantes de Ecuador. Salinas, como la principal ciudad turística de la provincia de Santa Elena, ha ganado favor por su extremo occidental (La Chocolatera) debido a su belleza natural no explotada y excelentes condiciones de oleaje.",
      sections: [
        { subtitle: "1. Origen del Nombre: De Plantación de Cacao a Destino Turístico", content: "El nombre 'La Chocolatera' se traduce directamente como 'casa de chocolate' o 'lugar de producción de chocolate'. Históricamente, los granos de cacao en las áreas costeras de Ecuador eran de excelente calidad, y esta área estaba cubierta de plantaciones de cacao. Aunque las actividades agrícolas han cesado, el nombre del lugar se ha preservado completamente como testigo de la historia.\n\nHoy en día, cuando la gente viene a La Chocolatera, aunque ya no ve árboles de cacao, la historia histórica detrás del nombre agrega una capa de profundidad cultural a esta playa. Mientras disfrutan del sol y la playa, los visitantes también tocan inadvertidamente el contexto histórico de esta tierra." },
        { subtitle: "2. El Auge Turístico de Salinas", content: "Salinas es una ciudad costera en la provincia de Santa Elena, conocida por sus hermosas playas e instalaciones turísticas completas. Como una de las ciudades balnearias más representativas de Ecuador, Salinas comenzó a desarrollar vigorosamente el turismo a finales del siglo XX.\n\nLa Chocolatera está ubicada en el extremo más occidental de Salinas y se considera la sección de playa más hermosa y más adecuada para el surf de la ciudad. Con la mejora continua de la infraestructura turística de la ciudad, La Chocolatera se ha convertido gradualmente en una hermosa tarjeta de presentación para el turismo balneario de Salinas e incluso de todo Ecuador." }
      ],
      buildings: {
        title: "Atracciones Culturales Circundantes",
        items: [
          "Museo de la Liga Cantonal de Santa Elena: Conozca la historia y cultura precolombina de la región.",
          "Museo Oceanográfico de Salinas: Muestra la rica biodiversidad marina de Ecuador.",
          "Playa Punta Carnero: Otra playa de alta calidad no lejos de La Chocolatera, famosa por sus aguas claras y rica vida marina."
        ],
        conclusion: "La Chocolatera no es solo una playa hermosa, sino también un microcosmos de la cultura balnearia de Ecuador. Aquí, puede sentir el amor de los locales por el océano y su sabiduría de vida al combinar perfectamente la belleza natural con el turismo y el ocio."
      }
    },
    ecology: {
      title: "Ecología y Ambiente Marino",
      sections: [
        { subtitle: "Ecología Marina y Biodiversidad", content: "El área marina de La Chocolatera es uno de los importantes ecosistemas marinos a lo largo de la costa del Pacífico de Ecuador. El agua aquí es clara, y la biodiversidad marina es rica. Durante la temporada apropiada (generalmente de junio a septiembre), los visitantes también tienen la oportunidad de ver ballenas jorobadas y delfines en alta mar.\n\nLas áreas rocosas y los charcos de marea alrededor de la playa también son excelentes lugares para observar la vida marina. En marea baja, puede ver varios mariscos, estrellas de mar y peces pequeños en los charcos de marea. El ambiente ecológico aquí es relativamente prístino, lo que lo convierte en un lugar ideal para la educación ecológica marina y el ecoturismo." },
        { subtitle: "Protección Costera y Desarrollo Sostenible", content: "Como un destino turístico importante en Ecuador, la protección del ambiente ecológico en La Chocolatera ha atraído mucha atención. Los gobiernos locales y las comunidades se están esforzando en tomar medidas para proteger la línea costera del sobre-desarrollo y la contaminación.\n\nMientras disfrutan de la hermosa vista de la playa, también se alienta a los visitantes a participar en acciones de conservación, como no dejar basura, no molestar a la vida silvestre y usar protector solar ecológico. Estas medidas ayudan a asegurar que la belleza natural de La Chocolatera pueda pasarse de manera sostenible para beneficiar a las generaciones futuras." }
      ]
    },
    visiting: {
      title: "Información para Visitantes",
      hours: { title: "Horario de Operación", content: "Diario: 08:00 – 15:00", note: "Por favor confirme los últimos horarios de apertura a través de canales oficiales antes de la partida." },
      price: { title: "Información de Boletos", content: "Entrada gratuita, sin necesidad de reserva", note: "El costo de estacionamiento es de aproximadamente $2-3 USD, las lecciones de surf y el alquiler de equipo de playa requieren pago adicional." },
      duration: { title: "Duración Recomendada y Clima", content: "Duración recomendada: 3 - 6 horas", note: "Salinas tiene un clima tropical árido con temperaturas altas durante todo el año (22-30°C). La temporada seca (mayo-diciembre) es el mejor momento para visitar, y las condiciones de oleaje son más estables." },
      animals: { title: "Residentes Marinos", content: "El área marina de La Chocolatera es el hogar de rica vida marina, incluyendo varios peces tropicales, tortugas marinas, delfines, y la oportunidad de ver ballenas jorobadas durante la temporada de avistamiento. Las áreas rocosas alrededor de la playa también tienen varios mariscos y crustáceos." },
      bring: { title: "Preparación", items: ["Protector solar impermeable de alto FPS", "Traje de baño, toalla de playa y sombrero", "Agua potable y bocadillos", "Tabla de surf o tarifa de alquiler (también disponible en el sitio)", "Cámara o teléfono inteligente (para capturar el magnífico atardecer)", "Sandalias ligeras o chanclas"] }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Guayaquil", content: "A unos 140 km del Aeropuerto Internacional de Guayaquil (GYE), aproximadamente 2 - 2.5 horas en automóvil.", options: [
        { name: "Alquiler de Automóvil (Más Flexible)", price: "$40 - $70 USD/día", time: "Alrededor de 2-2.5 horas", steps: ["Después de alquilar un automóvil en el aeropuerto, conduzca hacia el oeste en la carretera E40", "Después de pasar por Santa Elena, continúe hacia Salinas", "Siga los letreros a La Chocolatera"] },
        { name: "Bus del Aeropuerto + Taxi (Económico)", price: "$10 - $20 USD", time: "Alrededor de 3 horas", steps: ["Tome un bus de larga distancia desde el aeropuerto a Salinas", "Después de llegar a Salinas, transfiérase a un taxi a La Chocolatera", "El viaje toma alrededor de 15 minutos"] }
      ]},
      city: { title: "Desde el Centro de Salinas", content: "Desde el centro de Salinas, conduzca hacia el oeste a lo largo del bulevar costero y siga los letreros a la entrada de la playa de La Chocolatera.", steps: ["Navegación: Ingrese La Chocolatera Salinas Ecuador en Google Maps", "Estacionamiento: La playa tiene un estacionamiento dedicado, la tarifa de estacionamiento es de aproximadamente $2-3 USD"] },
      selfDrive: { title: "Viajando desde Otras Ciudades", content: "Desde Quito o Cuenca, llegue a Guayaquil primero, luego viaje a lo largo de la carretera E40 a Salinas.", steps: ["Desde Quito: Tome un vuelo doméstico a Guayaquil, luego transFiéra a un automóvil (alrededor de 2.5 horas)", "Desde Cuenca: Tome un bus de larga distancia a Guayaquil, luego transFiéra a un automóvil (alrededor de 3 horas)"] }
    },
    tips: { title: "Consejos de Viaje", items: ["Mejor Momento para Visitar: Madrugada 08:00 - 11:00 o tarde 15:00 - atardecer", "Paraíso del Surfista: Olas todo el año adecuadas para todos los niveles", "Atardecer Magnífico: El atardecer del Pacífico en La Chocolatera es de clase mundial", "Protección Solar: La radiación UV en el ecuador es muy fuerte", "Respetar la Cultura Local: Mantenga la playa limpia, no moleste a la vida silvestre"] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    reviews: { title: "Reseñas de Visitantes", subtitle: "Reseñas reales de Google Maps", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Conozca más sobre La Chocolatera", items: [
      { question: "¿Cuál es el horario de apertura de La Chocolatera?", answer: "Diario 08:00 - 15:00. Se recomienda confirmar los últimos horarios de apertura a través de canales oficiales antes de la partida." },
      { question: "¿Hay una tarifa de entrada para La Chocolatera?", answer: "El acceso a la playa es gratuito, no se requiere reserva. Sin embargo, la tarifa de estacionamiento es de aproximadamente $2-3 USD, y las lecciones de surf y el alquiler de equipo requieren pago adicional." },
      { question: "¿Es La Chocolatera adecuada para familias?", answer: "¡Muy adecuada! Hay playas de arena suave y áreas de natación relativamente seguras, muy adecuadas para salidas familiares. Sin embargo, preste atención a las olas y las condiciones de marea." },
      { question: "¿Es buena La Chocolatera para el surf?", answer: "¡Muy adecuada! La Chocolatera es uno de los destinos de surf más populares de Ecuador, con olas constantes durante todo el año adecuadas para todos los niveles desde principiantes hasta surfistas profesionales." },
      { question: "¿Cuál es la mejor temporada para visitar?", answer: "La temporada seca (mayo a diciembre) es el mejor momento para visitar, cuando el clima es soleado y las condiciones de las olas son estables. La temporada de avistamiento de ballenas (junio a septiembre) también ofrece la oportunidad de ver ballenas jorobadas." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca?", answer: "Puede visitar el Malecón de Salinas, la Playa Punta Carnero y el Museo Arqueológico de la Península de Santa Elena, etc." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "RX6Q+PX, Salinas, Ecuador", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como guardianes del ecosistema marino, por favor únanse a nosotros para respetar la naturaleza y proteger el océano.", text: "© 2026 Guía de Viaje de La Chocolatera · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de información turística. No estamos afiliados al gobierno local ni a ninguna otra autoridad oficial.", made: "Este sitio web es un proyecto independiente de información turística. Hecho para exploradores", linksTitle: "Enlaces Relacionados", links: [
      { name: "Dirección Nacional de Turismo", url: "https://ecuador.travel/" },
      { name: "Ministerio de Ambiente, Agua y Transición Ecológica", url: "https://www.ambienteyenergia.gob.ec/" },
      { name: "Ministerio de Turismo", url: "https://ecuador.travel/" },
      { name: "Gobierno Provincial de Santa Elena", url: "https://www.santaelena.gob.ec/" },
      { name: "Guía Integral de Turismo de Ecuador", url: "https://www.buentrip.app/atractivo-turistico/la-chocolatera/" }
    ]}
  }
};
