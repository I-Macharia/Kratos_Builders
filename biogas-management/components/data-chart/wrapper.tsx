"use client"

import type React from "react"

interface ChartWrapperProps {
  content: React.ComponentType<any>
  title?: string
  description?: string
  className?: string
}

export function ChartWrapper({ content: ChartComponent, title, description, className }: ChartWrapperProps) {
  return (
    <div className={className}>
      {title || description ? (
        <div className="mb-4">
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      ) : null}
      <div className="h-full w-full">
        <ChartComponent />
      </div>
    </div>
  )
}

