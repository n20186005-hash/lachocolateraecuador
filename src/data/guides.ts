import { faro } from "./el-faro";
import { chipipe } from "./chipipe";

import coastalPlaces from "./coastal-places.json";

export const guides = [faro, chipipe, ...coastalPlaces];
export const guideLabels = {
  en: { nearby: "Nearby places", privacy: "Privacy policy", terms: "Terms of service", cookies: "Cookie settings", sections: ["Explore", "Planning your visit", "What to look for", "About the site", "Visitor information", "Opening hours", "Admission", "Getting there", "Coastal heritage", "Walking route", "On the trail", "Photo positions", "Where to stay", "Visitor reviews", "Address and directions", "Frequently asked questions", "Sources"], facts: ["Place", "Address", "Management", "Opening hours", "Admission"], map: "Open the place in Maps", reviews: "See visitor reviews" },
  es: { nearby: "Lugares cercanos", privacy: "Privacidad", terms: "Condiciones de uso", cookies: "Configuración de cookies", sections: ["Explorar", "Consejos para la visita", "Qué observar", "Sobre el lugar", "Información básica", "Horario", "Entrada", "Cómo llegar", "Patrimonio costero", "Recorrido a pie", "Durante el paseo", "Dónde tomar fotos", "Dónde alojarse", "Opiniones de visitantes", "Dirección y mapa", "Preguntas frecuentes", "Fuentes"], facts: ["Lugar", "Dirección", "Administración", "Horario", "Entrada"], map: "Ver el lugar en Maps", reviews: "Consultar opiniones" },
  zh: { nearby: "周边景点", privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 设置", sections: ["探索景点", "游览建议", "现场看点", "关于景点", "基础信息", "开放时间", "门票价格", "交通方式", "发现海岸魅力", "步行游线", "游览须知", "拍照机位", "住宿建议", "游客评价", "地址与地图", "常见问题", "资料来源"], facts: ["景点", "地址", "管理主体", "开放时间", "入园费用"], map: "在地图中查看景点", reviews: "查看游客评价" }
};
