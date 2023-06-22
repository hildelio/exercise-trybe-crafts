import { Product } from './02-insertProducts';

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string
};

export default function calculateTotalPrice(item: Item[]): number {
  if (item.length === 0) {
    return 0;
  }
  return +item.reduce((acc, i) => acc + i.product.price * i.quantity, 0).toFixed(2);
}
