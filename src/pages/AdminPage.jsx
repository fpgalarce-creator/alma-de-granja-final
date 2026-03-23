import { Database, Eye, ImagePlus, PencilLine, Power, UploadCloud } from 'lucide-react';
import { products } from '../data/products';
import { getCloudinaryConfig, isCloudinaryConfigured } from '../services/cloudinary';
import { formatPrice } from '../utils/format';

const adminFeatures = [
  {
    icon: PencilLine,
    title: 'Gestión de catálogo',
    description: 'Base lista para agregar, editar y activar/desactivar productos sin exponer el acceso en la web pública.',
  },
  {
    icon: ImagePlus,
    title: 'Soporte de imágenes',
    description: 'Servicio separado para conectar cargas con Cloudinary sin hardcodear credenciales.',
  },
  {
    icon: Eye,
    title: 'Campos de expansión',
    description: 'Se deja preparada la estructura para stock visible, destacados y futuros flujos administrativos.',
  },
];

function AdminPage() {
  const cloudinaryConfig = getCloudinaryConfig();

  return (
    <main className="min-h-screen bg-parchment px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-olive/50">Ruta interna /admin</p>
          <h1 className="mt-5 font-display text-5xl text-forest sm:text-6xl">Base del panel administrativo</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-olive/78">
            Este panel deja lista la arquitectura inicial para gestionar productos, precios, formatos, categorías, imágenes, destacados, estado activo y una futura visibilidad de stock.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {adminFeatures.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wheat/10 text-wheat">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-3xl text-forest">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-olive/78">{description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-wheat" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-olive/50">Productos mock</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-olive/10">
              <table className="min-w-full divide-y divide-olive/10 text-left text-sm">
                <thead className="bg-cream/70 text-olive/60">
                  <tr>
                    <th className="px-4 py-3 font-medium">Producto</th>
                    <th className="px-4 py-3 font-medium">Categoría</th>
                    <th className="px-4 py-3 font-medium">Precio</th>
                    <th className="px-4 py-3 font-medium">Activo</th>
                    <th className="px-4 py-3 font-medium">Destacado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-olive/10 bg-white">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-4 py-4">
                        <p className="font-medium text-forest">{product.name}</p>
                        <p className="text-xs uppercase tracking-[0.22em] text-olive/45">{product.format}</p>
                      </td>
                      <td className="px-4 py-4 text-olive/75">{product.category}</td>
                      <td className="px-4 py-4 text-forest">{formatPrice(product.price)}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${product.active ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-100 text-stone-600'}`}>
                          {product.active ? 'Sí' : 'No'}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${product.featured ? 'bg-wheat/20 text-bark' : 'bg-stone-100 text-stone-600'}`}>
                          {product.featured ? 'Sí' : 'No'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <UploadCloud className="h-5 w-5 text-wheat" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-olive/50">Cloudinary</p>
              </div>
              <h2 className="mt-4 font-display text-3xl text-forest">Configuración desacoplada</h2>
              <p className="mt-3 text-sm leading-7 text-olive/78">
                Estado actual: {isCloudinaryConfigured() ? 'configurado' : 'pendiente de credenciales'}.
              </p>
              <div className="mt-4 rounded-[1.5rem] border border-olive/10 bg-cream/40 p-4 text-sm text-olive/80">
                <p>VITE_CLOUDINARY_CLOUD_NAME: {cloudinaryConfig.cloudName || '—'}</p>
                <p>VITE_CLOUDINARY_API_KEY: {cloudinaryConfig.apiKey ? '•••••• configurada' : '—'}</p>
                <p>VITE_CLOUDINARY_UPLOAD_PRESET: {cloudinaryConfig.uploadPreset || '—'}</p>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Power className="h-5 w-5 text-wheat" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-olive/50">Próximos pasos</p>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-olive/78">
                <li>• Persistir productos en una API o base de datos.</li>
                <li>• Añadir autenticación al panel /admin.</li>
                <li>• Conectar formularios de alta/edición al servicio de imágenes.</li>
                <li>• Incorporar control opcional de stock visible por producto.</li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminPage;
