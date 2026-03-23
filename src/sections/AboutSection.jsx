import { CheckCircle2, Leaf, Truck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const values = [
  {
    icon: Leaf,
    title: 'Selección con origen',
    description: 'Elegimos productos que expresan frescura, temporada y calidad sostenida para una experiencia confiable.',
  },
  {
    icon: Truck,
    title: 'Despacho local cuidado',
    description: 'Trabajamos entregas cercanas con coordinación directa para mantener cercanía, prolijidad y tiempos reales.',
  },
  {
    icon: CheckCircle2,
    title: 'Confianza que se nota',
    description: 'Desde la curaduría hasta el contacto por WhatsApp, todo está diseñado para sentirse humano y premium.',
  },
];

function AboutSection() {
  return (
    <section id="sobre-nosotros" className="section-shell pt-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl sm:p-10">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Una marca de campo contemporánea, cálida y profundamente comercial"
            description="Alma de Granja nace para acercar productos del campo con una presentación boutique, cuidando la calidad de origen y una experiencia de compra cercana, estética y confiable."
          />
        </div>

        <div className="grid gap-5">
          {values.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-[2rem] border border-white/65 bg-[#fffdf9]/80 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wheat/12 text-wheat">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-forest">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-olive/78">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
