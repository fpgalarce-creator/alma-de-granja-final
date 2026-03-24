import { Menu, ShoppingBag, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { categories } from '../data/products';
import { useCart } from '../context/CartContext';

const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

function Navbar({ onCategorySelect }) {
  const { cartCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const productCategories = categories.filter((category) => category.id !== 'all');

  const goToProducts = (categoryId = 'all') => {
    onCategorySelect(categoryId);
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={`section-shell flex items-center justify-between rounded-full border px-5 py-4 transition duration-300 sm:px-6 ${
          scrolled
            ? 'border-white/80 bg-white/84 shadow-soft backdrop-blur-2xl'
            : 'border-white/45 bg-white/56 shadow-glass backdrop-blur-xl'
        }`}
      >
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-wheat/30 bg-white/85 font-display text-xl text-bark">
            A
          </div>
          <div>
            <p className="font-display text-2xl text-forest">Alma de Granja</p>
            <p className="text-[11px] uppercase tracking-[0.34em] text-olive/60">Boutique gourmet</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#inicio" className="rounded-full px-2 py-1 text-sm font-medium text-forest/80 transition hover:bg-white/70 hover:text-forest">Inicio</a>
          <div className="group relative">
            <button type="button" className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium text-forest/80 transition hover:bg-white/70 hover:text-forest">
              Productos <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full mt-4 w-64 translate-y-3 rounded-[1.5rem] border border-white/70 bg-white/90 p-3 opacity-0 shadow-soft backdrop-blur-xl transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => goToProducts(category.id)}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm text-olive transition hover:bg-cream hover:text-forest"
                >
                  <span>{category.label}</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-olive/35">Filtrar</span>
                </button>
              ))}
            </div>
          </div>
          {menuItems.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-2 py-1 text-sm font-medium text-forest/80 transition hover:bg-white/70 hover:text-forest">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative rounded-full border border-white/65 bg-white/85 p-3 text-forest shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-forest px-1 text-[11px] font-semibold text-cream">
              {cartCount}
            </span>
          </button>
          <button
            type="button"
            className="rounded-full border border-white/65 bg-white/85 p-3 text-forest shadow-sm transition hover:bg-white hover:shadow-md lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="section-shell mt-3 rounded-[2rem] border border-white/75 bg-white/92 p-5 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="space-y-3">
            <a href="#inicio" className="block rounded-2xl px-4 py-3 text-sm font-medium text-forest transition hover:bg-cream" onClick={() => setMobileOpen(false)}>
              Inicio
            </a>
            <div className="rounded-[1.5rem] border border-olive/10 bg-cream/40 p-3">
              <p className="px-2 text-xs uppercase tracking-[0.28em] text-olive/50">Productos</p>
              <div className="mt-2 space-y-1">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => goToProducts(category.id)}
                    className="block w-full rounded-2xl px-3 py-3 text-left text-sm text-olive transition hover:bg-white"
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            {menuItems.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-forest transition hover:bg-cream" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
