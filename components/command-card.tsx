"use client"

import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface CommandCardProps {
  description: string
  code: string
  index: number
  copiedCommand: number | null
  onCopy: (text: string, index: number) => void
}

export function CommandCard({ description, code, index, copiedCommand, onCopy }: CommandCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-4">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4"
        onClick={() => onCopy(code, index)}
      >
        {copiedCommand === index ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
      <div className="space-y-2">
        <p className="text-sm font-medium">{description}</p>
        <pre className="overflow-x-auto text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}