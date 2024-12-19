import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export const SectionContent = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={twMerge('container py-24 md:py-36 lg:py-48', props.className)}{...props}
        />
    );
};