import clsx from 'clsx';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import AddToCartControl from './AddToCartControl';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function ProductCard({ product, highlight = false }) {
  const { addItem, getItemQuantity, updateQuantity } = useCart();
  const quantity = getItemQuantity(product.id);
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <article
      ref={ref}
      className={clsx(
        'group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-card backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-soft',
        highlight ? 'min-h-[420px]' : 'min-h-[410px]',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-70" />
        <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-olive backdrop-blur">
          {product.category.replace('-', ' ')}
        </span>
      </div>

      <div className="flex h-[calc(100%-16rem)] flex-col justify-between px-2 pb-2 pt-5">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl leading-none text-forest">{product.name}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-olive/60">{product.format}</p>
            </div>
            <span className="rounded-full border border-wheat/20 bg-wheat/10 px-3 py-2 text-sm font-semibold text-bark">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-olive/75">{product.tagline}</p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-olive/45">Selección premium</p>
            <p className="mt-1 text-sm text-forest/80">Despacho local coordinado.</p>
          </div>
          <AddToCartControl
            quantity={quantity}
            onAdd={() => addItem(product)}
            onDecrease={() => updateQuantity(product.id, quantity - 1)}
            onIncrease={() => updateQuantity(product.id, quantity + 1)}
          />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
