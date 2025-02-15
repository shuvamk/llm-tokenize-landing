"use client"

import { Terminal, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6" />
          <span className="font-bold">LLM Tokenize</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Created with ❤️ by{" "}
          <a
            href="https://github.com/shuvamk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Shuvam Kumar
          </a>
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/shuvamk/llm-tokenize"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}