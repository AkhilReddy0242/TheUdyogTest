"use client"

import { useEffect, useState } from "react"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  setToastFunction,
} from "@/components/ui/toast"

export function ToastContainer() {
  const [toasts, setToasts] = useState<{
    id: string;
    title?: string;
    description?: string;
    variant?: "default" | "destructive";
  }[]>([])

  useEffect(() => {
    setToastFunction((options) => {
      const id = Math.random().toString(36).substr(2, 9)
      setToasts((prev) => [...prev, { id, ...options }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 5000)
    })
  }, [])

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, variant }) => (
        <Toast key={id} variant={variant}>
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
} 