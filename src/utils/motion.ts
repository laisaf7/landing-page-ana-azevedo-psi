/** True quando a pessoa pediu "reduzir movimento" nas configurações do sistema. */
export function prefersReducedMotion(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}