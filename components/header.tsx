"use client"

import { Terminal, Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex md:hidden">
          <Terminal className="h-6 w-6" />
        </div>
        <div className="hidden md:flex md:items-center md:space-x-2">
          <Terminal className="h-6 w-6" />
          <span className="font-bold">LLM Tokenize</span>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-4 md:space-x-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-foreground/80">Features</a>
            <a href="#commands" className="transition-colors hover:text-foreground/80">Commands</a>
            <a href="https://github.com/shuvamk/llm-tokenize" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80">
              <Github className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}