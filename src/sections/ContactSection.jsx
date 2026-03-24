import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { coverageZones } from '../data/products';

function ContactSection() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '56900000000';

  return (
    <section id="contacto" className="section-shell pb-28 pt-28">
      <div className="rounded-[2.8rem] border border-white/70 bg-white/82 p-8 shadow-soft backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Contacto"
            title="Haz tu pedido y coordinemos una entrega impecable"
            description="Conversemos directo por WhatsApp para revisar disponibilidad, coordinar despacho y definir el detalle perfecto de tu compra."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-[2rem] border border-olive/15 bg-cream/55 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-card">
              <MessageCircle className="h-6 w-6 text-wheat" />
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-olive/50">WhatsApp</p>
              <p className="mt-2 font-display text-3xl text-forest">Conectar ahora</p>
              <p className="mt-3 text-sm leading-6 text-olive/75">Resolvemos pedidos, horarios y detalles de entrega.</p>
            </a>

            <div className="rounded-[2rem] border border-olive/10 bg-cream/50 p-6 shadow-sm">
              <MapPin className="h-6 w-6 text-wheat" />
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-olive/50">Zonas de despacho</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {coverageZones.map((zone) => (
                    <span key={zone} className="rounded-full border border-olive/10 bg-white px-3 py-2 text-sm text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      {zone}
                    </span>
                  ))}
                </div>
              </div>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-olive/10 bg-cream/50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-card sm:col-span-2">
              <Instagram className="h-6 w-6 text-wheat" />
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-olive/50">Redes</p>
              <p className="mt-2 font-display text-3xl text-forest">Instagram de marca</p>
              <p className="mt-3 text-sm leading-6 text-olive/75">Deja la estructura lista para conectar el perfil real cuando esté disponible.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
