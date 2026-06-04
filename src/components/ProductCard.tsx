import type { Product } from '@/data/products'
import { buildWhatsAppUrl, WhatsAppIcon } from './WhatsApp'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const waMessage = `¡Hola! Me interesa el producto: *${product.name}* - $${product.price.toLocaleString('es-CO')}. ¿Está disponible?`

  const badgeClass =
    product.badge === 'Nuevo'
      ? 'badge badge-new text-white px-2 py-0.5 rounded-full text-xs'
      : product.badge === 'Premium'
        ? 'badge badge-premium text-white px-2 py-0.5 rounded-full text-xs'
        : 'badge text-white px-2 py-0.5 rounded-full text-xs'

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-sky-100 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3] bg-sky-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className={`${badgeClass} absolute top-3 left-3`}>{product.badge}</span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-sky-600 font-medium uppercase tracking-wider mb-1">
          {getCategoryLabel(product.category)}
        </p>
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">{product.shortDescription}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-sky-100">
          <div>
            <span className="text-2xl font-bold text-sky-700">
              ${product.price.toLocaleString('es-CO')}
            </span>
            <span className="text-xs text-gray-400 ml-1">COP</span>
          </div>
          <a
  href={buildWhatsAppUrl(waMessage)}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-green flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-xl"
>
            <WhatsAppIcon className="w-4 h-4" />
            Pedir
          </a>
        </div>
      </div>
    </div>
  )
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'vitaminas': 'Vitaminas',
    'suplementos': 'Suplementos',
    'control-peso': 'Control de Peso',
    'medicina-natural': 'Medicina Natural',
    'nutricion-deportiva': 'Nutrición Deportiva',
    'cuidado-personal': 'Cuidado Personal',
  }
  return labels[category] ?? category
}
