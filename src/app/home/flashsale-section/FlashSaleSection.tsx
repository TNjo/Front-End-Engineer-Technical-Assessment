"use client"

import { useFlashSaleProducts } from "@/hooks/use-product"
import Card from "@/components/card/card"
import LoadingState from "@/components/state-components/loading-state"
import ErrorState from "@/components/state-components/error-state"
import EmptyState from "@/components/state-components/empty-state"

export default function FlashSaleSection() {
  const { data: products, loading, error } = useFlashSaleProducts()

  if (loading) {
    return <LoadingState title="Flash Sale" message="Loading flash sale products..." />
  }

  if (error) {
    return <ErrorState title="Flash Sale" message={`Failed to load products: ${error}`} />
  }

  if (!products || products.length === 0) {
    return <EmptyState title="Flash Sale" message="No products available at the moment." />
  }

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">Flash Sale</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
