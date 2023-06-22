import { Item } from './04-calculateTotalPrice';

export type Order = {
  id: number,
  customerName: string,
  customerEmail: string,
  items: Item[],
  status: 'pendente' | 'enviado' | 'entregue'
};

export default function orderRequest(order: Order): string {
  const hasNoQuantity = order.items.find((i) => !i.product.quantity);
  const isAvailable = order.status === 'pendente';
  const productsName = order.items.map((item) => item.product.name);
  if (hasNoQuantity || !isAvailable) {
    throw new Error(`Desculpe, ${productsName} não está disponível no estoque`);
  }
  return `Olá ${order.customerName}, o seu pedido de ID ${order.id} foi enviado.`;
}
