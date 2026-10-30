import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

const DEFAULT_OPTIONS: IntersectionObserverInit = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
};

/**
 * Informa quando o elemento entra na tela (uma única vez).
 * Com "reduzir movimento" ativo, já começa como visível.
 */
export function useInView<T extends Element>(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(() => prefersReducedMotion());

    useEffect(() => {
        const el = ref.current;
        if (inView || !el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, options);

        observer.observe(el);
        return () => observer.disconnect();
    }, [inView, options]);

    return [ref, inView] as const;
}