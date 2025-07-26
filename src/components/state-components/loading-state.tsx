import { Loader2 } from "lucide-react"
import type { LoadingStateProps } from "@/types/state-components"

export default function LoadingState({
  title = "Loading",
  message = "Loading products...",
  showTitle = true,
}: LoadingStateProps) {
  return (
    <section className="space-y-6">
      {showTitle && <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>}
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        <span className="ml-2 text-gray-600">{message}</span>
      </div>
    </section>
  )
}
