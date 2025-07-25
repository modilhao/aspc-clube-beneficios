import * as React from "react"

const Tabs = ({ defaultValue, className = "", children, ...props }) => {
  const [value, setValue] = React.useState(defaultValue)
  
  return (
    <div className={className} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            activeValue: value, 
            setActiveValue: setValue 
          })
        }
        return child
      })}
    </div>
  )
}

const TabsList = React.forwardRef(({ className = "", children, activeValue, setActiveValue, ...props }, ref) => {
  // Remove custom props to avoid passing them to DOM
  const { activeValue: _, setActiveValue: __, ...domProps } = props
  
  return (
    <div
      ref={ref}
      className={`inline-flex h-10 items-center justify-center rounded-md bg-aspc-light p-1 text-aspc-dark/70 ${className}`}
      {...domProps}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            activeValue, 
            setActiveValue 
          })
        }
        return child
      })}
    </div>
  )
})
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(({ className = "", value: triggerValue, activeValue, setActiveValue, children, ...props }, ref) => {
  // Remove custom props to avoid passing them to DOM
  const { activeValue: _, setActiveValue: __, ...domProps } = props
  
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aspc-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-raleway ${
        activeValue === triggerValue 
          ? "bg-aspc-white text-aspc-dark shadow-sm" 
          : "hover:bg-aspc-white/50"
      } ${className}`}
      onClick={() => setActiveValue?.(triggerValue)}
      {...domProps}
    >
      {children}
    </button>
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(({ className = "", value: contentValue, activeValue, setActiveValue, children, ...props }, ref) => {
  // Remove custom props to avoid passing them to DOM
  const { activeValue: _, setActiveValue: __, ...domProps } = props
  
  return (
    <div
      ref={ref}
      className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aspc-primary focus-visible:ring-offset-2 ${
        activeValue === contentValue ? "block" : "hidden"
      } ${className}`}
      {...domProps}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }