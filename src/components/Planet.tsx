import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("bg-gradient-to-b from-white to-gray-950 size-8 rounded-full", {
  variants: {
    size: {
      sm: "",
      md: "size-12 ",
      lg: "size-16 ",
    },
    color: {
      white: " from-white",
      blue: "from-blue-400",
      fuchsia: "",
    },
  },
  defaultVariants: {
    size: "lg",
    color: "blue", // Default block to false
  },
});

export const Planet = (
  props: {
    size?: "sm" | "md" | "lg";
    color?: "white" | "blue" | "fuchsia";
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
