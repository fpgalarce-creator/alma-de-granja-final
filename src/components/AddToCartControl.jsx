import clsx from 'clsx';
import { Minus, Plus } from 'lucide-react';

function AddToCartControl({ quantity, onAdd, onDecrease, onIncrease, compact = false }) {
  if (!quantity) {
    return (
      <button
        type="button"
        onClick={onAdd}
        className={clsx(
          'group inline-flex items-center justify-center rounded-full border border-olive/15 bg-white/80 text-sm font-medium text-forest shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-wheat/60 hover:bg-white hover:shadow-md',
          compact ? 'min-w-[108px] px-4 py-2.5' : 'min-w-[126px] px-5 py-3',
        )}
      >
        <span className="mr-2 text-olive/70 transition group-hover:text-wheat">+</span>
        Agregar
      </button>
    );
  }

  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full border border-olive/10 bg-white/88 p-1 shadow-md backdrop-blur transition duration-300',
        compact ? 'gap-1' : 'gap-2',
      )}
    >
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-9 w-9 items-center justify-center rounded-full text-olive transition hover:bg-forest hover:text-cream"
        aria-label="Disminuir cantidad"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-8 text-center text-sm font-semibold text-forest">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream transition hover:bg-olive"
        aria-label="Aumentar cantidad"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export default AddToCartControl;
