import React from 'react';
import { WhatsAppIcon } from './Icons';
import { whatsappUrl } from '../config/contact';

export default function WhatsAppButton() {
    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar pelo WhatsApp"
            style={{ animationDelay: '1200ms' }}
            className="animate-fade-in fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
            {/* Anel de pulso: expande e some, com pausa entre as ondas */}
            <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring motion-reduce:hidden" />
            <WhatsAppIcon className="relative h-8 w-8" />
        </a>
    );
}