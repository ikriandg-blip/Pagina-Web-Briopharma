export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
  badge?: string
  featured?: boolean
}

export const categories = [
  { id: 'vitaminas', name: 'Vitaminas', icon: '💊', description: 'Vitaminas esenciales para tu bienestar' },
  { id: 'suplementos', name: 'Suplementos', icon: '🌿', description: 'Suplementos naturales de alta calidad' },
  { id: 'control-peso', name: 'Control de Peso', icon: '⚖️', description: 'Apoya tu camino hacia el peso ideal' },
  { id: 'medicina-natural', name: 'Medicina Natural', icon: '🌱', description: 'Remedios naturales y herbolaria' },
  { id: 'nutricion-deportiva', name: 'Nutrición Deportiva', icon: '💪', description: 'Potencia tu rendimiento atlético' },
  { id: 'cuidado-personal', name: 'Cuidado Personal', icon: '✨', description: 'Belleza y cuidado con ingredientes naturales' },
]

const products: Array<Product> = [
  // Vitaminas
  {
    id: 1,
    name: 'Vitamina C 1000mg',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    description: 'Vitamina C de alta potencia con zinc y bioflavonoides. Fortalece el sistema inmune, actúa como poderoso antioxidante y ayuda en la absorción del hierro. Formulación avanzada con liberación prolongada para máxima efectividad.',
    shortDescription: 'Alta potencia con zinc y bioflavonoides para un sistema inmune fuerte.',
    price: 45000,
    category: 'vitaminas',
    badge: 'Más vendido',
    featured: true,
  },
  {
    id: 2,
    name: 'Complejo B Plus',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80',
    description: 'Complejo completo de vitaminas del grupo B: B1, B2, B3, B5, B6, B7, B9 y B12. Esencial para la energía celular, función nerviosa y metabolismo de proteínas y carbohidratos.',
    shortDescription: 'Fórmula completa de vitaminas B para energía y vitalidad.',
    price: 38000,
    category: 'vitaminas',
    featured: true,
  },
  {
    id: 3,
    name: 'Vitamina D3 + K2',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
    description: 'Combinación sinérgica de Vitamina D3 y K2 para la salud ósea óptima. Favorece la absorción del calcio y dirige los minerales a los huesos, previniendo su depósito en arterias.',
    shortDescription: 'Sinergia perfecta para huesos fuertes y salud cardiovascular.',
    price: 52000,
    category: 'vitaminas',
    badge: 'Nuevo',
  },
  // Suplementos
  {
    id: 4,
    name: 'Omega 3 Premium',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    description: 'Aceite de pescado de alta pureza con 1000mg de EPA y DHA. Apoya la salud cardiovascular, función cerebral y reduce la inflamación. Certificado libre de metales pesados y contaminantes.',
    shortDescription: 'Aceite de pescado premium para corazón y cerebro saludables.',
    price: 65000,
    category: 'suplementos',
    badge: 'Premium',
    featured: true,
  },
  {
    id: 5,
    name: 'Colágeno Hidrolizado',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    description: 'Colágeno tipo I y III hidrolizado con vitamina C y ácido hialurónico. Mejora la elasticidad de la piel, fortalece articulaciones, cabello y uñas. Sabor natural de frutas tropicales.',
    shortDescription: 'Rejuvenece piel, articulaciones, cabello y uñas desde adentro.',
    price: 78000,
    category: 'suplementos',
    featured: true,
  },
  {
    id: 6,
    name: 'Magnesio Quelado',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80',
    description: 'Magnesio en forma quelada de alta biodisponibilidad. Reduce calambres musculares, mejora la calidad del sueño, alivia el estrés y apoya más de 300 funciones enzimáticas en el cuerpo.',
    shortDescription: 'Alta absorción para músculos, sueño y manejo del estrés.',
    price: 42000,
    category: 'suplementos',
  },
  // Control de Peso
  {
    id: 7,
    name: 'Té Detox Slim',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    description: 'Mezcla premium de té verde, jengibre, canela y hierbas naturales depurativas. Acelera el metabolismo, elimina toxinas y reduce la retención de líquidos. Sabor delicioso sin azúcar añadida.',
    shortDescription: 'Depura, activa tu metabolismo y reduce medidas naturalmente.',
    price: 35000,
    category: 'control-peso',
    badge: 'Oferta',
    featured: true,
  },
  {
    id: 8,
    name: 'Garcinia Cambogia 500mg',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    description: 'Extracto puro de Garcinia Cambogia con 60% de HCA. Suprime el apetito naturalmente, bloquea la formación de grasa y mejora el perfil lipídico. Sin estimulantes ni efectos secundarios.',
    shortDescription: 'Supresor natural del apetito con alto contenido de HCA.',
    price: 48000,
    category: 'control-peso',
  },
  {
    id: 9,
    name: 'L-Carnitina Líquida',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    description: 'L-Carnitina en forma líquida de rápida absorción con sabor a naranja. Transforma la grasa acumulada en energía, mejora el rendimiento deportivo y acelera la recuperación muscular.',
    shortDescription: 'Convierte grasa en energía para mayor rendimiento.',
    price: 58000,
    category: 'control-peso',
  },
  // Medicina Natural
  {
    id: 10,
    name: 'Curcumina + Piperina',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80',
    description: 'Extracto de cúrcuma estandarizado al 95% de curcuminoides combinado con piperina negra que aumenta la absorción 2000%. Potente antiinflamatorio natural, antioxidante y protector hepático.',
    shortDescription: 'Antiinflamatorio natural de máxima potencia y absorción.',
    price: 55000,
    category: 'medicina-natural',
    badge: 'Más vendido',
    featured: true,
  },
  {
    id: 11,
    name: 'Valeriana & Pasiflora',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&q=80',
    description: 'Combinación de extractos de valeriana y pasiflora para el manejo natural del estrés y la ansiedad. Promueve el sueño reparador sin generar dependencia ni somnolencia diurna.',
    shortDescription: 'Relaja mente y cuerpo para un sueño profundo y natural.',
    price: 40000,
    category: 'medicina-natural',
  },
  {
    id: 12,
    name: 'Equinácea + Propóleo',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80',
    description: 'Fórmula inmunológica con equinácea purpúrea y propóleo de alta pureza. Estimula las defensas naturales del organismo, reduce la duración de resfriados y actúa como antibiótico natural.',
    shortDescription: 'Refuerza tus defensas con el poder de la naturaleza.',
    price: 44000,
    category: 'medicina-natural',
  },
  // Nutrición Deportiva
  {
    id: 13,
    name: 'Proteína Whey Gold',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80',
    description: 'Proteína de suero de leche aislada con 25g de proteína por porción y mínima grasa y carbohidratos. Absorción rápida ideal post-entrenamiento para máxima síntesis muscular. Sabor chocolate.',
    shortDescription: '25g de proteína por porción para recuperación muscular óptima.',
    price: 120000,
    category: 'nutricion-deportiva',
    badge: 'Premium',
    featured: true,
  },
  {
    id: 14,
    name: 'Creatina Monohidratada',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    description: 'Creatina monohidratada micronizada de grado farmacéutico. Aumenta la fuerza, potencia y masa muscular. Mejora el rendimiento en ejercicios de alta intensidad y acelera la recuperación.',
    shortDescription: 'Aumenta fuerza, potencia y masa muscular de forma natural.',
    price: 85000,
    category: 'nutricion-deportiva',
  },
  {
    id: 15,
    name: 'BCAA 2:1:1 Tropical',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    description: 'Aminoácidos de cadena ramificada en proporción óptima 2:1:1 con electrolitos y vitamina B6. Previene el catabolismo muscular, reduce el cansancio durante el entrenamiento y mejora la hidratación.',
    shortDescription: 'Protege músculo y mejora rendimiento con sabor tropical.',
    price: 72000,
    category: 'nutricion-deportiva',
  },
  // Cuidado Personal
  {
    id: 16,
    name: 'Aceite de Argán Puro',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
    description: 'Aceite de argán virgen 100% puro prensado en frío. Hidrata profundamente piel y cabello, reduce arrugas y estrías, controla el frizz y añade brillo natural. Multiusos para rostro, cuerpo y cabello.',
    shortDescription: 'Oro líquido para piel radiante y cabello brillante.',
    price: 62000,
    category: 'cuidado-personal',
    badge: 'Natural 100%',
    featured: true,
  },
  {
    id: 17,
    name: 'Jabón de Miel y Avena',
    image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=600&q=80',
    description: 'Jabón artesanal con miel pura de abeja y harina de avena. Limpia suavemente sin resecar, calma la irritación y la picazón, ideal para pieles sensibles. Libre de parabenos, sulfatos y colorantes artificiales.',
    shortDescription: 'Limpieza suave y nutritiva para pieles sensibles.',
    price: 28000,
    category: 'cuidado-personal',
  },
  {
    id: 18,
    name: 'Crema de Aloe Vera SPF 30',
    image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&q=80',
    description: 'Hidratante facial con aloe vera orgánico, ácido hialurónico y protección solar SPF 30. Hidrata durante 24 horas, reduce la aparición de manchas y protege del fotoenvejecimiento.',
    shortDescription: 'Hidratación intensa con protección solar todo el día.',
    price: 55000,
    category: 'cuidado-personal',
  },
]

export default products
