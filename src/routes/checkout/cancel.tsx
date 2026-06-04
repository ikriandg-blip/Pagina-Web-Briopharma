import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl p-12 border border-green-100 shadow-lg text-center max-w-lg">
        <div className="text-6xl mb-6">❌</div>
        <h1 className="text-3xl font-black text-gray-900 mb-4">Pedido Cancelado</h1>
        <p className="text-gray-500 mb-8">
          Tu pedido fue cancelado. Si tienes alguna pregunta, contáctanos por WhatsApp.
        </p>
        <Link to="/" className="btn-green inline-block text-white font-bold px-8 py-3 rounded-2xl">
          Volver a la Tienda
        </Link>
      </div>
    </div>
  )
}
