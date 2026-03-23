import clsx from 'clsx';
import { ShoppingBag, Trash2, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { createWhatsAppLink } from '../utils/whatsapp';
import AddToCartControl from './AddToCartControl';

function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    cartTotal,
    updateQuantity,
    removeItem,
    customer,
    setCustomer,
  } = useCart();
  const [touched, setTouched] = useState(false);

  const requiredComplete = useMemo(
    () => customer.firstName && customer.lastName && customer.city && customer.address,
    [customer],
  );

  const checkoutLink = requiredComplete
    ? createWhatsAppLink({ items, customer, total: cartTotal })
    : '#';

  const handleSubmit = () => {
    setTouched(true);
    if (!items.length || !requiredComplete) {
      return;
    }

    window.open(checkoutLink, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((current) => ({ ...current, [name]: value }));
  };

  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-forest/35 backdrop-blur-sm transition duration-500',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={clsx(
          'fixed right-0 top-0 z-50 flex h-full w-full max-w-xl flex-col border-l border-white/20 bg-[#f8f3eb]/95 shadow-glass backdrop-blur-2xl transition duration-500',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-label="Carrito lateral"
      >
        <div className="flex items-center justify-between border-b border-olive/10 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive/55">Tu selección</p>
            <h3 className="mt-2 font-display text-4xl text-forest">Carrito boutique</h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-olive/10 bg-white/80 p-3 text-olive transition hover:bg-white"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {items.length ? (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[1.6rem] border border-white/70 bg-white/75 p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-2xl text-forest">{item.name}</h4>
                      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-olive/55">{item.format}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="rounded-full border border-olive/10 p-2 text-olive transition hover:bg-forest hover:text-cream"
                      aria-label={`Eliminar ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <AddToCartControl
                      compact
                      quantity={item.quantity}
                      onAdd={() => undefined}
                      onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.22em] text-olive/45">Subtotal</p>
                      <p className="mt-1 text-lg font-semibold text-bark">
                        {formatPrice(item.quantity * item.price)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-dashed border-olive/20 bg-white/50 p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wheat/10 text-wheat">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h4 className="mt-6 font-display text-3xl text-forest">Tu carrito está vacío</h4>
              <p className="mt-3 text-sm leading-6 text-olive/75">
                Descubre nuestra selección premium y arma tu pedido para enviarlo por WhatsApp.
              </p>
            </div>
          )}

          <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.25em] text-olive/50">Total</span>
              <span className="text-2xl font-semibold text-bark">{formatPrice(cartTotal)}</span>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-sm">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive/50">Checkout por WhatsApp</p>
              <h4 className="mt-2 font-display text-3xl text-forest">Completa tus datos</h4>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="field-input" placeholder="Nombre" name="firstName" value={customer.firstName} onChange={handleChange} />
              <input className="field-input" placeholder="Apellido" name="lastName" value={customer.lastName} onChange={handleChange} />
              <input className="field-input sm:col-span-2" placeholder="Localidad" name="city" value={customer.city} onChange={handleChange} />
              <input className="field-input sm:col-span-2" placeholder="Dirección" name="address" value={customer.address} onChange={handleChange} />
              <textarea className="field-input sm:col-span-2 min-h-28 resize-none" placeholder="Comentario adicional (opcional)" name="comment" value={customer.comment} onChange={handleChange} />
            </div>
            {touched && (!requiredComplete || !items.length) ? (
              <p className="mt-4 text-sm text-[#9a5e4f]">
                Completa los campos obligatorios y agrega al menos un producto para enviar tu pedido.
              </p>
            ) : null}
            <button
              type="button"
              onClick={handleSubmit}
              className="premium-button mt-6 w-full justify-center"
            >
              Enviar pedido por WhatsApp
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
