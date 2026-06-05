import { Leaf, ShieldCheck, HeartPulse } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/data/products'
import { buildWhatsAppUrl, WhatsAppIcon } from './WhatsApp'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false)

  const waMessage =
    'Hola, me interesa el producto: ' +
    product.name +
    ' - $' +
    product.price.toLocaleString('es-CO') +
    '. ¿Está disponible?'

  return (
    <>
      <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-sky-100 flex flex-col h-full">
        <div
          className="relative overflow-hidden aspect-[4/3] bg-sky-50 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <p className="text-xs text-sky-600 font-medium uppercase tracking-wider mb-1">
            {product.category}
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
            {product.name}
          </h3>

          <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">
            {product.shortDescription}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-sky-100">
            <div>
              <span className="text-2xl font-bold text-sky-700">
                ${product.price.toLocaleString('es-CO')}
              </span>
              <span className="text-xs text-gray-400 ml-1"> COP</span>
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
{showModal && (
  <div
    className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setShowModal(false)}
  >
    <div
className="bg-white rounded-[32px] max-w-6xl w-full shadow-[0_25px_80px_rgba(0,0,0,0.20)] overflow-hidden border border-slate-100"      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid md:grid-cols-2 divide-x divide-slate-100">
        <div className="relative bg-gradient-to-br from-white via-slate-50 to-sky-50 flex items-center justify-center p-12">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-slate-700 hover:text-red-500 transition-all duration-300 z-10"
          >
            ✕
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="max-h-[520px] max-w-full object-contain rounded-3xl drop-shadow-[0_35px_70px_rgba(0,0,0,0.28)] hover:scale-105 transition-all duration-500"
          />
        </div>

<div
  className="p-10 flex flex-col justify-center relative overflow-hidden bg-white"
  style={{
    backgroundImage: `
      radial-gradient(circle at 15% 20%, rgba(59,130,246,0.04) 0%, transparent 25%),
      radial-gradient(circle at 85% 70%, rgba(59,130,246,0.03) 0%, transparent 20%)
    `
  }}
>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit mb-4">
  <span>🌿</span>
  <span className="text-sm font-semibold uppercase tracking-wide">
    {product.category}
  </span>
</div>

          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {product.name}
          </h2>

          <div className="mb-6">
            <span className="text-4xl font-black text-sky-700">
              ${product.price.toLocaleString('es-CO')}
            </span>
            <span className="text-sm text-gray-400 ml-2">COP</span>
          </div>

<div className="flex items-center gap-3 mb-8">
  <span className="text-green-500 text-xl">✓</span>
  <span className="text-slate-600 text-lg">
    {product.description}
  </span>
</div>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>

          <a
            href={buildWhatsAppUrl(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-5 rounded-2xl w-full bg-blue-600 shadow-xl"
          >
<WhatsAppIcon className="w-5 h-5" />
Solicitar Información
</a>
<div className="grid grid-cols-3 gap-8 mt-8">
   <div className="text-center border-r border-slate-200">
  <Leaf className="w-10 h-10 mx-auto text-sky-500 mb-3" />
  <p className="text-sm text-slate-600 font-medium">
    Ingredientes Naturales
  </p>
</div>

<div className="text-center border-r border-slate-200 px-6">
        <ShieldCheck className="w-10 h-10 mx-auto text-sky-500 mb-3" />
    <p className="text-sm text-slate-600 font-medium">
      Calidad Garantizada
    </p>
  </div>

<div className="text-center border-r border-slate-100 px-8">
    <HeartPulse className="w-10 h-10 mx-auto text-sky-500 mb-3" />
  <p className="text-sm text-slate-600 font-medium">
    Bienestar Integral
  </p>
</div>
</div>

        </div>
      </div>
    </div>
  </div>
)}

    </>
  )
}
