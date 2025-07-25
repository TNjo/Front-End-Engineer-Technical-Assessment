import { Package } from "lucide-react"
import type { EmptyStateProps } from "@/types/state-components"

export default function EmptyState({ title = "No Items Found", message, showTitle = true, icon }: EmptyStateProps) {
  return (
    <section className="space-y-6">
      {showTitle && <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>}
      <div className="flex flex-col items-center justify-center py-12 text-gray-600">
        {icon || <Package className="h-12 w-12 mb-4 text-gray-400" />}
        <span className="text-center">{message}</span>
      </div>
    </section>
  )
}
