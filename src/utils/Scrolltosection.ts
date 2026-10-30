import { prefersReducedMotion } from './motion';

const HEADER_OFFSET = 96;

export function scrollToSection(href: string): boolean {
    const target = document.querySelector(href);
    if (!target) return false;

    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    return true;
}