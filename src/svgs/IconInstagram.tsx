interface IconProps {
  className: string
}

export const IconInstagram = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <rect
        x="32"
        y="32"
        width="192"
        height="192"
        rx="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <circle cx="180" cy="76" r="12" fill="currentColor" />
    </svg>
  )
}
