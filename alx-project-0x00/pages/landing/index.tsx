import React from "react"
import Button from "@/components/Button"

const LandingButtons: React.FC = () => {
  const sizes: Array<"small" | "medium" | "large"> = ["small", "medium", "large"]
  const shapes: Array<"rounded-sm" | "rounded-md" | "rounded-full"> = [
    "rounded-sm",
    "rounded-md",
    "rounded-full",
  ]

  return (
    <div className="min-h-screen w-full p-6 md:p-10">
      <h1 className="text-2xl font-bold mb-6">Buttons Showcase</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Sizes</h2>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <Button key={size} title={`Button ${size}`} size={size} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Shapes</h2>
        <div className="flex flex-wrap gap-3 items-center">
          {shapes.map((shape) => (
            <Button key={shape} title={shape} shape={shape} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">All combinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sizes.map((size) =>
            shapes.map((shape) => (
              <div key={`${size}-${shape}`} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="text-sm text-[#929292] w-40">{size} / {shape}</div>
                <Button title="Click me" size={size} shape={shape} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default LandingButtons
