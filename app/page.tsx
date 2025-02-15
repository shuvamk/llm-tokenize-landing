"use client"

import { Button } from "@/components/ui/button"
import { Terminal, Github, FileCode, GitFork, Database, Copy, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CommandCard } from "@/components/command-card"
import { FeatureCard } from "@/components/feature-card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const features = [
  {
    title: "Recursive Processing",
    description: "Handles entire directory structures with ease",
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    title: "Smart Ignores",
    description: "Automatically skips unnecessary files and respects .gitignore",
    icon: <GitFork className="h-6 w-6" />,
  },
  {
    title: "Token Optimization",
    description: "Calculates and optimizes token count for LLM context",
    icon: <Database className="h-6 w-6" />,
  },
]

const commands = [
  {
    description: "Process specific project with custom output",
    code: "npx llm-tokenize ./my-project gpt-4 ./docs/codebase.md",
  },
  {
    description: "Process with different LLM model",
    code: "npx llm-tokenize . gpt-3.5-turbo",
  },
  {
    description: "Global installation",
    code: "npm install -g llm-tokenize",
  },
]

export default function Home() {
  const [copiedCommand, setCopiedCommand] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(index)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <section className="container relative space-y-6 py-24 md:py-32 lg:py-40">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center"
          >
            <motion.h1
              variants={item}
              className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
            >
              Supercharge your codebase
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                {" "}
                for LLM processing
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
            >
              A powerful CLI tool to convert and tokenize codebases for LLM usage.
              Perfect for preparing your project for AI analysis!
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl"
            >
              <div className="flex-1 w-full">
                <div className="flex h-11 items-center rounded-lg border bg-muted">
                  <pre className="flex-1 overflow-x-auto text-sm font-mono pl-4">
                    <code>npx llm-tokenize .</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 aspect-square rounded-l-none"
                    onClick={() => copyToClipboard("npx llm-tokenize .", -1)}
                  >
                    {copiedCommand === -1 ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-11 gap-2 w-full sm:w-auto whitespace-nowrap"
              >
                <a
                  href="https://github.com/shuvamk/llm-tokenize"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section id="features" className="container py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[980px] space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Key Features</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to prepare your codebase for LLM processing
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <FeatureCard
                  key={i}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="commands" className="container py-12 md:py-24 bg-muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[980px] space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Command Examples</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore the various ways to use LLM Tokenize
              </p>
            </div>

            <div className="grid gap-4">
              {commands.map((command, i) => (
                <CommandCard
                  key={i}
                  description={command.description}
                  code={command.code}
                  index={i}
                  copiedCommand={copiedCommand}
                  onCopy={copyToClipboard}
                />
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}