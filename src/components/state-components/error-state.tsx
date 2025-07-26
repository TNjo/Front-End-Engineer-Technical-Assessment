import { AlertCircle } from "lucide-react"
import type { ErrorStateProps } from "@/types/state-components"

export default function ErrorState({ title = "Error", message, showTitle = true }: ErrorStateProps) {
  return (
    <section className="space-y-6">
      {showTitle && <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>}
      <div className="flex items-center justify-center py-12 text-red-600">
        <AlertCircle className="h-8 w-8" />
        <span className="ml-2">{message}</span>
      </div>
    </section>
  )
}
