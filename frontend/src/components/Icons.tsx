import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3h-6A3.5 3.5 0 0 0 3 6.5v6A2.5 2.5 0 0 0 5.5 15" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

export function LightbulbIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8.2 14.3a6 6 0 1 1 7.6 0c-.6.5-1 1.2-1.1 2H9.3c-.1-.8-.5-1.5-1.1-2Z" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function AlertIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5" />
      <path d="M12 16h.01" />
    </svg>
  )
}

export function SpinnerIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
    </svg>
  )
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20 11a8 8 0 1 0-2.3 5.7" />
      <path d="M20 4v7h-7" />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3.5c.6 3.4 1.6 4.4 5 5-3.4.6-4.4 1.6-5 5-.6-3.4-1.6-4.4-5-5 3.4-.6 4.4-1.6 5-5Z" />
      <path d="M18.5 15c.3 1.7.8 2.2 2.5 2.5-1.7.3-2.2.8-2.5 2.5-.3-1.7-.8-2.2-2.5-2.5 1.7-.3 2.2-.8 2.5-2.5Z" />
      <path d="M5 14c.25 1.4.6 1.75 2 2-1.4.25-1.75.6-2 2-.25-1.4-.6-1.75-2-2 1.4-.25 1.75-.6 2-2Z" />
    </svg>
  )
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 6.5c1.5-1.5 3.6-2.2 6-2.2 1 0 1.8.1 2.4.3v13c-.6-.2-1.4-.3-2.4-.3-2.4 0-4.5.7-6 2.2-1.5-1.5-3.6-2.2-6-2.2-1 0-1.8.1-2.4.3v-13c.6-.2 1.4-.3 2.4-.3 2.4 0 4.5.7 6 2.2Z" />
      <path d="M12 6.5v13" />
    </svg>
  )
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  )
}

export function BrandMark(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        d="M16 4.5c.9 5.2 2.3 6.6 7.5 7.5-5.2.9-6.6 2.3-7.5 7.5-.9-5.2-2.3-6.6-7.5-7.5 5.2-.9 6.6-2.3 7.5-7.5Z"
        fill="currentColor"
      />
      <path
        d="M23.5 20c.45 2.55 1.1 3.2 3.65 3.65-2.55.45-3.2 1.1-3.65 3.65-.45-2.55-1.1-3.2-3.65-3.65 2.55-.45 3.2-1.1 3.65-3.65Z"
        fill="currentColor"
        opacity=".55"
      />
      <path
        d="M8 20c.3 1.7.75 2.15 2.45 2.45C8.75 22.75 8.3 23.2 8 24.9c-.3-1.7-.75-2.15-2.45-2.45C7.25 22.15 7.7 21.7 8 20Z"
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  )
}
