import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva(
  "bg-gradient-to-b from-white to-gray-950 size-8 rounded-full",
  {
    variants: {
      size: {
        sm: "size-8",
        md: "size-12 ",
        lg: "size-16 ",
      },
      color: {
        white: " from-white",
        blue: "from-blue-400",
        green: "from-green-400",
        orange: "from-orange-400"
      },
    },
    defaultVariants: {
      size: "lg",
      color: "blue", // Default block to false
    },
  }
);

export const Planet = (
  props: {
    size?: "sm" | "md" | "lg";
    color?: "white" | "blue" | "green"|'orange';
  } & HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div
      className={classes({
        size: props.size,
        color: props.color,
        className: props.className,
      })}
    ></div>
  );
};
