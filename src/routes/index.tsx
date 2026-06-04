import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import products, { categories } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { WhatsAppFloat, WhatsAppIcon, buildWhatsAppUrl } from '@/components/WhatsApp'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const featured = products.filter((p) => p.featured)
  const filtered =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ProductCatalog products={filtered} activeCategory={activeCategory} />
        <FeaturedSection products={featured} />
        <PromotionsSection />
        <TestimonialsSection />
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

/* ─── Header ─── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { href: '#categorias', label: 'Categorías' },
    { href: '#productos', label: 'Productos' },
    { href: '#promociones', label: 'Promociones' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#ubicaciones', label: 'Sedes' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-sky-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center">
  <img
    src="/images/logo.png"
    alt="BrioPharma"
    className="h-12 w-auto object-contain"
  />
</div>
            <div>
              <span className="font-bold textsky-700 text-lg leading-none block">BrioPharma</span>
              <span className="font-semibold text-sky-800 text-xs leading-none tracking-widest uppercase">Tienda</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-sky-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={buildWhatsAppUrl('¡Hola! Quiero asesoría personalizada sobre productos naturales.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 btn-whatsapp text-white text-sm font-semibold px-4 py-2 rounded-xl"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Asesoría
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 text-sky-800"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-sky-700 py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl('¡Hola! Quiero asesoría personalizada sobre productos naturales.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-whatsapp text-white text-sm font-semibold px-4 py-2 rounded-xl w-full justify-center mt-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Asesoría por WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/banner-principal.png.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="flex justify-center items-center text-center">
          <div className="text-white max-w-4xl mx-auto">
            <span className="inline-block bg-cyan-500/20 backdrop-blur-sm text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-cyan-300/30">
              💙 Salud • Bienestar • Calidad
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Tu Salud y Bienestar
              <br />
              <span className="text-cyan-300">
                Comienzan Aquí
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Encuentra vitaminas, suplementos, nutrición deportiva,
              productos naturales y asesoría especializada para mejorar
              tu calidad de vida y la de toda tu familia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2 bg-white text-cyan-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-base"
              >
                Ver Catálogo

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>

              <a
                href={buildWhatsAppUrl(
                  '¡Hola! Quiero asesoría personalizada sobre productos naturales.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Asesoría Gratis
              </a>
            </div>

            <div className="flex items-center justify-center gap-10 mt-12 pt-10 border-t border-white/20">
              {[
                { value: '3000+', label: 'Productos' },
                { value: 'Expertos', label: 'Asesoría' },
                { value: '2', label: 'Puntos de Venta' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">
                    {stat.value}
                  </div>

                  <div className="text-xs md:text-sm text-cyan-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L1440 60L1440 0C1200 40 720 60 0 0L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

/* ─── Categories Section ─── */
function CategoriesSection({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string
  setActiveCategory: (c: string) => void
}) {
  return (
    <section id="categorias" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Explora</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
            Nuestras Categorías
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Todo lo que necesitas para tu salud y bienestar en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`group flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
              activeCategory === 'all'
                ? 'border-green-600 bg-green-600 text-white shadow-lg'
                : 'border-green-100 bg-green-50 text-gray-700 hover:border-green-400 hover:bg-green-100'
            }`}
          >
            <span className="text-3xl">🌿</span>
            <span className="text-sm font-semibold text-center leading-tight">Todos</span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`group flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                activeCategory === cat.id
                  ? 'border-green-600 bg-green-600 text-white shadow-lg'
                  : 'border-green-100 bg-green-50 text-gray-700 hover:border-green-400 hover:bg-green-100'
              }`}
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-xs font-semibold text-center leading-tight">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Product Catalog ─── */
function ProductCatalog({ products: items, activeCategory }: { products: typeof products; activeCategory: string }) {
  const categoryName =
    activeCategory === 'all'
      ? 'Todos los Productos'
      : categories.find((c) => c.id === activeCategory)?.name ?? activeCategory

  return (
    <section id="productos" className="py-16 bg-green-50 leaf-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Catálogo</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">{categoryName}</h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-500">{items.length} productos disponibles</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Featured Products ─── */
function FeaturedSection({ products: featured }: { products: typeof products }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">⭐ Destacados</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
            Más Vendidos
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Los productos favoritos de nuestra comunidad, respaldados por miles de clientes satisfechos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.slice(0, 4).map((product, idx) => {
            const waMessage = `¡Hola! Me interesa el producto: *${product.name}* - $${product.price.toLocaleString('es-CO')}. ¿Está disponible?`
            return (
              <div
                key={product.id}
                className={`flex flex-col sm:flex-row gap-6 p-6 rounded-3xl border border-green-100 bg-white shadow-sm hover:shadow-lg transition-shadow group ${
                  idx % 2 === 0 ? '' : ''
                }`}
              >
                <div className="sm:w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-green-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1">
                    {product.badge ?? '⭐ Destacado'}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-green-700">
                      ${product.price.toLocaleString('es-CO')}
                      <span className="text-xs text-gray-400 font-normal ml-1">COP</span>
                    </span>
                    <a
                      href={buildWhatsAppUrl(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-xl"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Promotions Section ─── */
function PromotionsSection() {
  const promos = [
    {
      emoji: '🎁',
      title: '2x1 en Vitamina C',
      description: 'Lleva dos frascos de Vitamina C 1000mg y paga solo uno. ¡Comparte la salud!',
      cta: 'Aprovechar ahora',
      message: '¡Hola! Me interesa la promoción 2x1 en Vitamina C. ¿Está disponible?',
      bg: 'from-green-700 to-green-500',
    },
    {
      emoji: '💥',
      title: '20% OFF Primer Pedido',
      description: 'Obtén el 20% de descuento en tu primera compra. Menciona el código NATURAL20.',
      cta: 'Obtener descuento',
      message: '¡Hola! Quiero usar el código NATURAL20 para el 20% de descuento en mi primer pedido.',
      bg: 'from-green-800 to-green-600',
    },
    {
      emoji: '🚚',
      title: 'Envío Gratis',
      description: 'Envío gratuito a toda Colombia en compras superiores a $150,000 COP.',
      cta: 'Ver condiciones',
      message: '¡Hola! Quiero información sobre el envío gratis a Colombia.',
      bg: 'from-green-600 to-teal-600',
    },
  ]

  return (
    <section id="promociones" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">🔥 Especiales</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
            Promociones del Mes
          </h2>
          <div className="section-divider mb-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className={`promo-card bg-gradient-to-br ${promo.bg} rounded-3xl p-8 text-white flex flex-col gap-4 hover:-translate-y-1 transition-transform shadow-lg`}
            >
              <div className="text-5xl">{promo.emoji}</div>
              <h3 className="text-xl font-black">{promo.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed flex-1">{promo.description}</p>
              <a
                href={buildWhatsAppUrl(promo.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-700 font-bold text-sm px-5 py-3 rounded-xl hover:bg-green-50 transition-colors w-fit"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                {promo.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'María Fernanda R.',
      location: 'Bogotá',
      rating: 5,
      text: 'Llevo 3 meses tomando los suplementos de Natural Shop y la diferencia es increíble. Mi energía mejoró notablemente y me siento mucho mejor. El servicio es excelente y la asesoría por WhatsApp muy rápida.',
      avatar: 'MF',
      product: 'Complejo B Plus',
    },
    {
      name: 'Carlos Andrés M.',
      location: 'Medellín',
      rating: 5,
      text: 'La proteína Whey Gold es de la mejor calidad que he probado. Los resultados en el gimnasio mejoraron significativamente. Además la atención en la sede de la Acrópolis es muy amable y profesional.',
      avatar: 'CA',
      product: 'Proteína Whey Gold',
    },
    {
      name: 'Ana Lucía T.',
      location: 'Cali',
      rating: 5,
      text: 'El Té Detox Slim me ayudó mucho con la retención de líquidos. Noté resultados desde la primera semana. Los productos son naturales y de calidad. Definitivamente mi tienda de confianza.',
      avatar: 'AL',
      product: 'Té Detox Slim',
    },
    {
      name: 'Diego Fernando S.',
      location: 'Barranquilla',
      rating: 5,
      text: 'La curcumina con piperina es excelente para la inflamación. Mis articulaciones están mucho mejor. El equipo de Natural Shop siempre resuelve mis dudas rápidamente. ¡100% recomendados!',
      avatar: 'DF',
      product: 'Curcumina + Piperina',
    },
    {
      name: 'Valentina G.',
      location: 'Bucaramanga',
      rating: 5,
      text: 'El aceite de argán es puro oro para el cabello. Mi pelo está brillante y suave como nunca. Los precios son muy accesibles y la calidad es premium. Ya soy clienta fiel de Natural Shop.',
      avatar: 'VG',
      product: 'Aceite de Argán Puro',
    },
    {
      name: 'Rodrigo B.',
      location: 'Pereira',
      rating: 5,
      text: 'Excelente relación calidad-precio en todos sus productos. El Omega 3 Premium es muy puro y sin sabor. La sede de la Cra 27 tiene mucha variedad y los asesores son muy conocedores.',
      avatar: 'RB',
      product: 'Omega 3 Premium',
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">💬 Reseñas</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Miles de colombianos confían en Natural Shop para su salud y bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-3 border-t border-green-100">
                <div className="w-10 h-10 rounded-full btn-green flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location} · {t.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Locations ─── */
function LocationsSection() {
  const locations = [
    {
      name: 'Sede Cra 27',
      address: 'Carrera 27, Bogotá, Colombia',
      hours: 'Lun–Sáb: 8:00am – 7:00pm\nDom: 9:00am – 2:00pm',
      phone: '+57 300 123 4567',
      emoji: '🏪',
      mapMessage: '¡Hola! Quiero conocer la dirección exacta de la sede Cra 27.',
    },
    {
      name: 'Sede Acrópolis',
      address: 'Centro Comercial Acrópolis, Bogotá, Colombia',
      hours: 'Lun–Sáb: 10:00am – 8:00pm\nDom: 11:00am – 6:00pm',
      phone: '+57 300 765 4321',
      emoji: '🏬',
      mapMessage: '¡Hola! Quiero conocer la ubicación exacta de la sede Acrópolis.',
    },
  ]

  return (
    <section id="ubicaciones" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">📍 Encuéntranos</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
            Nuestras Sedes
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-500">Visítanos y recibe asesoría personalizada.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-3xl p-8 shadow-sm border border-green-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{loc.emoji}</div>
              <h3 className="text-xl font-black text-gray-900 mb-1">{loc.name}</h3>
              <p className="text-green-600 text-sm font-medium mb-4">{loc.address}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="whitespace-pre-line">{loc.hours}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{loc.phone}</span>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl(loc.mapMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 text-white font-semibold text-sm px-5 py-3 rounded-xl w-full"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">📞 Contacto</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
            ¿Tienes Alguna Pregunta?
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-gray-500 text-lg mb-10">
            Nuestro equipo de expertos en salud natural está listo para asesorarte. Contáctanos por
            cualquiera de nuestros canales.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: 'Teléfono',
                value: '+57 300 123 4567',
                href: 'tel:+573001234567',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Email',
                value: 'info@naturalshop.co',
                href: 'mailto:info@naturalshop.co',
              },
              {
                icon: <WhatsAppIcon className="w-6 h-6" />,
                label: 'WhatsApp',
                value: '+57 300 123 4567',
                href: buildWhatsAppUrl('¡Hola! Tengo una consulta sobre sus productos naturales.'),
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === 'WhatsApp' ? '_blank' : undefined}
                rel={contact.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-green-100 bg-green-50 hover:bg-green-100 hover:border-green-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{contact.label}</p>
                  <p className="text-sm text-gray-800 font-semibold mt-0.5">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          <a
            href={buildWhatsAppUrl('¡Hola! Quiero información general sobre Natural Shop y sus productos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="hero-gradient text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/20">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-white text-lg leading-none block">Natural</span>
                <span className="font-semibold text-green-300 text-xs leading-none tracking-widest uppercase">Shop</span>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Tu tienda de confianza para productos naturales y de bienestar en Colombia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Categorías</h4>
            <ul className="space-y-2">
              {['Vitaminas', 'Suplementos', 'Control de Peso', 'Medicina Natural', 'Nutrición Deportiva', 'Cuidado Personal'].map((cat) => (
                <li key={cat}>
                  <a href="#categorias" className="text-green-200 text-sm hover:text-white transition-colors">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2">
              {['Nosotros', 'Promociones', 'Testimonios', 'Sedes', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-green-200 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="text-green-200 text-sm">📍 Sede Cra 27, Bogotá</li>
              <li className="text-green-200 text-sm">📍 Sede Acrópolis, Bogotá</li>
              <li className="text-green-200 text-sm">📞 +57 300 123 4567</li>
              <li className="text-green-200 text-sm">✉️ info@naturalshop.co</li>
            </ul>
            <a
              href={buildWhatsAppUrl('¡Hola! Me gustaría obtener más información sobre Natural Shop.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-xl"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-green-300">
          <p>© 2024 Natural Shop Colombia. Todos los derechos reservados.</p>
          <p className="text-xs">Hecho con 💚 para tu bienestar</p>
        </div>
      </div>
    </footer>
  )
}
