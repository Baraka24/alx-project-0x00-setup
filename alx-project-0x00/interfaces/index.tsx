export interface PillProps {
  title: string
}

// Button component interfaces and types
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full'

export interface ButtonProps {
  title: string
  size?: ButtonSize
  shape?: ButtonShape
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}