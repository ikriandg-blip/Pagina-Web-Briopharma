import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Natural Shop Colombia | Salud Natural y Bienestar' },
      {
        name: 'description',
        content:
          'Natural Shop Colombia – Tu tienda de salud natural y bienestar. Vitaminas, suplementos, control de peso, medicina natural, nutrición deportiva y cuidado personal. Sedes en Cra 27 y Acrópolis.',
      },
      { name: 'keywords', content: 'tienda natural colombia, vitaminas, suplementos naturales, control de peso, medicina natural, nutricion deportiva, cuidado personal, salud bienestar' },
      { name: 'author', content: 'Natural Shop Colombia' },
      { property: 'og:title', content: 'Natural Shop Colombia | Salud Natural y Bienestar' },
      { property: 'og:description', content: 'Tu destino para productos naturales de alta calidad. Vitaminas, suplementos y más en Colombia.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#2d7a4f' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
