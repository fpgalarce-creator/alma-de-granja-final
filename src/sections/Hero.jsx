import { ArrowRight, MessageCircle } from 'lucide-react';

function Hero() {
  const goToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToWhatsApp = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '56900000000';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="section-shell pt-6">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-glass">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(25,31,23,0.78),rgba(25,31,23,0.38)_45%,rgba(25,31,23,0.6))]" />
        <div className="relative grid min-h-[82vh] items-end px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16">
          <div className="max-w-3xl animate-floatIn text-white">
            <span className="section-label border-white/20 bg-white/10 text-white">Directo del campo a tu hogar</span>
            <h1 className="mt-8 max-w-4xl font-display text-6xl leading-[0.92] text-white sm:text-7xl lg:text-[5.6rem]">
              Alma de Granja, una selección gourmet con origen real.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Productos nobles, despachos locales y una experiencia de compra diseñada para sentirse tan cuidada como la mesa que quieres armar.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={goToProducts} className="premium-button animate-pulseGlow gap-2">
                Ver productos <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={goToWhatsApp} className="premium-button-secondary gap-2">
                Pedir por WhatsApp <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:mt-0 lg:pl-12">
            <div className="glass-panel p-6 text-white/90">
              <p className="text-xs uppercase tracking-[0.3em] text-wheat">Selección boutique</p>
              <p className="mt-3 font-display text-3xl text-white">Ingredientes con criterio premium</p>
              <p className="mt-4 text-sm leading-6 text-white/75">
                Quesos, huevos de campo, frutos secos y aceite de oliva curados por sabor, frescura y confianza.
              </p>
            </div>
            <div className="ml-auto max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-5 text-white/85 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-wheat/90">Despacho local</p>
              <p className="mt-2 font-display text-3xl text-white">Rancagua y alrededores</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Coordinamos tu pedido por WhatsApp para entregarlo con calidez, agilidad y presentación impecable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
