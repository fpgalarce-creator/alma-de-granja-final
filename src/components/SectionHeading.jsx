import clsx from 'clsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={clsx(
        'max-w-3xl transition duration-700',
        align === 'center' && 'mx-auto text-center',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
    >
      <span className="section-label">{eyebrow}</span>
      <h2 className="section-title mt-6">{title}</h2>
      <p className="mt-5 text-base leading-7 text-olive/80 sm:text-lg">{description}</p>
    </div>
  );
}

export default SectionHeading;
