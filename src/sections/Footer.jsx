import { coverageZones } from '../data/products';

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

function Footer() {
  return (
    <footer className="border-t border-white/60 bg-[#f3ede0]/95 py-14">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="font-display text-4xl text-forest">Alma de Granja</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-olive/78">
            Productos naturales premium directo del campo a tu hogar, con una experiencia de compra boutique y cercana.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive/50">Links rápidos</p>
          <div className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="block text-sm text-forest/80 transition hover:translate-x-0.5 hover:text-forest">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive/50">Cobertura</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {coverageZones.map((zone) => (
              <span key={zone} className="rounded-full border border-olive/10 bg-white/80 px-3 py-2 text-sm text-forest">
                {zone}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
