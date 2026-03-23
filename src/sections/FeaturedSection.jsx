import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

function FeaturedSection() {
  const featured = products.filter((product) => product.featured && product.active).slice(0, 4);

  return (
    <section className="section-shell pt-24">
      <SectionHeading
        eyebrow="Destacados"
        title="Lo más elegido de nuestra despensa premium"
        description="Una curaduría pensada para mesas sofisticadas, regalos gourmet y compras cotidianas con mejor origen."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} highlight />
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;
