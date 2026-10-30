import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyle =
        "px-6 py-3 font-semibold transition-colors duration-300 text-sm tracking-wider uppercase";
    const variants = {
        primary: "bg-primary rounded-xl text-white hover:bg-primary-dark",
        secondary:
            "bg-transparent border border-primary rounded-xl text-primary hover:bg-primary hover:text-white",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
