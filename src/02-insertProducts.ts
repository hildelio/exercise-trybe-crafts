export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  brands: string[];
};

export default function insertProducts(brandsList: string[], product: Product): string {
  const verifyBrand = product.brands.every((brand) => brandsList.includes(brand));  
  if (!verifyBrand) {
    return 'Seu produto contém marcas indisponíveis.';
  }
  return `${product.name} adicionado(a) com o preço de R$ ${product.price}!`;
}
