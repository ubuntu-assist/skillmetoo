import * as React from 'react'

const VisuallyHidden = ({
  children,
  ...props
}: React.HTMLProps<HTMLElement>) => {
  return (
    <span
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: '0',
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export { VisuallyHidden }
