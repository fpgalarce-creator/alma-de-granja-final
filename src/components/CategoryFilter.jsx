import clsx from 'clsx';

function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = category.id === activeCategory;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className={clsx(
              'rounded-full border px-5 py-3 text-sm font-medium transition duration-300',
              active
                ? 'border-forest bg-forest text-cream shadow-md'
                : 'border-olive/15 bg-white/70 text-olive hover:-translate-y-0.5 hover:border-wheat/60 hover:bg-white',
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
