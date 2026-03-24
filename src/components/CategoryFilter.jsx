import clsx from 'clsx';

function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3.5">
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
                ? 'border-forest bg-forest text-cream shadow-[0_10px_24px_rgba(41,49,38,0.24)]'
                : 'border-olive/15 bg-white/75 text-olive shadow-sm hover:-translate-y-0.5 hover:border-wheat/55 hover:bg-white hover:text-forest',
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
