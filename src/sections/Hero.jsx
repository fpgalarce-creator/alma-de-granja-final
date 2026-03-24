import { ArrowRight, Check, MessageCircle } from 'lucide-react';

const purchaseSteps = [
  {
    number: '1',
    title: 'Explora el catálogo',
    description: 'Descubre quesos, frutos secos, huevos de campo y otros productos seleccionados.',
  },
  {
    number: '2',
    title: 'Agrega al carro',
    description: 'Selecciona cantidades fácilmente con controles modernos.',
  },
  {
    number: '3',
    title: 'Envía tu pedido por WhatsApp',
    description: 'Recibe confirmación rápida y coordinamos el despacho a tu domicilio.',
  },
];

function Hero() {
  const goToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToWhatsApp = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '56900000000';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="section-shell pt-5">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-glass">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,22,15,0.88),rgba(24,34,22,0.52)_44%,rgba(14,20,13,0.85))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(197,164,109,0.2),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,24,16,0.35)_0%,transparent_28%,transparent_72%,rgba(18,24,16,0.28)_100%)]" />

        <div className="relative grid min-h-[82vh] items-end gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-16 xl:gap-16">
          <div className="max-w-3xl text-white">
            <span className="section-label border-white/20 bg-white/10 text-white">Directo del campo a tu hogar</span>
            <h1 className="mt-8 max-w-4xl animate-editorialIn font-display text-6xl leading-[0.9] text-white drop-shadow-[0_10px_30px_rgba(10,14,9,0.45)] sm:text-7xl lg:text-[5.9rem]">
              Alma de Granja, una selección gourmet con origen real.
            </h1>
            <p className="mt-6 max-w-2xl animate-fadeUp text-base leading-7 text-white/85 [animation-delay:140ms] [animation-fill-mode:both] sm:text-lg">
              Productos nobles, despachos locales y una experiencia de compra diseñada para sentirse tan cuidada como la mesa que quieres armar.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={goToProducts}
                className="premium-button animate-fadeUp animate-pulseGlow gap-2 [animation-delay:220ms] [animation-fill-mode:both]"
              >
                Ver productos <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goToWhatsApp}
                className="premium-button-secondary animate-fadeUp gap-2 [animation-delay:300ms] [animation-fill-mode:both]"
              >
                Pedir por WhatsApp <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="animate-slideSoftRight lg:pl-10">
            <div className="premium-process-card p-6 text-white sm:p-8">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
                CÓMO COMPRAR
              </div>

              <h2 className="mt-6 max-w-sm font-display text-4xl leading-tight text-white sm:text-[2.8rem]">
                Compra fácil en 3 pasos
              </h2>

              <div className="mt-7 space-y-4">
                {purchaseSteps.map((step) => (
                  <div
                    key={step.number}
                    className="group flex gap-4 rounded-[1.75rem] border border-white/14 bg-white/[0.07] p-4 transition duration-300 hover:border-white/30 hover:bg-white/[0.13]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 font-sans text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                      {step.number}
                    </div>
                    <div>
                      <p className="font-sans text-base font-semibold tracking-[0.01em] text-white sm:text-[1.02rem]">{step.title}</p>
                      <p className="mt-2 font-sans text-sm leading-6 text-white/78">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={goToProducts}
                className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-white transition duration-300 hover:translate-x-1 hover:text-white/85"
              >
                <Check className="h-4 w-4 text-wheat" />
                Comenzar compra <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
