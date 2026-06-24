import { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`px-6 md:px-10 max-w-[1600px] mx-auto w-full ${className}`}>
      {children}
    </Tag>
  );
}
