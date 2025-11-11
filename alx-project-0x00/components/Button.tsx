import React from "react"
import { ButtonProps, ButtonSize, ButtonShape } from "@/interfaces"

const sizeClasses: Record<ButtonSize, string> = {
  small: "text-sm px-3 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  ...rest
}) => {
  const base = "inline-flex items-center justify-center font-medium bg-[#131212] text-white hover:opacity-90 transition";
  const shapeClass: Record<ButtonShape, string> = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
    "rounded-lg": "rounded-lg",
  }

  return (
    <button className={`${base} ${sizeClasses[size]} ${shapeClass[shape]} ${className}`} {...rest}>
      {title}
    </button>
  )
}

export default Button
