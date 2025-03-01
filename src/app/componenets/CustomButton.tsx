import type React from "react"
import Link from "next/link"
import Script from "next/script"

interface CustomButtonProps {
  text: string
  href?: string
  onClick?: () => void
  fullWidth?: boolean
  className?: string
  variant?: "primary" | "secondary" // Prop for button style variant
  size?: "default" | "small" // New prop for button size
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  href,
  onClick,
  fullWidth = false,
  className = "",
  variant = "primary", // Default to primary style
  size = "default", // Default to larger size
}) => {
  // Size classes
  const sizeClasses = size === "default" ? "px-8 py-3 text-lg" : "px-6 py-2 text-sm"

  // Define base classes based on variant and size
  const baseClassName =
    variant === "primary"
      ? `inline-block ${sizeClasses} bg-primary/10 text-primary border-2 border-primary font-serif font-semibold transition-all duration-300 ease-in-out hover:bg-primary/20 hover:shadow-md relative overflow-hidden group`
      : `vintage-button inline-block ${sizeClasses} font-semibold relative overflow-hidden group hover:shadow-md`

  const fullWidthClass = fullWidth ? "w-full text-center" : ""
  const combinedClassName = `${baseClassName} ${fullWidthClass} ${className}`.trim()

  // Content based on variant
  const content =
    variant === "primary" ? (
      <>
        <span className="relative z-10">{text}</span>
        <span className="absolute inset-0 bg-primary/5 transform -skew-x-12 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
      </>
    ) : (
      <>
        <span className="relative z-10">{text}</span>
        <span className="hidden absolute inset-0 bg-primary/90 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </>
    )

  if (href === "#") {
    return (
      <>
        <button type="button" className={combinedClassName} data-scroll-top>
          {content}
        </button>
        <Script id="scroll-top-script" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              if (e.target && e.target.closest('[data-scroll-top]')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            });
          `}
        </Script>
      </>
    )
  }

  if (href && href !== "#") {
    const shouldOpenNewTab = href.includes(".")
    return (
      <Link
        href={href}
        className={combinedClassName}
        {...(shouldOpenNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  )
}

export default CustomButton

