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
    hero: { tagline: "厄瓜多尔大陆最西端·惊涛拍岸的自然奇观", title: "La Chocolatera", subtitle: "圣埃伦娜省萨利纳斯市 · 海军基地内", cta: "探索巧克力海" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "La Chocolatera 位于厄瓜多尔大陆的最西端(Punta Santa Elena),坐落在萨利纳斯海军基地(Base Naval de Salinas)之内。这里不是传统的金色沙滩海滩,而是一处礁石嶙峋的悬崖海岸--两大洋流(洪堡寒流与赤道暖流)在此交汇,猛烈拍击礁石,卷起海底沙泥,使海水呈现出如同沸腾巧克力般的浑浊棕褐色,\"La Chocolatera\"(巧克力壶)之名便由此而来。\n\n此处的海浪极其猛烈,暗流湍急,严禁下海游泳。但其壮丽的惊涛拍岸景象、独特的\"巧克力海\"自然奇观,以及旁边的海狮栖息地(La Lobería),使其成为了厄瓜多尔最具特色的海岸风景名胜之一。",
      p2: "进入 La Chocolatera 需通过海军基地的军事检查站,所有游客必须出示护照或身份证件。景点周边设有冲浪点(适合有经验的冲浪者),但核心景区是观赏巨浪拍打礁石和欣赏太平洋日落的地方。由于海风极大,建议携带防风外套。此处不适合铺沙滩巾晒太阳,但站在悬崖边感受大自然的力量,是极为震撼的体验。",
      highlights: { title: "景点速览", items: ["地理位置:厄瓜多尔大陆最西端,圣埃伦娜省萨利纳斯市", "地貌特征:礁石悬崖海岸,非沙滩浴场,严禁下海游泳", "命名由来:洋流交汇致海水呈巧克力色,意为\"巧克力壶\"", "必带证件:护照或身份证(需通过海军基地检查站)", "标志性景观:惊涛拍岸、La Lobería 海狮栖息地、太平洋日落"] },
      timeline: { title: "发展历程", events: [
        { period: "20世纪前: 海军基地范围", description: "La Chocolatera 所在区域长期以来属于厄瓜多尔海军基地(Base Naval de Salinas)的管辖范围,不对公众开放。" },
        { period: "20世纪后期: 有限开放", description: "随着萨利纳斯旅游业的发展,海军基地在限制条件下向游客开放了这一区域,但进入仍需通过军事检查站。" },
        { period: "21世纪初至今: 成为标志性景点", description: "凭借其独特的自然奇观和\"厄瓜多尔大陆最西端\"的地理标签,La Chocolatera 逐渐成为厄瓜多尔最具代表性的海岸景点之一,吸引了大量冲浪者和自然爱好者。" }
      ]},
      management: { title: "景点管理与访问须知", content: "La Chocolatera 位于厄瓜多尔海军基地内部,进入需通过军事检查站并接受证件查验。请务必携带护照或厄瓜多尔身份证件。景点本身免费开放,但受海军基地管理规定约束,开放时间可能随时调整。" }
    },
    history: {
      title: "名字的由来与自然传奇",
      intro: "La Chocolatera 这个富有诗意的名字,来源于此处独一无二的自然现象,而非历史上任何与巧克力相关的产业。\n\n在厄瓜多尔大陆的最西端--蓬塔圣埃伦娜(Punta Santa Elena),两股世界著名的洋流在此激烈交汇:来自南极的洪堡寒流(Corriente de Humboldt)与赤道暖流相遇,加上强劲的海风,共同造就了一段极其猛烈的海浪。海浪猛烈地撞击礁石海岸,将海底的泥沙卷起,使原本清澈的太平洋海水在此处呈现出一种独特的、如同沸腾巧克力般的深棕褐色。\n\n当地人便用\"La Chocolatera\"(意为\"巧克力壶\"或\"煮巧克力的人\")来形象地命名这片海域。",
      sections: [
        { subtitle: "1. 巧克力海:洋流交汇的自然奇观", content: "La Chocolatera 最核心的自然现象,便是那如同沸腾巧克力般的褐色海水。这并不是污染,而是两大洋流交汇加上海浪猛烈撞击礁石海岸的共同结果。\n\n在巨浪拍击礁石的瞬间,还会形成类似\"喷潮孔\"(Blowhole)的自然现象--海水从礁石缝隙中猛烈喷射而出,场面极为壮观。对于热爱自然奇观和地质现象的旅行者来说,这里是厄瓜多尔海岸线上一本活的海洋物理教科书。" },
        { subtitle: "2. 厄瓜多尔大陆最西端", content: "La Chocolatera 坐落在蓬塔圣埃伦娜(Punta Santa Elena),这是厄瓜多尔大陆国土的最西端。这个\"地理之最\"的标签,使其具备了极高的地理探索和旅行打卡价值。\n\n站在大陆尽头的礁石上,面向浩瀚的太平洋,感受两大洋流交汇处的狂野海风 -- 这种\"世界尽头\"般的体验,是 La Chocolatera 最打动人心的魅力所在。" }
      ],
      buildings: {
        title: "周边景点与延伸探索",
        items: [
          "La Lobería(海狮栖息地):紧邻 La Chocolatera,是海狮常年栖息的海岸礁石区,游客可以近距离观察这些海洋哺乳动物。",
          "Punta Carnero 海滩:距离约10分钟车程,是一片相对平静的沙滩,适合游泳(与 La Chocolatera 的惊险礁石海岸形成鲜明对比)。",
          "萨利纳斯海滨大道(Malecón de Salinas):拥有完善的旅游设施、餐厅和夜生活,是体验厄瓜多尔海滨度假文化的最佳地点。"
        ],
        conclusion: "La Chocolatera 不是传统意义上\"晒太阳、游泳\"的沙滩度假地,而是一处让人感受大自然狂野力量的地理奇观。站在礁石上,看着巧克力色的巨浪猛烈拍岸,旁边还有懒洋洋的海狮在礁石上晒太阳 -- 这种体验,是厄瓜多尔海岸最独特的记忆之一。"
      }
    },
    ecology: {
      title: "海洋生态与野生动物：La Lobería 海狮栖息地",
      sections: [
        { subtitle: "La Lobería:海狮的家园", content: "紧邻 La Chocolatera 的 La Lobería,是一片礁石海岸,常年栖息着大量的海狮(Lobo marino)。这些庞大的海洋哺乳动物慵懒地躺在礁石上晒太阳,或在海浪中灵活游弋,是游客来到此处绝对不会错过的精彩看点。\n\n观看海狮无需额外付费,只需安静地在安全距离内观察即可。请勿投喂或惊扰它们,保持至少2米的距离。" },
        { subtitle: "观鲸季节与海洋生物多样性", content: "每年6月至9月,座头鲸(Ballena jorobada)会沿着厄瓜多尔海岸迁徙,运气好的话在 La Chocolatera 的高处礁石上可以用望远镜观测到远处的鲸鱼喷潮。\n\n此外,这里的礁石潮池(tide pools)中栖息着各种贝类、海星和小型海洋生物,是带孩子进行海洋自然教育的绝佳场所。由于此处属于海军基地管辖,生态环境相对原始,保护工作也较为到位。" },
        { subtitle: "洋流交汇的海洋意义", content: "洪堡寒流与赤道暖流在此外交汇,不仅造就了独特的\"巧克力海\"现象,还造就了这一带丰富的海洋生物多样性。冷水性与暖水性鱼类在此交汇,使这里成为厄瓜多尔太平洋沿岸最重要的海洋生态观察点之一。\n\n对于海洋生物学爱好者和自然摄影师来说,La Chocolatera 提供了极为难得的研究和拍摄机会。" }
      ]
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放与放行时间", content: "每日约 08:00 – 15:00\n(部分资料显示最晚可至17:00,但受海军基地实际管制影响)", note: "⚠️ 重要提醒:La Chocolatera 位于海军基地内部,最终放行时间受基地军事管制影响,可能随时调整。建议尽量在14:00前到达,并务必携带身份证件。" },
      price: { title: "费用参考", content: "景点免费开放,无需预约", note: "停车费约为 $2-3 美元。冲浪者需注意:此处海浪极其猛烈,仅适合有经验的冲浪者,初学者请勿尝试。" },
      duration: { title: "建议游览时长与注意事项", content: "建议预留 2 - 4 小时", note: "此处海风极大,气温比萨利纳斯市区低3-5°C。严禁下海游泳--暗流极其危险,已有多人因此遇难。适合在悬崖安全区域观赏海浪和海狮。" },
      animals: { title: "野生动物:海狮与海洋生物", content: "La Chocolatera 最著名的常驻居民是海狮,栖息在隔壁的 La Lobería 礁石区。此外,观鲸季节(6-9月)有机会用望远镜看到座头鲸。礁石潮池中有各种贝类和海星。这里不是沙滩游泳区,而是野生海岸观察区。" },
      bring: { title: "游览必备物品", items: ["护照或身份证件(必须通过海军检查站)", "防风外套或厚外套(海边风力极大,气温偏低)", "望远镜(用于观察海狮和远处的座头鲸)", "高倍数防水防晒霜(赤道紫外线依然强烈)", "饮用水(景区内无商店)", "相机或手机(拍摄惊涛拍岸和海狮)", "坚固的防滑鞋(礁石地面湿滑,严禁穿人字拖)"] }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从瓜亚基尔机场出发", content: "距离瓜亚基尔国际机场(GYE)约 140 公里,车程约 2 - 2.5 小时。", options: [
        { name: "租车自驾(最自由)", price: "$40 - $70 美元/天", time: "约 2-2.5 小时", steps: ["在机场租车后,沿 E40 公路向西行驶", "进入萨利纳斯后跟随路标前往 La Chocolatera", "到达海军基地检查站,出示护照/身份证后放行"] },
        { name: "机场大巴+出租车(经济实惠)", price: "$10 - $20 美元", time: "约 3 小时", steps: ["在机场乘坐前往萨利纳斯的长途巴士", "到达萨利纳斯后换乘出租车前往 La Chocolatera", "出租车司机通常熟悉海军检查站的位置"] }
      ]},
      city: { title: "从萨利纳斯市区前往", content: "从萨利纳斯市中心出发,沿海滨大道向西行驶约5公里,即可到达海军基地检查站。", steps: ["导航:在 Google Maps 中输入 La Chocolatera Salinas Ecuador", "检查站:所有乘客需下车出示护照/身份证件,通过后方可进入", "停车:穿过检查站后,有专用停车场,停车费约 $2-3 美元"] },
      selfDrive: { title: "从其他城市前往", content: "从基多或昆卡出发,先抵达瓜亚基尔,再沿 E40 公路前往萨利纳斯。", steps: ["从基多:乘坐国内航班至瓜亚基尔,再转乘车(约2.5小时)", "从昆卡:乘坐长途巴士至瓜亚基尔,再转乘车(约3小时)"] }
    },
    tips: { title: "游览建议与安全提醒", items: [
      "⚠️ 严禁下海游泳:暗流极其危险,此处已发生多起溺亡事故",
      "必带护照/身份证:海军检查站100%查验证件,无证件会被拒之门外",
      "防风装备:海风极大,即使是旱季也建议携带防风外套",
      "最佳观赏时间:清晨海风相对较小时,或傍晚观赏日落(17:00前需离开)",
      "穿防滑鞋:礁石地面湿滑,严禁穿人字拖或光脚行走",
      "海狮观察:保持安静,与海狮保持至少2米距离,严禁投喂",
      "望远镜是神器:可以清晰观察海狮和远处的鲸鱼喷潮"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 La Chocolatera", items: [
      { question: "La Chocolatera 的开放时间是？", answer: "每日约 08:00 - 15:00(部分资料显示可至17:00)。但由于位于海军基地内部,最终放行时间受军事管制影响,可能随时调整。建议14:00前到达,并提前确认。" },
      { question: "进入 La Chocolatera 需要什么证件？", answer: "所有游客必须通过海军基地检查站,100%查验护照(外国游客)或厄瓜多尔身份证件(本国公民)。无证件者会被拒绝进入。请将证件随身携带,不要留在酒店。" },
      { question: "La Chocolatera 可以游泳吗？", answer: "❌ 严禁下海游泳！La Chocolatera 是礁石悬崖海岸,暗流极其湍急危险,已发生多起溺亡事故。这里是观赏海浪和海狮的地方,不是沙滩游泳浴场。如需游泳,请前往附近的 Punta Carnero 海滩。" },
      { question: "La Chocolatera 名字的由来是什么？", answer: "名字来源于此处独特的自然现象:两大洋流(洪堡寒流与赤道暖流)在此交汇,加上猛烈的海浪拍击礁石、卷起海底泥沙,使海水呈现出如同沸腾巧克力般的深棕褐色,因此被称为'La Chocolatera'(巧克力壶)。" },
      { question: "La Chocolatera 适合冲浪吗？", answer: "此处海浪极其猛烈,仅适合有经验的专业冲浪者。对于初学者和普通游客,更适合站在安全的高处礁石上观赏巨浪拍岸的壮观景象,以及观察 La Lobería 的海狮。" },
      { question: "观鲸的最佳季节是什么时候？", answer: "每年6月至9月是座头鲸沿厄瓜多尔海岸迁徙的季节。在 La Chocolatera 高处的礁石上,用望远镜有机会观测到远处的鲸鱼喷潮。这3个月也是海狮活动最为活跃的时期。" },
      { question: "La Chocolatera 附近还有哪些值得一游的景点？", answer: "可以顺路参观:La Lobería(海狮栖息地,步行5分钟)、Punta Carnero 海滩(适合游泳,车程10分钟)、萨利纳斯海滨大道(Malecón de Salinas,完善的度假设施)。" }
    ]},
    location: { title: "地图位置", address: "Base Naval de Salinas, Salinas, 厄瓜多尔\n(海军基地内部,需通过检查站)", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为海洋生态的守护者,请与我们一起尊重自然、保护海洋。严禁下海游泳,注意安全。", text: "© 2026 La Chocolatera 旅行指南 · 保留所有权利。\n本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方旅游资讯项目。为探索者而制", linksTitle: "相关链接", links: [
      { name: "厄瓜多尔国家旅游局", url: "https://ecuador.travel/" },
      { name: "厄瓜多尔环境、水和生态转型部", url: "https://www.ambienteyenergia.gob.ec/" },
      { name: "厄瓜多尔旅游部", url: "https://ecuador.travel/" },
      { name: "圣埃伦娜省政府", url: "https://www.santaelena.gob.ec/" },
      { name: "厄瓜多尔综合旅游指南", url: "https://www.buentrip.app/atractivo-turistico/la-chocolatera/" }
    ]}
  },
  // ===== ENGLISH =====
  en: {
    nav: { about: "Overview", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Westernmost Point of Mainland Ecuador · Raw Power of the Pacific", title: "La Chocolatera", subtitle: "Salinas, Santa Elena, Ecuador · Inside Naval Base", cta: "Explore the Chocolate Sea" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview: The Westernmost Point of Mainland Ecuador",
      p1: "La Chocolatera is located at the westernmost point of mainland Ecuador (Punta Santa Elena), within the Salinas Naval Base (Base Naval de Salinas). This is not a traditional golden-sand beach - it is a dramatic rocky cliff coastline where two major ocean currents (the cold Humboldt Current and the warm Equatorial Current) collide, violently crashing against the rocks and stirring up seafloor sediment, turning the water a distinctive dark brown color resembling boiling chocolate. Hence the name 'La Chocolatera' (the chocolate pot).\n\nThe waves here are extremely powerful and the rip currents are dangerous - swimming is strictly prohibited. However, the spectacular wave action, the unique 'chocolate sea' phenomenon, and the adjacent sea lion colony (La Lobería) make this one of Ecuador's most distinctive coastal attractions.",
      p2: "Access to La Chocolatera requires passing through a military checkpoint at the naval base - all visitors must present a passport or ID card. There are surfing spots nearby (suitable only for experienced surfers), but the main viewing area is for observing the massive waves from the cliffs and enjoying the Pacific sunset. Since the seafront wind is extremely strong, a windbreaker is highly recommended. This is not a place for laying out beach towels - it is a raw, powerful natural spectacle.",
      highlights: { title: "Quick Facts", items: ["Location: Westernmost point of mainland Ecuador, Salinas, Santa Elena Province", "Terrain: Rocky cliff coast - NOT a swimming beach. No swimming allowed.", "Name origin: Ocean currents stir up chocolate-colored water", "Required: Passport or ID (military checkpoint)", "Highlights: Massive waves, La Lobería sea lions, Pacific sunset"] },
      timeline: { title: "Development Timeline", events: [
        { period: "Pre-20th Century: Naval Base Territory", description: "The area where La Chocolatera is located has long been under the jurisdiction of the Ecuadorian Naval Base (Base Naval de Salinas) and was not open to the public." },
        { period: "Late 20th Century: Limited Public Access", description: "With the growth of tourism in Salinas, the naval base opened this area under restricted conditions, but entry still requires passing through a military checkpoint." },
        { period: "21st Century – Present: Iconic Destination", description: "With its unique natural phenomenon and the 'westernmost point' geographic label, La Chocolatera has become one of Ecuador's most iconic coastal attractions, drawing surfers and nature enthusiasts." }
      ]},
      management: { title: "Management & Access Requirements", content: "La Chocolatera is located inside an active Ecuadorian Naval Base. All visitors must pass through a military checkpoint and present a passport or Ecuadorian ID card. The site is free to visit, but access is subject to naval base regulations and opening hours may change without notice." }
    },
    history: {
      title: "Name Origin & Natural Legend: The Chocolate Sea",
      intro: "The poetic name 'La Chocolatera' comes from a unique natural phenomenon at this location, not from any historical chocolate-related industry.\n\nAt Punta Santa Elena, the westernmost point of mainland Ecuador, two world-famous ocean currents violently collide: the cold Humboldt Current from Antarctica meets the warm Equatorial Current. Combined with strong seafront winds, this creates extremely powerful waves. The waves crash violently against the rocky coast, stirring up seafloor sediment and turning the normally clear Pacific water into a distinctive, boiling dark-chocolate brown color.\n\nLocals named this place 'La Chocolatera' (meaning 'the chocolate pot' or 'the chocolate maker') to vividly describe this extraordinary seascape.",
      sections: [
        { subtitle: "1. The Chocolate Sea: A Natural Wonder of Colliding Currents", content: "The core natural phenomenon of La Chocolatera is the chocolate-colored water. This is not pollution - it is the result of two major ocean currents colliding, plus violent wave action against the rocky coast.\n\nWhen massive waves crash into the rocky crevices, a natural blowhole effect can occur - seawater shoots up dramatically from between the rocks. For travelers who love natural wonders and geological phenomena, this is a living marine physics textbook on Ecuador's coastline." },
        { subtitle: "2. The Westernmost Point of Mainland Ecuador", content: "La Chocolatera sits at Punta Santa Elena, the westernmost point of Ecuador's mainland territory. This 'geographic extreme' label gives it extremely high value for geographic exploration and travel bucket lists.\n\nStanding on the rocks at the continent's end, facing the vast Pacific Ocean, feeling the wild sea wind at the confluence of two ocean currents - this 'end of the world' experience is the most captivating charm of La Chocolatera." }
      ],
      buildings: {
        title: "Nearby Attractions",
        items: [
          "La Lobería (Sea Lion Colony): Adjacent to La Chocolatera, this rocky coast is home to a large colony of sea lions. Visitors can observe these marine mammals from a safe distance.",
          "Punta Carnero Beach: About 10 minutes away by car, this is a relatively calm sandy beach suitable for swimming (a sharp contrast to La Chocolatera's dramatic cliffs).",
          "Malecón de Salinas: Features complete tourist infrastructure, restaurants, and nightlife - the best place to experience Ecuador's coastal resort culture."
        ],
        conclusion: "La Chocolatera is not a traditional 'sunbathing and swimming' beach resort. It is a place to witness the raw power of nature. Standing on the rocks, watching massive chocolate-brown waves crash violently against the cliffs, while sea lions lounge lazily on nearby rocks - this experience is one of the most unique memories of Ecuador's coast."
      }
    },
    ecology: {
      title: "Marine Ecology: La Lobería Sea Lion Colony",
      sections: [
        { subtitle: "La Lobería: Home of the Sea Lions", content: "Adjacent to La Chocolatera, La Lobería is a rocky coastal area that hosts a large population of sea lions (Lobo marino) year-round. These massive marine mammals lounge lazily on the rocks to sunbathe, or swim agilely through the waves - a highlight that no visitor should miss.\n\nViewing the sea lions is free. Please observe quietly from a safe distance (at least 2 meters). Do not feed or disturb them." },
        { subtitle: "Whale Watching Season & Marine Biodiversity", content: "From June to September each year, humpback whales (Yubarta) migrate along the Ecuadorian coast. With good luck and binoculars, you can spot distant whale spouts from the high cliffs of La Chocolatera.\n\nIn addition, the rocky tide pools here host various shellfish, starfish, and small marine creatures - an excellent outdoor classroom for children's marine nature education. Since this area is under naval base jurisdiction, the ecological environment remains relatively pristine." },
        { subtitle: "The Marine Significance of Colliding Currents", content: "The Humboldt Current and Equatorial Current converge here, creating not only the unique 'chocolate sea' phenomenon but also supporting rich marine biodiversity. Cold-water and warm-water fish species intersect here, making this one of the most important marine observation points on Ecuador's Pacific coast.\n\nFor marine biology enthusiasts and nature photographers, La Chocolatera offers rare research and photography opportunities." }
      ]
    },
    visiting: {
      title: "Visitor Guide & Naval Base Access",
      hours: { title: "Opening & Access Hours", content: "Daily: approximately 08:00 – 15:00\n(Some sources say up to 17:00, but subject to naval base control)", note: "⚠️ IMPORTANT: La Chocolatera is inside a naval base. Final access time is subject to military control and may change without notice. Arrive before 14:00 and bring ID." },
      price: { title: "Cost", content: "Free entry, no reservation required", note: "Parking fee approx. $2-3 USD. Surfers: waves are extremely dangerous here. Only for experienced surfers - beginners are strongly advised not to enter the water." },
      duration: { title: "Recommended Duration & Warnings", content: "Recommended: 2 - 4 hours", note: "Seafront wind is extremely strong; temperature is 3-5°C lower than Salinas city center. 🚫 SWIMMING STRICTLY PROHIBITED - rip currents are extremely dangerous. View from safe cliff areas only." },
      animals: { title: "Wildlife: Sea Lions & Marine Life", content: "The most famous residents of La Chocolatera are the sea lions at adjacent La Lobería. Humpback whales can be spotted (with binoculars) during migration season (June-Sept). Tide pools contain various shellfish and starfish. This is NOT a swimming beach - it is a wild coast observation area." },
      bring: { title: "Essential Items", items: ["Passport or ID card (MANDATORY for military checkpoint)", "Windbreaker or warm jacket (extremely windy, cooler than town)", "Binoculars (for observing sea lions and distant whales)", "Waterproof high-SPF sunscreen (equatorial UV is still strong)", "Drinking water (no shops on-site)", "Camera (for waves and sea lions)", "Sturdy non-slip shoes (rocks are wet and slippery - flip-flops strictly NOT recommended)"] }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Guayaquil Airport", content: "About 140 km from Guayaquil International Airport (GYE), approx. 2 - 2.5 hour drive.", options: [
        { name: "Car Rental (Most Flexible)", price: "$40 - $70 USD/day", time: "About 2-2.5 hours", steps: ["Rent a car at the airport, drive west on E40 highway", "Follow signs to La Chocolatera in Salinas", "At the naval base checkpoint: all passengers must exit the vehicle and show passports/ID cards"] },
        { name: "Airport Bus + Taxi (Economical)", price: "$10 - $20 USD", time: "About 3 hours", steps: ["Take a long-distance bus from the airport to Salinas", "Transfer to a taxi to La Chocolatera", "Taxi drivers are usually familiar with the naval checkpoint location"] }
      ]},
      city: { title: "From Salinas Downtown", content: "From downtown Salinas, drive west along the coastal boulevard for about 5 km to reach the naval base checkpoint.", steps: ["Navigation: Enter La Chocolatera Salinas Ecuador in Google Maps", "Checkpoint: ALL passengers must exit and show passports/ID cards to enter", "Parking: After passing the checkpoint, there is a dedicated parking lot, approx. $2-3 USD"] },
      selfDrive: { title: "From Other Cities", content: "From Quito or Cuenca, arrive in Guayaquil first, then travel along the E40 highway to Salinas.", steps: ["From Quito: Take a domestic flight to Guayaquil, then transfer to a car (about 2.5 hours)", "From Cuenca: Take a long-distance bus to Guayaquil, then transfer to a car (about 3 hours)"] }
    },
    tips: { title: "Travel Tips & Safety Warnings", items: [
      "🚫 NO SWIMMING: Rip currents are extremely dangerous. Multiple drownings have occurred here.",
      "MANDATORY ID: Passport/ID card is 100% checked at the naval checkpoint - no exceptions",
      "Wind protection: Extremely windy even in dry season - bring a windbreaker",
      "Best viewing time: Early morning (calmer winds) or late afternoon for sunset (must leave by 15:00-17:00)",
      "Wear non-slip shoes: Rocks are wet and slippery - flip-flops and bare feet are dangerous",
      "Sea lion viewing: Keep quiet, maintain at least 2m distance, do NOT feed",
      "Binoculars are key: For spotting sea lions and distant whale spouts"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about La Chocolatera", items: [
      { question: "What are the opening hours of La Chocolatera?", answer: "Daily approx. 08:00 - 15:00 (some sources say up to 17:00). However, since it is inside a naval base, final access time is subject to military control and may change without notice. Arrive before 14:00 and check in advance." },
      { question: "What documents are required to enter La Chocolatera?", answer: "All visitors must pass through the naval base checkpoint. Passports (foreign visitors) or Ecuadorian ID cards (citizens) are 100% checked. No ID = no entry. Always carry your documents with you - do NOT leave them at the hotel." },
      { question: "Can you swim at La Chocolatera?", answer: "❌ NO. Swimming is strictly prohibited. La Chocolatera is a rocky cliff coast with extremely dangerous rip currents. Multiple drowning incidents have occurred. This is a wave-viewing and sea lion observation area, NOT a swimming beach. For swimming, go to nearby Punta Carnero Beach." },
      { question: "What is the origin of the name 'La Chocolatera'?", answer: "The name comes from the unique natural phenomenon here: two ocean currents (Humboldt and Equatorial) collide, and violent waves crash against rocks, stirring up seafloor sediment and turning the water a dark chocolate brown color - hence 'La Chocolatera' (the chocolate pot)." },
      { question: "Is La Chocolatera good for surfing?", answer: "The waves here are extremely powerful and recommended ONLY for experienced professional surfers. For beginners and casual visitors, it is better to observe the massive waves from the safety of the high cliffs, and watch the sea lions at La Lobería." },
      { question: "When is the best season for whale watching?", answer: "June to September is the humpback whale migration season along the Ecuadorian coast. From the high cliffs of La Chocolatera, you may be able to spot distant whale spouts with binoculars. These 3 months are also when sea lion activity is most vibrant." },
      { question: "What other attractions are worth visiting near La Chocolatera?", answer: "You can also visit: La Lobería (sea lion colony, 5-minute walk), Punta Carnero Beach (swimming-friendly, 10 minutes by car), Malecón de Salinas (complete resort amenities)." }
    ]},
    location: { title: "Map Location", address: "Base Naval de Salinas, Salinas, Ecuador\n(Inside naval base - military checkpoint required)", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As guardians of the marine ecosystem, please join us in respecting nature and protecting the ocean. No swimming. Stay safe.", text: "© 2026 La Chocolatera Travel Guide · All rights reserved.\nThis website is an independent third-party travel information project. We are not affiliated with the local government or any official authority.", made: "This website is an independent third-party travel information project. Made for explorers.", linksTitle: "Related Links", links: [
      { name: "Ecuador National Tourism Board", url: "https://ecuador.travel/" },
      { name: "Ministry of Environment, Water and Ecological Transition", url: "https://www.ambienteyenergia.gob.ec/" },
      { name: "Ministry of Tourism", url: "https://ecuador.travel/" },
      { name: "Santa Elena Provincial Government", url: "https://www.santaelena.gob.ec/" },
      { name: "Ecuador Comprehensive Travel Guide", url: "https://www.buentrip.app/atractivo-turistico/la-chocolatera/" }
    ]}
  },
  // ===== SPANISH =====
  es: {
    nav: { about: "Descripción General", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Punto más occidental del Ecuador continental · Maravilla natural del Pacífico", title: "La Chocolatera", subtitle: "Salinas, Santa Elena, Ecuador · Dentro de la Base Naval", cta: "Explora el Mar Chocolate" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General: El Punto Más Occidental del Ecuador Continental",
      p1: "La Chocolatera se encuentra en el punto más occidental del territorio continental de Ecuador (Punta Santa Elena), dentro de la Base Naval de Salinas. Este no es una playa tradicional de arena dorada - es una costa dramática de acantilados rocosos donde dos corrientes oceánicas principales (la fría Corriente de Humboldt y la cálida Corriente Ecuatorial) colisionan, golpeando violentamente contra las rocas y removiendo el sedimento del fondo marino, dándole al agua un distintivo color marrón oscuro similar al chocolate hirviendo. De ahí el nombre 'La Chocolatera'.\n\nLas olas aquí son extremadamente poderosas y las corrientes de resaca son peligrosas - está estrictamente prohibido bañarse. Sin embargo, el espectácuro de las olas masivas, el único fenómeno del 'mar chocolate' y la colonia de lobos marinos adyacente (La Lobería) hacen de este uno de los atractivos costeros más distintivos de Ecuador.",
      p2: "El acceso a La Chocolatera requiere pasar por un punto de control militar de la base naval - todos los visitantes deben presentar pasaporte o cédula de identidad. Hay puntos de surf cercanos (solo adecuados para surfistas experientes), pero el área principal de visualización es para observar las masivas olas desde los acantilados y disfrutar de la puesta de sol del Pacífico. Dado que el viento costero es extremadamente fuerte, se recomienda encarecidamente llevar una chaqueta cortavientos. Este no es un lugar para extender toallas de playa - es un espectácuro natural crudo y poderoso.",
      highlights: { title: "Datos Rápidos", items: ["Ubicación: Punto más occidental de Ecuador continental, Salinas, Provincia de Santa Elena", "Terreno: Acantilados rocosos - NO es playa para bañarse. Prohibido bañarse.", "Origen del nombre: Corrientes oceánicas remueven el agua con color chocolate", "Requerido: Pasaporte o cédula (control militar)", "Destacados: Olas masivas, lobos marinos de La Lobería, puesta de sol del Pacífico"] },
      timeline: { title: "Línea de Tiempo", events: [
        { period: "Pre-siglo XX: Territorio de Base Naval", description: "El área donde se encuentra La Chocolatera ha estado bajo la jurisdicción de la Base Naval de Salinas durante mucho tiempo y no estaba abierta al público." },
        { period: "Finales del siglo XX: Acceso Público Limitado", description: "Con el crecimiento del turismo en Salinas, la base naval abrió esta área bajo condiciones restringidas, pero el acceso aún requiere pasar por un punto de control militar." },
        { period: "Siglo XXI – Actualidad: Destino Icónico", description: "Con su único fenómeno natural y la etiqueta de 'punto más occidental', La Chocolatera se ha convertido en uno de los atractivos costeros más icónicos de Ecuador, atrayendo a surfistas y entusiastas de la naturaleza." }
      ]},
      management: { title: "Gestión y Requisitos de Acceso", content: "La Chocolatera se encuentra dentro de una Base Naval activa. Todos los visitantes deben pasar por un punto de control militar y presentar pasaporte o cédula ecuatoriana. La entrada es gratuita, pero el acceso está sujeto a las regulaciones de la base naval y el horario puede cambiar sin previo aviso." }
    },
    history: {
      title: "Origen del Nombre y Leyenda Natural: El Mar Chocolate",
      intro: "El poético nombre 'La Chocolatera' proviene de un fenómeno natural único en este lugar, no de ninguna industria historica relacionada con el chocolate.\n\nEn Punta Santa Elena, el punto más occidental del territorio continental de Ecuador, dos corrientes oceánicas mundialmente famosas colisionan violentamente: la fría Corriente de Humboldt desde la Antártida se encuentra con la cálida Corriente Ecuatorial. Combinado con fuertes vientos costeros, esto crea olas extremadamente poderosas. Las olas golpean violentamente contra la costa rocosa, removiendo el sedimento del fondo marino y dándole al agua normalmente clara del Pacífico un distintivo color marrón oscuro hirviendo, similar al chocolate.\n\nLos locales nombraron este lugar 'La Chocolatera' (que significa 'la olla de chocolate' o 'el fabricante de chocolate') para describir vividamente este extraordinario paisaje marino.",
      sections: [
        { subtitle: "1. El Mar Chocolate: Un Maravilla Natural de Corrientes que Colisionan", content: "El fenómeno natural central de La Chocolatera es el agua de color chocolate. Esto no es contaminación - es el resultado de dos corrientes oceánicas principales colisionando, más la violenta acción de las olas contra la costa rocosa.\n\nCuando las masivas olas golpean las grietas rocosas, puede ocurrir un efecto de 'respiradero' (blowhole) natural: el agua del mar se dispara dramáticamente entre las rocas. Para los viajeros que aman los fenómenos naturales y geológicos, este es un libro de texto viviente de física marina en la costa de Ecuador." },
        { subtitle: "2. El Punto más Occidental de Ecuador Continental", content: "La Chocolatera se encuentra en Punta Santa Elena, el punto más occidental del territorio continental de Ecuador. Esta etiqueta de 'extremo geográfico' le da un valor extremadamente alto para la exploración geográfica y la lista de 'bucket list' de viajes.\n\nPararse en las rocas en el extremo del continente, mirando hacia el vasto Océano Pacífico, sintiendo el viento salvaje del mar en la confluencia de dos corrientes oceánicas - esta experiencia de 'fin del mundo' es el encanto más cautivador de La Chocolatera." }
      ],
      buildings: {
        title: "Atracciones Cercanas",
        items: [
          "La Lobería (Colonia de Lobos Marinos): Adyacente a La Chocolatera, esta costa rocosa es hogar de una gran colonia de lobos marinos durante todo el año. Los visitantes pueden observar estos mamíferos marinos desde una distancia segura.",
          "Playa Punta Carnero: A unos 10 minutos en automóvil, esta es una playa de arena relativamente tranquila adecuada para bañarse (un contraste agudo con los dramáticos acantilados de La Chocolatera).",
          "Malecón de Salinas: Cuenta con infraestructura turística completa, restaurantes y vida nocturna - el mejor lugar para experimentar la cultura de balneario de la costa ecuatoriana."
        ],
        conclusion: "La Chocolatera no es un complejo balneario tradicional de 'tomas de sol y baño'. Es un lugar para presenciar el poder crudo de la naturaleza. Pararse en las rocas, mirando las masivas olas de color chocolate golpear violentamente contra los acantilados, mientras los lobos marinos descansan perezosamente en las rocas cercanas - esta experiencia es uno de los recuerdos más únicos de la costa de Ecuador."
      }
    },
    ecology: {
      title: "Ecología Marina y Vida Silvestre",
      sections: [
        { subtitle: "La Lobería: Hogar de los Lobos Marinos", content: "Adyacente a La Chocolatera, La Lobería es un área costera rocosa que alberga una gran población de lobos marinos (Lobo marino) durante todo el año. Estos enormes mamíferos marinos descansan perezosamente en las rocas tomando el sol, o nadan ágilmente a través de las olas - un destacado que ningún visitante debe perderse.\n\nObservar los lobos marinos es gratuito. Por favor observe en silencio desde una distancia segura (al menos 2 metros). No alimente ni moleste a los animales." },
        { subtitle: "Temporada de Avistamiento de Ballenas y Biodiversidad Marina", content: "De junio a septiembre de cada año, las ballenas jorobadas (Yubarta) migran a lo largo de la costa ecuatoriana. Con suerte y binoculares, puede divisar los chorros de las ballenas distantes desde los altos acantilados de La Chocolatera.\n\nAdemás, las pozas de marea rocosas aquí albergan varios mariscos, estrellas de mar y pequeños seres marinos - un excelente aula al aire libre para la educación natural marina de los niños. Dado que esta área está bajo jurisdicción de la base naval, el ambiente ecológico permanece relativamente prístino." },
        { subtitle: "El Significado Marino de las Corrientes que Colisionan", content: "La Corriente de Humboldt y la Corriente Ecuatorial convergen aquí, creando no solo el único fenómeno del 'mar chocolate', sino también soportando rica biodiversidad marina. Las especies de peces de agua fría y cálida se intersectan aquí, haciendo de este uno de los puntos de observación marina más importantes de la costa del Pacífico de Ecuador.\n\nPara los entusiastas de la biología marina y los fotógrafos de naturaleza, La Chocolatera ofrece raras oportunidades de investigación y fotografía." }
      ]
    },
    visiting: {
      title: "Guía de Visita y Acceso a la Base Naval",
      hours: { title: "Horario de Apertura y Acceso", content: "Diario: aproximadamente 08:00 – 15:00\n(Algunas fuentes dicen hasta las 17:00, pero sujeto a control de la base naval)", note: "⚠️ IMPORTANTE: La Chocolatera está dentro de una base naval. La hora final de acceso está sujeta a control militar y puede cambiar sin previo aviso. Llegue antes de las 14:00 y traiga identificación." },
      price: { title: "Costo", content: "Entrada gratuita, no se requiere reserva", note: "Estacionamiento aproximadamente $2-3 USD. Surfistas: las olas son extremadamente peligrosas. Solo para surfistas experientes - los principiantes están fuertemente aconsejados a no entrar al agua." },
      duration: { title: "Duración Recomendada y Advertencias", content: "Recomendado: 2 - 4 horas", note: "El viento costero es extremadamente fuerte; la temperatura es 3-5°C más baja que el centro de Salinas. 🚫 PROHIBIDO BAÑARSE - las corrientes de resaca son extremadamente peligrosas. Solo observar desde áreas seguras de los acantilados." },
      animals: { title: "Vida Silvestre: Lobos Marinos y Vida Marina", content: "Los residentes más famosos de La Chocolatera son los lobos marinos en la adyacente La Lobería. Las ballenas jorobadas pueden avistarse (con binoculares) durante la temporada de migración (junio-septiembre). Las pozas de marea contienen varios mariscos y estrellas de mar. Este NO es una playa para bañarse - es un área de observación de costa salvaje." },
      bring: { title: "Artículos Esenciales", items: ["Pasaporte o cédula de identidad (OBLIGATORIO para el control militar)", "Chaquetón cortavientos o chaqueta abrigadora (extremadamente ventoso, más frío que el pueblo)", "Binoculares (para observar lobos marinos y ballenas distantes)", "Protector solar impermeable de alto FPS (la radiación ecuatorial sigue siendo fuerte)", "Agua potable (no hay tiendas en el sitio)", "Cámara (para las olas y los lobos marinos)", "Zapatos firmes antideslizantes (las rocas están mojadas y son resbaladizas - las chanclas están estrictamente desaconsejadas)"] }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Guayaquil", content: "A unos 140 km del Aeropuerto Internacional de Guayaquil (GYE), aproximadamente 2 - 2.5 horas en automóvil.", options: [
        { name: "Arrendamiento de Automóvil (Más Flexible)", price: "$40 - $70 USD/día", time: "Aproximadamente 2-2.5 horas", steps: ["Arrendar un automóvil en el aeropuerto, conducir hacia el oeste en la carretera E40", "Seguir los letreros a La Chocolatera en Salinas", "En el punto de control de la base naval: todos los pasajeros deben bajar y mostrar pasaportes/cédulas"] },
        { name: "Autobús del Aeropuerto + Taxi (Económico)", price: "$10 - $20 USD", time: "Aproximadamente 3 horas", steps: ["Tomar un autobús de larga distancia del aeropuerto a Salinas", "Transbordar a un taxi a La Chocolatera", "Los conductores de taxi generalmente conocen la ubicación del punto de control naval"] }
      ]},
      city: { title: "Desde el Centro de Salinas", content: "Desde el centro de Salinas, conducir hacia el oeste a lo largo del bulevar costero por aproximadamente 5 km para llegar al punto de control de la base naval.", steps: ["Navegación: Ingresar La Chocolatera Salinas Ecuador en Google Maps", "Control: TODOS los pasajeros deben bajar y mostrar pasaportes/cédulas para entrar", "Estacionamiento: Después de pasar el control, hay un estacionamiento dedicado, aproximadamente $2-3 USD"] },
      selfDrive: { title: "Desde Otras Ciudades", content: "Desde Quito o Cuenca, llegue a Guayaquil primero, luego viaje a lo largo de la carretera E40 a Salinas.", steps: ["Desde Quito: Tomar un vuelo doméstico a Guayaquil, luego transFiéra a un automóvil (aproximadamente 2.5 horas)", "Desde Cuenca: Tomar un autobús de larga distancia a Guayaquil, luego transFiéra a un automóvil (aproximadamente 3 horas)"] }
    },
    tips: { title: "Consejos de Viaje y Advertencias de Seguridad", items: [
      "🚫 NO BAÑARSE: Las corrientes de resaca son extremadamente peligrosas. Se han producido múltiples ahogamientos aquí.",
      "IDENTIFICACIÓN OBLIGATORIA: Pasaporte/cédula es 100% revisado en el control naval - sin excepción",
      "Protección contra el viento: Extremadamente ventoso incluso en temporada seca - traiga chaquetón",
      "Mejor momento para observar: Madrugada (vientos más calmos) o tarde tarde para la puesta de sol (debe salir a las 15:00-17:00)",
      "Usar zapatos antideslizantes: Las rocas están mojadas y son resbaladizas - las chanclas y pies descalzos son peligrosos",
      "Observación de lobos marinos: Mantener silencio, distancia mínima 2m, NO alimentar",
      "Los binoculares son clave: Para observar lobos marinos y chorros de ballenas distantes"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    reviews: { title: "Reseñas de Visitantes", subtitle: "Reseñas reales de Google Maps", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Conozca más sobre La Chocolatera", items: [
      { question: "¿Cuál es el horario de apertura de La Chocolatera?", answer: "Diario aproximadamente 08:00 - 15:00 (algunas fuentes dicen hasta las 17:00). Sin embargo, como está dentro de una base naval, la hora final de acceso está sujeta a control militar y puede cambiar sin previo aviso. Llegue antes de las 14:00 y verifique de antemano." },
      { question: "¿Qué documentos se requieren para entrar a La Chocolatera?", answer: "Todos los visitantes deben pasar por el punto de control de la base naval. Pasaportes (visitantes extranjeros) o cédulas ecuatorianas (ciudadanos) son 100% revisados. Sin identificación = no entrada. Siempre lleve sus documentos con usted - NO los deje en el hotel." },
      { question: "¿Se puede bañar en La Chocolatera?", answer: "❌ NO. Está estrictamente prohibido bañarse. La Chocolatera es una costa de acantilados rocosos con corrientes de resaca extremadamente peligrosas. Se han producido múltiples incidentes de ahogamiento. Esta es un área para observar olas y lobos marinos, NO es una playa para bañarse. Para bañarse, vaya a la cercana Playa Punta Carnero." },
      { question: "¿Cuál es el origen del nombre 'La Chocolatera'?", answer: "El nombre proviene del único fenómeno natural aquí: dos corrientes oceánicas (Humboldt y Ecuatorial) colisionan, y las violentas olas golpean contra las rocas, removiendo el sedimento y dándole al agua un color marrón oscuro similar al chocolate - de ahí 'La Chocolatera' (la olla de chocolate)." },
      { question: "¿Es bueno La Chocolatera para el surf?", answer: "Las olas aquí son extremadamente poderosas y solo se recomiendan para surfistas experientes profesionales. Para principiantes y visitantes casuales, es mejor observar las masivas olas desde la seguridad de los altos acantilados, y mirar los lobos marinos en La Lobería." },
      { question: "¿Cuál es la mejor temporada para el avistamiento de ballenas?", answer: "Junio a septiembre es la temporada de migración de ballenas jorobadas a lo largo de la costa ecuatoriana. Desde los altos acantilados de La Chocolatera, puede divisar chorros de ballenas distantes con binoculares. Estos 3 meses son también cuando la actividad de los lobos marinos es más vibrante." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca de La Chocolatera?", answer: "También puede visitar: La Lobería (colonia de lobos marinos, 5 minutos a pie), Playa Punta Carnero (adecuada para bañarse, 10 minutos en automóvil), Malecón de Salinas (amenidades completas de balneario)." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "Base Naval de Salinas, Salinas, Ecuador\n(Dentro de la base naval - se requiere control militar)", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como guardianes del ecosistema marino, por favor únanse a nosotros para respetar la naturaleza y proteger el océano. No bañarse. Manténgase seguro.", text: "© 2026 Guía de Viaje de La Chocolatera · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de información turística. No estamos afiliados con el gobierno local ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto independiente de información turística. Hecho para exploradores.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Dirección Nacional de Turismo", url: "https://ecuador.travel/" },
      { name: "Ministerio de Ambiente, Agua y Transición Ecológica", url: "https://www.ambienteyenergia.gob.ec/" },
      { name: "Ministerio de Turismo", url: "https://ecuador.travel/" },
      { name: "Gobierno Provincial de Santa Elena", url: "https://www.santaelena.gob.ec/" },
      { name: "Guía Integral de Turismo de Ecuador", url: "https://www.buentrip.app/atractivo-turistico/la-chocolatera/" }
    ]}
  }
};
