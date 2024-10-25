import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold mb-6 text-foreground">Hello</h1>
      <Button>Click me</Button>
    </div>
  )
}