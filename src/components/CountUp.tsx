import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { prefersReducedMotion } from '../utils/motion';

type CountUpProps = {
    end: number;
    suffix?: string;
    duration?: number;
};

/** Conta de 0 até `end` quando o número aparece na tela. */
export default function CountUp({ end, suffix = '', duration = 1400 }: CountUpProps) {
    const [ref, inView] = useInView<HTMLSpanElement>();
    const [value, setValue] = useState(() => (prefersReducedMotion() ? end : 0));

    useEffect(() => {
        if (!inView || prefersReducedMotion()) return;

        let frame = 0;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // desacelera no final
            setValue(Math.round(end * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, end, duration]);

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    );
}