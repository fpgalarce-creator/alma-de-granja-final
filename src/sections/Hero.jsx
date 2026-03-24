import { ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

const purchaseSteps = [
  'Arma tu carro',
  'Agrega tus productos',
  'Envía tu pedido por WhatsApp',
];

const heroImage =
  'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=80';

function Hero() {
  const stepsRef = useRef(null);
  const [isStepsFocused, setIsStepsFocused] = useState(false);

  const goToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToHowToBuy = () => {
    stepsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setIsStepsFocused(true);
    window.setTimeout(() => setIsStepsFocused(false), 1400);
  };

  return (
    <section id="inicio" className="section-shell pt-5 sm:pt-7">
      <div className="relative overflow-hidden rounded-[2.6rem] border border-white/70 bg-[#f8f2e7] shadow-glass">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/65 to-transparent" />

        <div className="relative grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <div className="relative z-10 px-6 py-10 sm:px-10 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
            <span className="section-label border-olive/15 bg-white/70 text-olive">Productos frescos y seleccionados</span>

            <h1 className="mt-6 max-w-2xl animate-editorialIn font-display text-[2.7rem] leading-[0.9] tracking-tight text-forest sm:text-[3.5rem] lg:text-[4.3rem]">
              Sabores de campo que llegan directo a tu mesa
            </h1>

            <p className="mt-5 max-w-xl animate-fadeUp text-base leading-7 text-bark/85 [animation-delay:120ms] [animation-fill-mode:both] sm:text-lg">
              Quesos, huevos de campo, frutos secos y más. Arma tu carro en pocos pasos y envía tu pedido fácilmente por WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={goToProducts}
                className="premium-button animate-fadeUp gap-2 [animation-delay:200ms] [animation-fill-mode:both]"
              >
                Ver productos <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goToHowToBuy}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-olive/20 bg-white/70 px-6 py-3 text-sm font-medium text-olive transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-forest focus:outline-none focus:ring-2 focus:ring-wheat/40"
              >
                Cómo comprar <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div
              id="como-comprar"
              ref={stepsRef}
              className={`mt-9 rounded-3xl border border-white/85 bg-white/70 px-4 py-4 shadow-sm backdrop-blur-sm transition duration-300 sm:px-5 ${
                isStepsFocused ? 'ring-2 ring-wheat/60 ring-offset-2 ring-offset-[#f8f2e7]' : ''
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-olive/75">Paso a paso</p>

              <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:gap-2 lg:gap-3">
                {purchaseSteps.map((step, index) => (
                  <div key={step} className="flex min-w-0 flex-1 items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-wheat/45 bg-[#fffaf0] text-xs font-semibold text-olive shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium leading-5 text-forest/90">{step}</p>
                    {index < purchaseSteps.length - 1 && (
                      <span className="ml-auto hidden text-olive/35 md:inline-flex lg:text-olive/45">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[290px] sm:min-h-[380px] lg:min-h-[660px]">
            <img
              src={heroImage}
              alt="Tabla con productos frescos de campo Alma de Granja"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17150f]/30 via-transparent to-[#17150f]/10" />
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-[39.2%] hidden w-20 -skew-x-[15deg] bg-[#f8f2e7] shadow-[14px_0_36px_rgba(41,49,38,0.12)] lg:block xl:left-[40.5%]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
