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
    <section id="inicio" className="section-shell pt-8 sm:pt-10">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#fcf8ef] via-[#f7f0e2]/78 to-[#f6eddf]/10" />
        <div className="pointer-events-none absolute inset-y-0 left-[42.5%] z-10 hidden w-24 -skew-x-[14deg] bg-[#f8f1e5]/90 lg:block xl:left-[44%]" />

        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-0">
          <div className="relative z-20 py-8 sm:py-12 lg:pr-10 xl:pr-16">
            <span className="section-label border-olive/10 bg-white/60 text-olive">PRODUCTOS FRESCOS Y SELECCIONADOS</span>

            <h1 className="mt-7 max-w-2xl animate-editorialIn font-display text-[2.65rem] leading-[0.9] tracking-tight text-forest sm:text-[3.45rem] lg:text-[4.4rem]">
              Sabores de campo que llegan directo a tu mesa
            </h1>

            <p className="mt-6 max-w-xl animate-fadeUp text-base leading-7 text-bark/80 [animation-delay:120ms] [animation-fill-mode:both] sm:text-lg">
              Quesos, huevos de campo, frutos secos y más. Arma tu carro en pocos pasos y envía tu pedido fácilmente por WhatsApp.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-olive/20 bg-white/60 px-6 py-3 text-sm font-medium text-olive transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-forest focus:outline-none focus:ring-2 focus:ring-wheat/40"
              >
                Cómo comprar <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div id="como-comprar" ref={stepsRef} className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-olive/70">Paso a paso</p>

              <div className="relative mt-4">
                <div className="hidden h-px w-full bg-gradient-to-r from-olive/15 via-olive/30 to-olive/15 md:block" />

                <div
                  className={`grid gap-4 pt-0.5 sm:grid-cols-3 sm:gap-5 md:-mt-4 md:gap-4 ${
                    isStepsFocused ? 'transition duration-500' : ''
                  }`}
                >
                  {purchaseSteps.map((step, index) => (
                    <div
                      key={step}
                      className={`flex items-center gap-3 rounded-2xl px-1 py-1 sm:flex-col sm:items-start md:bg-transparent md:p-0 ${
                        isStepsFocused ? 'bg-white/45 sm:bg-transparent' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-2.5">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition duration-300 ${
                            isStepsFocused
                              ? 'border-olive/45 bg-[#fffaf0] text-forest shadow-[0_0_0_4px_rgba(196,165,111,0.14)]'
                              : 'border-olive/35 bg-[#fcf8ee] text-olive'
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className="hidden text-olive/35 sm:inline-flex md:hidden">→</span>
                      </div>

                      <p className="text-sm leading-5 text-forest/90">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[1.9rem] sm:min-h-[420px] lg:min-h-[700px] lg:rounded-[2.2rem]">
            <img
              src={heroImage}
              alt="Tabla con productos frescos de campo Alma de Granja"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17150f]/26 via-transparent to-[#17150f]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
