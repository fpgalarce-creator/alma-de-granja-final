import { formatPrice } from './format';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '56900000000';

export const buildWhatsAppMessage = ({ items, customer, total }) => {
  const lines = [
    'Hola Alma de Granja, quiero hacer el siguiente pedido:',
    '',
    ...items.map((item) => `- ${item.name} ${item.format} x ${item.quantity}`),
    '',
    `Total: ${formatPrice(total)}`,
    '',
    `Nombre: ${customer.firstName}`,
    `Apellido: ${customer.lastName}`,
    `Localidad: ${customer.city}`,
    `Dirección: ${customer.address}`,
  ];

  if (customer.comment?.trim()) {
    lines.push(`Comentario: ${customer.comment.trim()}`);
  }

  return lines.join('\n');
};

export const createWhatsAppLink = (payload) => {
  const message = buildWhatsAppMessage(payload);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
