import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge"; // Ensure merging of classes

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean; // Ensure block is included
} & HTMLAttributes<HTMLButtonElement>;

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg", // Base styles
  {
    variants: {
      block: {
        true: "w-full", // Apply full width when block=true
        false: "",
      },
      variant: {
        primary:
          "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]",
        secondary: "bg-gray-200 text-gray-800",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false, // Default block to false
    },
  }
);

export const Button = ({ className = "", children, block, variant, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={twMerge(classes({ variant, block }), className)} // Merge Tailwind classes
      {...otherProps}
    >
      {children}
    </button>
  );
};
