import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { buildWhatsAppUrl, WhatsAppFloat, WhatsAppIcon } from '@/components/WhatsApp'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Producto no encontrado')
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()
  const waMessage = `¡Hola! Me interesa el producto: *${product.name}* - $${product.price.toLocaleString('es-CO')} COP. ¿Está disponible?`

  return (
    <div className="min-h-screen bg-green-50">
      {/* Nav bar */}
      <header className="bg-white border-b border-green-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1 text-green-700 hover:text-green-900 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al catálogo
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-green-100">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 aspect-[4/3] bg-green-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
              {product.badge && (
                <span className="badge text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  {product.badge}
                </span>
              )}
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
                {product.category.replace(/-/g, ' ')}
              </p>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed mb-8 flex-1">{product.description}</p>

              <div className="border-t border-green-50 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-black text-green-700">
                      ${product.price.toLocaleString('es-CO')}
                    </span>
                    <span className="text-sm text-gray-400 ml-1">COP</span>
                  </div>
                </div>

                <a
                  href={buildWhatsAppUrl(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex items-center justify-center gap-3 text-white font-bold text-base px-6 py-4 rounded-2xl w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Consultar por WhatsApp
                </a>

                <p className="text-xs text-gray-400 text-center mt-3">
                  Respuesta inmediata · Asesoría personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
