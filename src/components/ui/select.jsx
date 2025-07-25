import * as React from "react"

const Select = ({ value, onValueChange, children, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const selectRef = React.useRef(null)

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={selectRef} className="relative" {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            value, 
            onValueChange: (newValue) => {
              onValueChange?.(newValue)
              setIsOpen(false)
            },
            isOpen,
            setIsOpen
          })
        }
        return child
      })}
    </div>
  )
}

const SelectTrigger = React.forwardRef(({ className = "", children, value, onValueChange, isOpen, setIsOpen, ...props }, ref) => {
  // Remover props específicas do React antes de passar para o DOM
  const { value: _, onValueChange: __, isOpen: ___, setIsOpen: ____, ...domProps } = props
  
  return (
    <button
      ref={ref}
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-md border border-aspc-dark/20 bg-aspc-white px-3 py-2 text-sm font-raleway focus:outline-none focus:ring-2 focus:ring-aspc-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:border-aspc-primary/50 ${className}`}
      onClick={() => setIsOpen?.(!isOpen)}
      {...domProps}
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      >
        <path
          d="m4.93179 5.43179c0.20081-0.20081 0.52632-0.20081 0.72713 0l2.34108 2.34108 2.34108-2.34108c0.20081-0.20081 0.52632-0.20081 0.72713 0 0.20081 0.20081 0.20081 0.52632 0 0.72713l-2.70455 2.70455c-0.20081 0.20081-0.52632 0.20081-0.72713 0l-2.70455-2.70455c-0.20081-0.20081-0.20081-0.52632 0-0.72713z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder, value, value: customValue }) => {
  const displayValue = customValue || value
  return <span className="text-aspc-dark font-raleway">{displayValue || <span className="text-aspc-dark/50">{placeholder}</span>}</span>
}

const SelectContent = React.forwardRef(({ className = "", children, value, onValueChange, isOpen, ...props }, ref) => {
  if (!isOpen) return null

  // Remover props específicas do React antes de passar para o DOM
  const { value: _, onValueChange: __, isOpen: ___, ...domProps } = props

  return (
    <div
      ref={ref}
      className={`absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border border-aspc-dark/20 bg-aspc-white shadow-lg ${className}`}
      {...domProps}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { selectedValue: value, onValueChange })
        }
        return child
      })}
    </div>
  )
})
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef(({ className = "", children, value: itemValue, onValueChange, selectedValue, ...props }, ref) => {
  // Remover props específicas do React antes de passar para o DOM
  const { value: _, onValueChange: __, selectedValue: ___, ...domProps } = props
  
  return (
    <div
      ref={ref}
      className={`relative flex w-full cursor-pointer select-none items-center px-3 py-2 text-sm font-raleway outline-none hover:bg-aspc-primary/10 hover:text-aspc-primary focus:bg-aspc-primary/10 focus:text-aspc-primary ${
        selectedValue === itemValue ? "bg-aspc-primary/20 text-aspc-primary font-medium" : "text-aspc-dark"
      } ${className}`}
      onClick={() => onValueChange?.(itemValue)}
      {...domProps}
    >
      {children}
    </div>
  )
})
SelectItem.displayName = "SelectItem"

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }