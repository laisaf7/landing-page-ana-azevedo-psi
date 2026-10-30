import React from 'react';
import type { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div className="group h-full bg-white p-8 border border-stone-200 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
            <Icon className="w-8 h-8 text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
            <h3 className="font-serif text-xl text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
    );
}