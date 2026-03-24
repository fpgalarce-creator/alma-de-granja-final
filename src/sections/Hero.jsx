import { ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

const purchaseSteps = [
  'Arma tu carro',
  'Agrega tus productos',
  'Envía tu pedido por WhatsApp',
];

const heroImage =
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=2200&q=80';

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
    <section id="inicio" className="section-shell pt-7 sm:pt-9 lg:pt-12">
      <div className="overflow-hidden rounded-[2rem] border border-olive/10 bg-gradient-to-b from-[#fcf8ef] via-[#f9f4ea] to-[#f5efe4] px-5 py-7 sm:px-8 sm:py-9 lg:rounded-[2.5rem] lg:px-10 lg:py-10 xl:px-12">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:gap-10 xl:gap-12">
          <div className="flex h-full flex-col justify-center">
            <span className="section-label w-fit border-olive/15 bg-white/70 text-olive shadow-none">
              PRODUCTOS FRESCOS Y SELECCIONADOS
            </span>

            <h1 className="mt-6 max-w-[17ch] font-display text-[2.4rem] leading-[0.95] tracking-tight text-forest sm:text-[3.15rem] lg:text-[3.9rem] xl:text-[4.35rem]">
              Sabores de campo que llegan directo a tu mesa
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-bark/80 sm:text-lg sm:leading-8">
              Quesos, huevos de campo, frutos secos y más. Arma tu carro en pocos pasos y envía tu pedido fácilmente por WhatsApp.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="button" onClick={goToProducts} className="premium-button gap-2">
                Ver productos <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goToHowToBuy}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-olive/25 bg-white/70 px-6 py-3 text-sm font-medium text-olive transition duration-300 hover:-translate-y-0.5 hover:border-olive/40 hover:bg-white focus:outline-none focus:ring-2 focus:ring-wheat/40"
              >
                Cómo comprar <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div id="como-comprar" ref={stepsRef} className="mt-10 lg:mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-olive/70">Paso a paso</p>

              <ol
                className={`mt-4 grid gap-3 rounded-2xl border border-olive/15 bg-white/55 px-4 py-4 transition duration-500 sm:grid-cols-3 sm:gap-4 sm:px-5 lg:rounded-3xl lg:px-6 lg:py-5 ${
                  isStepsFocused ? 'border-olive/35 bg-white/85 shadow-[0_12px_36px_rgba(40,52,36,0.09)]' : ''
                }`}
              >
                {purchaseSteps.map((step, index) => (
                  <li key={step} className="relative flex items-center gap-3 pr-1 sm:pr-4">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold transition duration-300 ${
                        isStepsFocused ? 'border-olive/45 bg-[#fffaf0] text-forest' : 'border-olive/30 bg-white/70 text-olive'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <p className="text-sm leading-5 text-forest/90 lg:text-[0.95rem]">{step}</p>
                    {index < purchaseSteps.length - 1 && (
                      <span className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-olive/25 sm:block lg:w-6" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[1.7rem] border border-olive/10 bg-[#ebe3d3] sm:min-h-[420px] lg:min-h-[640px] lg:rounded-[2.1rem]">
            <img
              src={heroImage}
              alt="Selección gourmet de quesos, huevos de campo y frutos secos sobre mesa rústica"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1a14]/22 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
