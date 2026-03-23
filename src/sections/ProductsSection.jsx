import { useMemo } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { categories, products } from '../data/products';

function ProductsSection({ activeCategory, onCategoryChange }) {
  const filteredProducts = useMemo(() => {
    const activeProducts = products.filter((product) => product.active);
    if (activeCategory === 'all') return activeProducts;
    return activeProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="productos" className="section-shell pt-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Catálogo"
          title="Compra con fluidez, elige por categoría y arma tu pedido en segundos"
          description="Cada card está pensada como una ficha boutique: clara, elegante y optimizada para sumar productos sin fricción."
        />
        <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={onCategoryChange} />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
